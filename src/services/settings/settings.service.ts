import { axiosWithAuth } from "../../api/interceptors.ts";
import {
  DefaultConfigParamsTypes,
  WalletsConfigParamsTypes,
  WalletsUpdateParamsTypes,
} from "../../types/settings.types.ts";

//type Props = {};

export const settingsService = {
  async botConfigs() {
    const response =
      await axiosWithAuth.get<DefaultConfigParamsTypes[]>(`/configs/bot`);

    return response.data;
  },
  async updateBotConfigs(params: DefaultConfigParamsTypes) {
    const response = await axiosWithAuth.put<DefaultConfigParamsTypes[]>(
      `/configs/bot/${params?.scope}`,
      { ...params },
    );

    return response.data;
  },
  async updateWallets({
    toCreate,
    toUpdate,
    toDelete,
  }: WalletsUpdateParamsTypes) {
    const response = await axiosWithAuth.put<WalletsUpdateParamsTypes>(
      `/wallets/update`,
      {
        toUpdate,
        toCreate,
        toDelete,
      },
    );

    return response.data;
  },
  async wallets() {
    const response =
      await axiosWithAuth.get<WalletsConfigParamsTypes[]>(`/wallets`);

    return response.data;
  },
};
