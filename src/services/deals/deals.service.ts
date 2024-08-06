import { axiosWithAuth } from "api/interceptors.ts";
import {
  DealDetailsType,
  DealsItemType,
  GetApplicationsType,
  GetDealDetailsType,
  GetFilteredApplicationsType,
} from "../../types/deals.types.ts";
import { AxiosResponse } from "axios";

export const dealsService = {
  async allDeals({ dealLink }: GetApplicationsType) {
    const response = await axiosWithAuth.get<DealsItemType>(
      `/deals/${dealLink}/all`,
    );

    return response.data;
  },

  async dealDetails({
    dealLink,
    id,
  }: GetApplicationsType & GetDealDetailsType) {
    const response = await axiosWithAuth.get<DealDetailsType>(
      `/deals/${dealLink}/${id}`,
    );

    return response.data;
  },
  async allDealsFiltered({
    dealLink,
    queries,
  }: GetApplicationsType & GetFilteredApplicationsType) {
    const response = await axiosWithAuth.get<DealsItemType>(
      `/${dealLink}?${queries}`,
    );

    return response.data;
  },
  async dealApprove({
    dealLink,
    id,
  }: GetApplicationsType & GetDealDetailsType) {
    const response = await axiosWithAuth.post<AxiosResponse>(
      `/deals/approve/${dealLink}`,
      { id },
    );

    return response.data;
  },
  /*async allDealsRubBtc() {
    const response =
      await axiosWithAuth.get<DealsItemType>(`/deals/rubBtc/all`);

    return response.data;
  },
  async allDealsPartnerRequests() {
    const response = await axiosWithAuth.get<DealsItemType>(
      `/deals/partnerRequests/all`,
    );

    return response.data;
  },*/
};
