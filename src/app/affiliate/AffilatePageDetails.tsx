/*
type Props = {

};
*/

import { useParams } from "react-router-dom";
import { ButtonUi } from "components/ui/button";
import { useGetDealDetails } from "api/applications/useGetDealDetails.ts";
import { usePostApproveDeal } from "../../api/applications/usePostApproveDeal.ts";
import {
  columnsDataApps,
  columnsDataStatus,
} from "../../shared/constants/columns.ts";
import { Label } from "flowbite-react";

export function AffiliatePageDetails() {
  const { id } = useParams();
  const dealLink = "rubBtc";
  const { data, isLoading, error } = useGetDealDetails({
    dealLink,
    id,
  });
  const { refetch } = usePostApproveDeal({
    dealLink: "rub-btc",
    id,
  });

  const onChangeRef = () => refetch();

  if (isLoading) return <div>Loading...</div>;

  if (error) return "Error request " + error;

  return (
    <div className="grid grid-cols-8 gap-4">
      {isLoading ? (
        <div> Loading...</div>
      ) : (
        data && (
          <>
            <div className="col-span-2">
              <div>
                {Object.keys(columnsDataApps).map(
                  (col, i) =>
                    col !== "link" &&
                    col !== "total_deals" &&
                    col !== "ref_balance" && (
                      <Label
                        key={col + i}
                        className="z-50 text-ellipsis overflow-hidden hover:overflow-visible relative bg-white py-1 px-3 rounded w-full text-base flex justify-between mb-2"
                      >
                        <span>{col}: </span>
                        {col === "status" ? (
                          <span>
                            {columnsDataStatus[data?.status.toString()]}
                          </span>
                        ) : col === "requisites" ? (
                          <span>{data.requestData?.wallet_payment}</span>
                        ) : col === "chat_id" ? (
                          <span>{data.user?.id}</span>
                        ) : (
                          <span>{data[columnsDataApps[col]]?.toString()}</span>
                        )}
                      </Label>
                    ),
                )}
              </div>
              <ButtonUi
                disabled={data?.status === "completed"}
                title={
                  data?.status === "completed" ? "Подтвержден" : "Подтвердить"
                }
                className="ml-auto mr-auto"
                onClick={onChangeRef}
              />
            </div>
            <div className="col-span-6 pl-4 border-l border-gray-200">
              {data?.statusHistory?.map((h, i) => (
                <div key={i} className="mb-4 pb-4 border-b border-gray-200">
                  <Label className="z-50 text-ellipsis overflow-hidden hover:overflow-visible relative bg-white py-1 px-3 rounded w-full text-base flex justify-between mb-2">
                    <span>status: </span>
                    <span>{h.status}</span>
                  </Label>
                  <Label className="z-50 text-ellipsis overflow-hidden hover:overflow-visible relative bg-white py-1 px-3 rounded w-full text-base flex justify-between mb-2">
                    <span>updateTime: </span>
                    <span>{h.updateTime}</span>
                  </Label>
                  <Label className="z-50 text-ellipsis overflow-hidden hover:overflow-visible relative bg-white py-1 px-3 rounded w-full text-base flex justify-between mb-2">
                    <span>updatedBy: </span>
                    <span>{h.updatedBy}</span>
                  </Label>
                </div>
              ))}
            </div>
          </>
        )
      )}
    </div>
  );
}
