import { InputColor, InputSize } from "./enums";

export const COLORS_CLASS_MAPPER: Record<InputColor, string> = {
  [InputColor.PRIMARY]: "bg-grey-50",
  [InputColor.TRANSPARENT]:
    "bg-transparent border-grey-200 hover:border-grey-300",
  [InputColor.ERROR]: "bg-red-50",
};

export const SIZES_CLASS_MAPPER: Record<InputSize, string> = {
  [InputSize.RESPONSIVE]: "h-[56px] sm:h-[48px]",
  [InputSize.NORMAL]: "h-[56px]",
  [InputSize.SMALL]: "h-[48px]",
  [InputSize.EXTRA_SMALL]: "h-[40px]",
};
