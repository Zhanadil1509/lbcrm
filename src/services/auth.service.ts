import { axiosClassic } from "../api/interceptors.ts";
import { removeFromStorage, saveTokenStorage } from "./auth-token.service.ts";
import { IAuthForm } from "../types/auth.types.ts";
import { AxiosError } from "axios";

export enum EnumTokens {
  "ACCESS_TOKEN" = "accessToken",
  "REFRESH_TOKEN" = "refreshToken",
}

export const errorCatch = (error: AxiosError) => {
  const message = error?.response?.data;

  return typeof message === "object" ? message : error?.message;
};

export const authService = {
  async login({ token }: IAuthForm) {
    const response = await axiosClassic.post<string>(`/auth/login`, {
      token,
    });

    if (response.data) saveTokenStorage(response.data);

    return response.data;
  },

  async logout() {
    const response = await axiosClassic.post<boolean>("/auth/logout");

    if (response.data) removeFromStorage();

    return response;
  },

  /*async getNewTokens() {
    const response = await axiosClassic.post<IAuthResponse>(
      "/auth/login/access-token",
    );

    if (response.data.accessToken) saveTokenStorage(response.data.accessToken);

    return response;
  },*/
};
