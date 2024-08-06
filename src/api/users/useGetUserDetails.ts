import { useQuery } from "@tanstack/react-query";
import { UserDetailsType } from "../../types/users.types.ts";
import { listUserDetailsService } from "../../services/users/user-details.service.ts";

export function useGetUserDetails(id: string | undefined) {
  return useQuery<UserDetailsType>({
    queryKey: [id],
    queryFn: async () => {
      const res = await listUserDetailsService.userDetails(id);

      if (!res) {
        throw new Error("Network response was not ok");
      }
      return res;
    },
  });
}
