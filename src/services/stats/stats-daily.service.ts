import { axiosWithAuth } from "../../api/interceptors.ts";
import { DailyRequestsType } from "types/stats-daily.types.ts";

//type Props = {};

export const statsDailyService = {
  async allStats() {
    const response = await axiosWithAuth.get<DailyRequestsType>(`/stats`);

    return response.data;
  },
};
