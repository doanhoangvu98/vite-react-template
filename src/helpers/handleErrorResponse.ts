import { ERROR_MESSAGE } from "@/constants/message";

export class CustomError extends Error {
  code: number;
  constructor(message: string, code: number) {
    super(message);
    this.code = code;
  }
}

export const getErrorMessage = (error: any) => {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    let errorMessage = error.response.data?.error;
    if (error.response.data?.errors) {
      errorMessage =
        typeof error.response.data?.errors === "string"
          ? error.response.data?.errors
          : Object.values(error.response.data?.errors)[0];
    }
    return {
      status: error.response.status,
      message: errorMessage ?? ERROR_MESSAGE.SOMETHING_WENT_WRONG
    };
  } else if (error.request) {
    // The request was made but no response was received
    // console.log('::ERROR REQUEST:', error.request);
    return {
      status: 500,
      message: error?.message
    };
  } else {
    // Something happened in setting up the request that triggered an Error
    // console.log('::ERROR REQUEST:', error?.message);
    return {
      status: error?.code ?? 500,
      message: error?.message
    };
  }
};
