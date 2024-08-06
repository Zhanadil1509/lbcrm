/*
type Props = {

};
*/

import { TableComponent } from "components/table";
import {
  columnsDataUserDetails,
  columnsDataUsers,
} from "shared/constants/columns.ts";
import { useParams } from "react-router-dom";
import { useGetUserDetails } from "../../api/users/useGetUserDetails.ts";
import { Label, Select, TextInput } from "flowbite-react";
import { ButtonUi } from "components/ui/button";
import { usePostRefBalanceUser } from "../../api/users/usePostRefBalanceUser.ts";
import { useState } from "react";
import { useGetSingleUser } from "../../api/users/useGetSingleUser.ts";

export function UserDetailsPage() {
  const [refBalance, setRefBalance] = useState("");
  const [typeChange, setTypeChange] = useState("rubBtc");
  const { id } = useParams();
  const { data, isLoading, error } = useGetUserDetails(id);
  const { data: dataUser, isLoading: isLoadingUser } = useGetSingleUser(id);
  const { refetch } = usePostRefBalanceUser({
    id: "",
    newBalance: Number(refBalance),
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
              {isLoadingUser ? (
                <div>Loading</div>
              ) : (
                dataUser && (
                  <div>
                    {Object.keys(columnsDataUsers).map(
                      (col, i) =>
                        col !== "link" &&
                        col !== "total_deals" &&
                        col !== "ref_balance" && (
                          <Label
                            key={col + i}
                            className="z-50 text-ellipsis overflow-hidden hover:overflow-visible relative bg-white py-1 px-3 rounded w-full text-base flex justify-between mb-2"
                          >
                            <span>{col}: </span>
                            <span>
                              {dataUser[columnsDataUsers[col]]?.toString()}
                            </span>
                          </Label>
                        ),
                    )}
                  </div>
                )
              )}
              <div className="grid grid-cols-8 gap-4 items-center mb-4">
                <div className="block col-span-3">
                  <Label htmlFor="ref_balance" value="Ref balance" />
                </div>
                <TextInput
                  defaultValue={dataUser ? Number(dataUser.refBalance) : 0}
                  className="col-span-5"
                  id="ref_balance"
                  type="text"
                  placeholder="ref"
                  required
                  onChange={(e) => setRefBalance(e.target.value)}
                />
              </div>
              <ButtonUi
                title="Изменить"
                className="ml-auto mr-auto"
                onClick={onChangeRef}
              />
            </div>
            <div className="col-span-6 border-l-2 pl-4">
              <div className="max-w flex items-center gap-2 justify-center">
                <div className="mb-2 block">
                  <Label htmlFor="countries" value="Выбрать тип обмена" />
                </div>
                <Select
                  defaultValue={typeChange}
                  onChange={(v) => setTypeChange(v.target.value)}
                  id="countries"
                  required
                >
                  {Object.keys(data).map((key, i) => (
                    <option key={i} value={key}>
                      {key}
                    </option>
                  ))}
                </Select>
              </div>
              <TableComponent
                isUser
                dealLink={id ?? "notId"}
                totalPages={data[typeChange].totalPages}
                columnsData={data[typeChange].items}
                columns={columnsDataUserDetails}
              />
            </div>
          </>
        )
      )}
    </div>
  );
}
