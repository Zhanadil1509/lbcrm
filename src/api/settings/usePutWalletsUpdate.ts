import { useMutation, useQueryClient } from "@tanstack/react-query";
import { settingsService } from "services/settings/settings.service.ts";
import { WalletsUpdateParamsTypes } from "types/settings.types.ts";
//import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";

export function usePutWalletsUpdate() {
  const queryClient = useQueryClient();
  //const navigate = useNavigate();

  return useMutation({
    mutationFn: ({ toCreate, toUpdate, toDelete }: WalletsUpdateParamsTypes) =>
      settingsService.updateWallets({ toCreate, toUpdate, toDelete }),
    onSuccess: (data: WalletsUpdateParamsTypes) => {
      queryClient.setQueryData(["updateConfigWallets"], data);
    },
    onError: (error: AxiosError) => {
      console.log(error);
    },
  });
}
