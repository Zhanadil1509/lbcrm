import { axiosWithAuth } from "../../api/interceptors.ts";
import { DailyRequestsType } from "types/stats-daily.types.ts";
import { UpdateUserRefType } from "../../types/users.types.ts";

//type Props = {};

export const userRefBalanceUpdateService = {
  async update(params: UpdateUserRefType) {
    const response = await axiosWithAuth.post<DailyRequestsType>(
      `/users/updateRefBalance`,
      {
        params,
      },
    );

    return response.data;
  },
};
