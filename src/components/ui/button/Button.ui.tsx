import { Button } from "flowbite-react";
import type { ComponentProps, FC } from "react";
import clsx from "clsx";

type Props = {
  onClick: () => void;
  title: string;
  className?: string;
  disabled?: boolean;
  strokeColor?: string;
  WithIcon?: FC<ComponentProps<"svg">>;
};

export function ButtonUi({
  disabled = false,
  onClick,
  strokeColor,
  WithIcon,
  title,
  className,
}: Props) {
  return (
    <Button
      disabled={disabled}
      className={clsx(className, "items-center")}
      onClick={() => onClick()}
    >
      {WithIcon && (
        <WithIcon
          style={{
            stroke: strokeColor,
            objectFit: "fill",
            width: "20px",
            height: "auto",
            marginRight: "7px",
            marginLeft: "-5px",
          }}
        />
      )}
      {title}
    </Button>
  );
}
