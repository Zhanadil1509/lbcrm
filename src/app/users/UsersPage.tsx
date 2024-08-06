/*
type Props = {

};
*/

import { TableComponent } from "components/table";
import { columnsDataUsers } from "shared/constants/columns.ts";
import { useGetAllUsers } from "../../api/users/useGetAllUsers.ts";
import { useLocation, useSearchParams } from "react-router-dom";
import { useGetFiltered } from "../../api/filter/useGetFiltered.ts";
import { useEffect } from "react";

export function UsersPage() {
  const [searchParams] = useSearchParams();
  const { data, error, isLoading } = useGetAllUsers({
    enabled: [...searchParams].length === 0,
  });
  const { pathname } = useLocation();
  const dealLink = pathname.replace(/\//g, "");

  const { refetch } = useGetFiltered({
    dealLink: dealLink,
    queries: searchParams.toString(),
    enabled: false,
  });

  const hasQuery = [...searchParams].length;

  useEffect(() => {
    hasQuery > 0 && refetch();
  }, [hasQuery]);

  if (isLoading) return <div>Loading...</div>;

  if (error) return "Error request " + error;
  return (
    <div>
      {isLoading ? (
        <div> Loading...</div>
      ) : (
        data && (
          <TableComponent
            dealLink={dealLink}
            totalPages={data.totalPages}
            columnsData={data.items}
            columns={columnsDataUsers}
          />
        )
      )}
    </div>
  );
}
