import { ButtonColor, ButtonSize, ButtonType } from "./enums";

export const SIZE_CLASS_MAPPER: Record<
  ButtonType,
  Record<ButtonSize, string>
> = {
  [ButtonType.BUTTON]: {
    [ButtonSize.SMALL]: "h-10 px-3",
    [ButtonSize.MEDIUM]: "h-14 px-4",
  },
  [ButtonType.LINK]: {
    [ButtonSize.SMALL]: "h-3",
    [ButtonSize.MEDIUM]: "h-4",
  },
};

export const COLOR_CLASS_MAPPER: Record<
  ButtonType,
  Record<ButtonColor, string>
> = {
  [ButtonType.BUTTON]: {
    [ButtonColor.PRIMARY]:
      "bg-primary-500 hover:bg-primary-600 active:bg-primary-800 disabled:bg-primary-50 text-gray-900 active:text-white disabled:text-primary-600",
    [ButtonColor.SECONDARY]:
      "bg-secondary-700 hover:bg-secondary-800 active:bg-secondary-900 disabled:bg-secondary-50 text-white disabled:text-secondary-700",
    [ButtonColor.GREY]:
      "bg-grey-100 hover:bg-grey-200 active:bg-grey-300 disabled:bg-grey-50 text-grey-900 disabled:text-grey-600",
    [ButtonColor.RED]:
      "bg-red-500 hover:bg-red-600 active:bg-red-700 disabled:bg-red-50 text-white disabled:text-red-500",
    [ButtonColor.TRANSPARENT]:
      "bg-transparent disabled:grey-600 disabled:bg-grey-50 text-grey-900 disabled:text-grey-600 hover:bg-[#0000000d] active:bg-[#0000001a]",
    [ButtonColor.TRANSPARENT_LIGHT]: "bg-white/10 text-white disabled:grey-600",
  },
  [ButtonType.LINK]: {
    [ButtonColor.PRIMARY]:
      "bg-transparent text-primary-700 hover:text-primary-800 hover:underline hover:decoration-solid hover:decoration-primary-800 active:decoration-solid active:text-primary-900 disabled:text-grey-300",
    [ButtonColor.SECONDARY]:
      "bg-transparent text-secondary-700 hover:text-secondary-800 hover:underline hover:decoration-solid active:text-secondary-800 active:underline active:decoration-solid disabled:text-grey-300",
    [ButtonColor.GREY]:
      "bg-transparent text-gray-600 hover:text-grey-700 hover:underline hover:decoration-solid active:underline active:text-gray-800 active:decoration-solid disabled:text-grey-300",
    [ButtonColor.RED]:
      "bg-transparent text-red-500 hover:text-red-600 hover:underline hover:decoration-solid active:underline active:text-red-700 active:decoration-solid disabled:text-grey-300",
    [ButtonColor.TRANSPARENT]: "bg-transparent",
    [ButtonColor.TRANSPARENT_LIGHT]: "bg-transparent text-white",
  },
};

export const LOADING_COLOR_CLASS_MAPPER: Record<ButtonColor, string> = {
  [ButtonColor.PRIMARY]: "bg-primary-800 text-white",
  [ButtonColor.SECONDARY]: "bg-secondary-900 text-white",
  [ButtonColor.GREY]: "bg-grey-300 text-grey-900",
  [ButtonColor.RED]: "bg-red-700 text-white",
  [ButtonColor.TRANSPARENT]: "text-grey-900 bg-[#0000001a]",
  [ButtonColor.TRANSPARENT_LIGHT]: "bg-white/10 text-white",
};
