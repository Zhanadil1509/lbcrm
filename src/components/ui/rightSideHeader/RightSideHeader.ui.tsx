/*type Props = {

};*/

import { AvatarUi } from "components/ui/avatar";
import { DropdownUi } from "components/ui/dropdown";
import { NotificationsUi } from "components/ui/notifications";

export function RightSideHeaderUi() {
  return (
    <div className="flex items-center lg:order-2">
      <NotificationsUi />
      <AvatarUi />
      <DropdownUi />
    </div>
  );
}
