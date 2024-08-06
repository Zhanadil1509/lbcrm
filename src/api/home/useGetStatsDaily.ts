import { useQuery } from "@tanstack/react-query";
import { statsDailyService } from "services/stats/stats-daily.service.ts";
import { DailyRequestsType } from "../../types/stats-daily.types.ts";

export function useGetStatsDaily() {
  return useQuery<DailyRequestsType>({
    queryKey: ["statsDaily"],
    queryFn: async () => {
      const res = await statsDailyService.allStats();

      if (!res) {
        throw new Error("Network response was not ok");
      }
      return res;
    },
  });
}
