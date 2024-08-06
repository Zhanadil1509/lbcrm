import { Outlet } from "react-router-dom";

/*type Props = {
  children?: React.ReactNode;
};*/

export function GuestLayoutUi() {
  return (
    <div className="antialiased bg-gray-50 dark:bg-gray-900">
      <Outlet />
    </div>
  );
}
