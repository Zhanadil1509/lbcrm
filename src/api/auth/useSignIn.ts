import { IAuthForm } from "types/auth.types.ts";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { authService } from "../../services/auth.service.ts";
import { AxiosError } from "axios";
import { QUERY_KEY } from "shared/constants/auth.ts";

export function useSignIn() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (token: IAuthForm) => authService.login(token),
    onSuccess: (data: string) => {
      queryClient.setQueryData([QUERY_KEY.user], data);
      navigate("/");
    },
    onError: (error: AxiosError) => {
      console.log(error);
    },
  });
}
