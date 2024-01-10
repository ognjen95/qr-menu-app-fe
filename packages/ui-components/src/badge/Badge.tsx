import clsx from "clsx";
import { FC, useMemo } from "react";

import { BadgeSize } from "./enums";
import { colors } from "../config/tailwind-config";
import { IconSize, IconType } from "../icon/enums";
import Icon from "../icon/Icon";

type BadgeProps = {
  number: number;
  size?: BadgeSize;
  colorClasses?: string;
  markCompleted?: boolean;
};

const Badge: FC<BadgeProps> = ({
  number,
  size = BadgeSize.MEDIUM,
  colorClasses = "bg-primary-500 text-grey-900",
  markCompleted = false,
}) => {
  const renderValue = useMemo(() => {
    if (markCompleted)
      return (
        <Icon
          fill="transparent"
          size={IconSize.MEDIUM}
          type={IconType.CHECK}
          stroke={colors.primary[500]}
        />
      );

    return number < 99 ? number : "99+";
  }, [markCompleted, number]);

  return (
    <div
      className={clsx(
        "flex items-center justify-center rounded-full leading-4",
        {
          "min-w-[1.5rem] max-w-fit h-6 text-xs font-semibold":
            size === BadgeSize.SMALL,
          "min-w-[2rem] max-w-fit h-8 text-base font-medium":
            size === BadgeSize.MEDIUM,
          "px-3 py-2": number > 10,
        },
        colorClasses
      )}
    >
      {renderValue}
    </div>
  );
};

export default Badge;
