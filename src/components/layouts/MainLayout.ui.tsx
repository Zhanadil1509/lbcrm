import { HeaderUi } from "components/ui/header";
import { SidebarUi } from "components/ui/sidebar";
import { Outlet, Navigate, useParams, useNavigate } from "react-router-dom";
import { EnumTokens } from "../../services/auth.service.ts";
import { ButtonUi } from "components/ui/button";
//import classes from "./layout.module.scss";

export const MainLayoutUi = () => {
  const routeParam = useParams();
  const navigate = useNavigate();
  const getToken = localStorage.getItem(EnumTokens.ACCESS_TOKEN);
  const handleNavigate = () => navigate(-1);
  return getToken ? (
    <div className="antialiased bg-gray-50 dark:bg-gray-900">
      <HeaderUi />
      <SidebarUi />
      <main className="p-4 md:ml-64 h-auto pt-20">
        {Object.keys(routeParam).length > 0 && (
          <div className="w-full mb-5 pb-5 border-b border-gray-200">
            <ButtonUi
              onClick={handleNavigate}
              className="bg-gray-200 text-gray-800 enabled:hover:bg-gray-300"
              title="Назад"
            />
          </div>
        )}
        <Outlet />
      </main>
    </div>
  ) : (
    <Navigate to="/auth" />
  );
};
