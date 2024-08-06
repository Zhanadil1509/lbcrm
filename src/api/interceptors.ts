import axios, { type CreateAxiosDefaults } from "axios";
import {
  getAccessToken,
  removeFromStorage,
} from "services/auth-token.service.ts";
import { toast } from "react-toastify";
// import { errorCatch } from "services/auth.service.ts";

const options: CreateAxiosDefaults = {
  baseURL: "https://api.exagent.cloud/",
  headers: {
    "Content-Type": "application/json",
  },
};

const axiosClassic = axios.create(options);
const axiosWithAuth = axios.create(options);

axiosWithAuth.interceptors.request.use((config) => {
  const accessToken = getAccessToken();

  if (config.headers && accessToken)
    config.headers.authorization = accessToken.replace(/"/g, "");

  return config;
});

axiosClassic.interceptors.response.use(
  (config) => config,
  async (error) => {
    console.log(error?.response);
    if (error?.response && error?.response.status > 201) {
      toast.error(error.response?.data?.message, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  },
);
axiosWithAuth.interceptors.response.use(
  (config) => config,
  async (error) => {
    if (error?.response && error?.response.status > 201) {
      toast.error(error.response?.data?.message, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    if (error?.response && error?.response.status === 401) {
      removeFromStorage();
    }
    /*const originalRequest = error.config;

    if (
      error?.response?.status === 401 /!*||
        errorCatch(error) === "jwt expired" ||
        errorCatch(error) === "jwt must be provided"*!/ /!* &&
      error.config &&
      !error.config._isRetry*!/
    ) {
      originalRequest._isRetry = true;
      try {
        // await authService.getNewTokens();
        removeFromStorage();
        return axiosWithAuth.request(originalRequest);
      } catch (error) {
        removeFromStorage();
        //if (errorCatch(error as AxiosError) === "jwt expired")
      }
    }

    throw error;*/
  },
);

export { axiosClassic, axiosWithAuth };
