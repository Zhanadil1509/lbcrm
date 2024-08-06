import { axiosWithAuth } from "api/interceptors.ts";
import { UserDetailsType, UserItemType } from "types/users.types.ts";

//type Props = {};

export const listUserDetailsService = {
  async userDetails(id: string | undefined) {
    const response = await axiosWithAuth.get<UserDetailsType>(
      `/users/requests/${id}`,
    );

    return response.data;
  },

  async singleUser(id: string | undefined) {
    const response = await axiosWithAuth.get<UserItemType>(
      `/users/one?id=${id}`,
    );

    return response.data;
  },
};
