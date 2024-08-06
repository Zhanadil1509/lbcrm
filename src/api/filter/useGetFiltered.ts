import { useQuery } from "@tanstack/react-query";
import { UsersItemType } from "../../types/users.types.ts";
import { dealsService } from "../../services/deals/deals.service.ts";
import {
  EnabledApplicationsType,
  GetApplicationsType,
  GetFilteredApplicationsType,
} from "../../types/deals.types.ts";

export function useGetFiltered({
  dealLink,
  queries,
  enabled,
}: GetApplicationsType &
  GetFilteredApplicationsType &
  EnabledApplicationsType) {
  return useQuery<UsersItemType>({
    enabled: enabled,
    queryKey: [dealLink],
    queryFn: async () => {
      const res = await dealsService.allDealsFiltered({ dealLink, queries });

      if (!res) {
        throw new Error("Network response was not ok");
      }
      return res;
    },
  });
}
