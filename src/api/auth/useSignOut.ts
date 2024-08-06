import { useQueryClient } from "@tanstack/react-query";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { QUERY_KEY } from "shared/constants/auth.ts";
import { removeFromStorage } from "../../services/auth-token.service.ts";

type IUseSignOut = () => void;

export function useSignOut(): IUseSignOut {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useCallback(() => {
    removeFromStorage();
    queryClient.setQueryData([QUERY_KEY.user], null);
    navigate("/auth");
  }, [navigate, queryClient]);
}
