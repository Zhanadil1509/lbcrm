import { useQuery } from "@tanstack/react-query";
import { UsersItemType } from "types/users.types.ts";
import { dealsService } from "services/deals/deals.service.ts";
import {
  EnabledApplicationsType,
  GetApplicationsType,
} from "../../types/deals.types.ts";

export function useGetApplications({
  dealLink,
  enabled,
}: GetApplicationsType & EnabledApplicationsType) {
  return useQuery<UsersItemType>({
    enabled,
    queryKey: [`deals/${dealLink}/all`],
    queryFn: async () => {
      const res = await dealsService.allDeals({ dealLink });

      if (!res) {
        throw new Error("Network response was not ok");
      }
      return res;
    },
  });
}
