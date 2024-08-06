import { useQuery } from "@tanstack/react-query";
import { UpdateUserRefType } from "../../types/users.types.ts";
import { userRefBalanceUpdateService } from "../../services/users/user-ref-balance-update.service.ts";
import { DailyRequestsType } from "../../types/stats-daily.types.ts";

export function usePostRefBalanceUser(params: UpdateUserRefType) {
  return useQuery<DailyRequestsType>({
    enabled: false,
    queryKey: [params.id],
    queryFn: async () => {
      const res = await userRefBalanceUpdateService.update(params);

      if (!res) {
        throw new Error("Network response was not ok");
      }
      return res;
    },
  });
}
