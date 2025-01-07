import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface AuthState {
  userInfo: any;
  accessToken: any;
}

const initialState: AuthState = {
  userInfo: null,
  accessToken: null
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<any>) => {
      return {
        ...state,
        ...action.payload
      };
    },
    clearAuth: () => initialState
  }
});

export const { setAuth, clearAuth } = authSlice.actions;
export const authReducer = authSlice.reducer;
