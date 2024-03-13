import clsx from "clsx";
import { FC } from "react";

import { colors } from "../config/tailwind-config";
import Icon, { IconProps } from "../icon/Icon";

export type IconButtonProps = {
  iconProps: IconProps;
  disabled?: boolean;
  isActive?: boolean;
  className?: string;
};

const IconButton: FC<IconButtonProps> = ({
  iconProps,
  disabled = false,
  isActive = false,
  className,
}) => (
  <div
    onClick={(e) => {
      e.stopPropagation();
      if (disabled) return;
      iconProps?.onClick?.(e);
    }}
    className={clsx("p-2 rounded-lg", className, {
      "bg-primary-50": isActive,
      "hover:bg-grey-100 cursor-pointer": !disabled,
      "cursor-not-allowed": disabled,
    })}
  >
    <Icon
      {...iconProps}
      onClick={undefined}
      fill={isActive ? colors.primary[600] : iconProps.fill}
      stroke={isActive ? colors.primary[600] : iconProps.stroke}
    />
  </div>
);

export default IconButton;
