import { useQuery } from "@tanstack/react-query";
import { dealsService } from "services/deals/deals.service.ts";
import {
  DealDetailsType,
  GetApplicationsType,
  GetDealDetailsType,
} from "../../types/deals.types.ts";

export function useGetDealDetails({
  dealLink,
  id,
}: GetApplicationsType & GetDealDetailsType) {
  return useQuery<DealDetailsType>({
    queryKey: [`deals/${dealLink}/${id}`],
    queryFn: async () => {
      const res = await dealsService.dealDetails({ dealLink, id });

      if (!res) {
        throw new Error("Network response was not ok");
      }
      return res;
    },
  });
}
