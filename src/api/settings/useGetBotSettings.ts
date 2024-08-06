import { useQuery } from "@tanstack/react-query";
import { settingsService } from "../../services/settings/settings.service.ts";
import { DefaultConfigParamsTypes } from "../../types/settings.types.ts";

export function useGetBotSettings() {
  return useQuery<DefaultConfigParamsTypes[]>({
    queryKey: [`botConfig`],
    queryFn: async () => {
      const res = await settingsService.botConfigs();

      if (!res) {
        throw new Error("Network response was not ok");
      }
      return res;
    },
  });
}
