import clsx from "clsx";

import { CHIP_VARIANT_CLASS_MAPPER } from "./constants";
import { ChipSize, ChipVariant } from "./enums";
import { IconSize, IconType } from "../icon/enums";
import Icon from "../icon/Icon";

type ChipProps = {
  text: string;
  size?: ChipSize;
  variant?: ChipVariant;
  onRemove?: () => void;
  onClick?: () => void;
};

const Chip = ({
  size = ChipSize.SMALL,
  variant = ChipVariant.DARK,
  text,
  onRemove,
  onClick,
}: ChipProps) => (
  <div
    onClick={onClick}
    className={clsx(
      "gap-3 py-2 inline-flex justify-center items-center rounded-full min-w-fit",
      CHIP_VARIANT_CLASS_MAPPER[variant],
      size,
      { "cursor-pointer hover:opacity-80": onClick }
    )}
  >
    <span>{text}</span>
    {onRemove && (
      <div
        className="flex justify-center items-center cursor-pointer"
        onClick={onRemove}
      >
        <Icon type={IconType.CLOSE} size={IconSize.MEDIUM} />
      </div>
    )}
  </div>
);

export default Chip;
