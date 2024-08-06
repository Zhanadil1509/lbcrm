import { useMutation, useQueryClient } from "@tanstack/react-query";
import { settingsService } from "../../services/settings/settings.service.ts";
import { DefaultConfigParamsTypes } from "../../types/settings.types.ts";
//import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";

export function usePutUpdateBotSettings() {
  const queryClient = useQueryClient();
  //const navigate = useNavigate();

  return useMutation({
    mutationFn: (params: DefaultConfigParamsTypes) =>
      settingsService.updateBotConfigs(params),
    onSuccess: (data: DefaultConfigParamsTypes[]) => {
      queryClient.setQueryData(["updateConfigBotMutation"], data);
    },
    onError: (error: AxiosError) => {
      console.log(error);
    },
  });
}
