import { TLoginPayload } from "@/common/types";
import axiosInstance from "./config";
import { CustomError, getErrorMessage } from "@/helpers/handleErrorResponse";

export const loginApi = async (body: TLoginPayload) => {
  try {
    const { data } = await axiosInstance.post("/auth/login", {
      username: body.username,
      password: body.password
    });
    return data;
  } catch (error) {
    const { status, message } = getErrorMessage(error);
    const newError = new CustomError(message, status);
    throw newError;
  }
};
