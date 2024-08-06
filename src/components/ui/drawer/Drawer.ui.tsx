import { Drawer } from "flowbite-react";
import type { ComponentProps, FC } from "react";

type Props = {
  children: React.ReactNode;
  isOpen: boolean;
  handleClose: () => void;
  title: string;
  titleIcon?: FC<ComponentProps<"svg">>;
};

export function DrawerUi({
  children,
  isOpen,
  titleIcon,
  handleClose,
  title,
}: Props) {
  return (
    <Drawer
      className="z-50 min-h-screen"
      open={isOpen}
      onClose={handleClose}
      position="top"
    >
      <Drawer.Header titleIcon={titleIcon} title={title} />
      <Drawer.Items>{children}</Drawer.Items>
    </Drawer>
  );
}
