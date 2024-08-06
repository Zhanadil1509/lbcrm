/*
type Props = {

};
*/

import { TableComponent } from "components/table";
import { columnsDataApps } from "../../shared/constants/columns.ts";
import { useGetApplications } from "../../api/applications/useGetAppliactions.ts";
import { useLocation, useSearchParams } from "react-router-dom";
import { useGetFiltered } from "../../api/filter/useGetFiltered.ts";
import { useEffect } from "react";

export function AffiliatePage() {
  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();
  const dealLink = pathname.replace(/\//g, "");
  const { data, error, isLoading } = useGetApplications({
    dealLink,
    enabled: [...searchParams].length === 0,
  });
  const { refetch } = useGetFiltered({
    dealLink: `deals/${dealLink}/all`,
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
            columns={columnsDataApps}
          />
        )
      )}
    </div>
  );
}
