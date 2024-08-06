import { axiosWithAuth } from "api/interceptors.ts";
import { UsersItemType } from "types/users.types.ts";

//type Props = {};

export const listAllUsersService = {
  async allUsers() {
    const response = await axiosWithAuth.get<UsersItemType>(`/users`);

    return response.data;
  },
};
