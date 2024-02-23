import { ComponentTypeUnion } from "./types";
import { TypographySize } from "../../../../app/context/theme-context/enums";

export const HeaderSmallFontSizes: Record<ComponentTypeUnion, string> = {
  H1: "40px",
  H2: "30px",
  H3: "24px",
  H4: "20px",
  H5: "18px",
  H6: "16px",
  P: "16px",
};

const HeaderNormalFontSizes: Record<ComponentTypeUnion, string> = {
  H1: "60px",
  H2: "36px",
  H3: "30px",
  H4: "24px",
  H5: "20px",
  H6: "18px",
  P: "18px",
};

const headerLargeFontSizes: Record<ComponentTypeUnion, string> = {
  H1: "70px",
  H2: "48px",
  H3: "36px",
  H4: "30px",
  H5: "24px",
  H6: "20px",
  P: "20px",
};

export const TYPOGRAPHY_MAPPER = {
  [TypographySize.SMALL]: HeaderSmallFontSizes,
  [TypographySize.MEDIUM]: HeaderNormalFontSizes,
  [TypographySize.LARGE]: headerLargeFontSizes,
};
