import { EnumTokens } from "./auth.service.ts";

export const getAccessToken = () => {
  const accessToken = localStorage.getItem(EnumTokens.ACCESS_TOKEN);
  return accessToken || null;
};

export const saveTokenStorage = (accessToken: string) => {
  localStorage.setItem(EnumTokens.ACCESS_TOKEN, JSON.stringify(accessToken));
};

export const removeFromStorage = () => {
  localStorage.removeItem(EnumTokens.ACCESS_TOKEN);
};
