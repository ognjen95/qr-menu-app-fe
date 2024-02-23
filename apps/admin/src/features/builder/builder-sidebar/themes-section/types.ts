import { DefaultThemeType } from "../../../../app/context/theme-context/types";
import { ThemeIds } from "../../../themes/enums";

export type ThemeMapper = {
  id: ThemeIds;
  image: string;
  config: DefaultThemeType;
};
