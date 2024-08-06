import { useQuery } from "@tanstack/react-query";
import { listAllUsersService } from "../../services/users/users.service.ts";
import { UsersItemType } from "../../types/users.types.ts";
import { EnabledApplicationsType } from "../../types/deals.types.ts";

export function useGetAllUsers({ enabled }: EnabledApplicationsType) {
  return useQuery<UsersItemType>({
    enabled,
    queryKey: ["users"],
    queryFn: async () => {
      const res = await listAllUsersService.allUsers();

      if (!res) {
        throw new Error("Network response was not ok");
      }
      return res;
    },
  });
}
