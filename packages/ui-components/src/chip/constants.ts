import { ChipVariant } from "./enums";

export const CHIP_VARIANT_CLASS_MAPPER: Record<ChipVariant, string> = {
  [ChipVariant.LIGHT]: "text-primary-800 bg-primary-100",
  [ChipVariant.DARK]: "text-grey-900 bg-primary-500",
  [ChipVariant.GREY]: "text-grey-900 bg-grey-100",
  [ChipVariant.OUTLINED]: "text-grey-900 bg-transparent border border-grey-900",
};
