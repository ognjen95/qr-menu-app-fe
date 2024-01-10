import { TextVariant } from "../text/enums";

export const getTextVariant = (
  numOfTotalBreadCrumbs: number,
  isLastBreadCrumb: boolean
) => {
  if (numOfTotalBreadCrumbs === 1) {
    return TextVariant.HEADING5;
  }

  if (isLastBreadCrumb) {
    return TextVariant.BUTTON2;
  }

  return TextVariant.BODY3;
};
