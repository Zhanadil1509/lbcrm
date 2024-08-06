import { useQuery } from "@tanstack/react-query";
import { UserItemType } from "../../types/users.types.ts";
import { listUserDetailsService } from "services/users/user-details.service.ts";

export function useGetSingleUser(id: string | undefined) {
  return useQuery<UserItemType>({
    queryKey: [`single-${id}`],
    queryFn: async () => {
      const res = await listUserDetailsService.singleUser(id);

      if (!res) {
        throw new Error("Network response was not ok");
      }
      return res;
    },
  });
}
