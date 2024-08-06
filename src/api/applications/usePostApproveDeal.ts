import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { dealsService } from "../../services/deals/deals.service.ts";
import {
  GetApplicationsType,
  GetDealDetailsType,
} from "../../types/deals.types.ts";

export function usePostApproveDeal({
  dealLink,
  id,
}: GetApplicationsType & GetDealDetailsType) {
  return useQuery<AxiosResponse>({
    enabled: false,
    queryKey: ["approve" + id],
    queryFn: async () => {
      const res = await dealsService.dealApprove({ dealLink, id });

      if (!res) {
        throw new Error("Network response was not ok");
      }
      return res;
    },
  });
}
