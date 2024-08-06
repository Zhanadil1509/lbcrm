import { useQuery } from "@tanstack/react-query";
import { settingsService } from "../../services/settings/settings.service.ts";
import { WalletsConfigParamsTypes } from "../../types/settings.types.ts";

export function useGetWalletsSettings() {
  return useQuery<WalletsConfigParamsTypes[]>({
    queryKey: [`wallets`],
    queryFn: async () => {
      const res = await settingsService.wallets();

      if (!res) {
        throw new Error("Network response was not ok");
      }
      return res;
    },
  });
}
