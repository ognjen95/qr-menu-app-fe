import { FC } from "react";

import {
  Section,
  DefaultThemeType,
} from "../../app/context/theme-context/types";

export type SectionConfig = {
  image: string;
  config: Section;
  component: FC<{
    sectionData: Section;
    colorPallete?: DefaultThemeType["colorPallete"];
    typography?: DefaultThemeType["typography"];
    buttons?: DefaultThemeType["buttons"];
    animationType?: DefaultThemeType["animation"]["type"];
  }>;
};
