import { TableComponent } from "components/table";
import { columnsDataApps } from "../../shared/constants/columns.ts";
import { useLocation, useSearchParams } from "react-router-dom";
import { ButtonUi } from "components/ui/button";
import { useEffect, useState } from "react";
import { DrawerUi } from "components/ui/drawer";
import { IoSettingsOutline } from "react-icons/io5";
import { ApplicationSettings } from "components/applicationSettings";
import { useGetApplications } from "../../api/applications/useGetAppliactions.ts";
import { useGetFiltered } from "../../api/filter/useGetFiltered.ts";

export function ApplicationPage() {
  const { state, pathname } = useLocation();
  const [searchParams] = useSearchParams();
  const dealLink = pathname.replace(/\//g, "");
  const [isOpen, setIsOpen] = useState(false);

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

  if (error) return "Error request " + error;

  const handleClose = () => setIsOpen(!isOpen);

  return (
    <div>
      <ButtonUi
        strokeColor="white"
        className="ml-auto mb-3"
        title={state}
        WithIcon={IoSettingsOutline}
        onClick={handleClose}
      />
      <DrawerUi
        titleIcon={IoSettingsOutline}
        title={state}
        isOpen={isOpen}
        handleClose={handleClose}
      >
        {isOpen && <ApplicationSettings pathname={pathname} />}
      </DrawerUi>
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
