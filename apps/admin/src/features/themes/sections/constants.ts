import { FC } from "react";

import { FIXED_BG_IMAGE_SECTIONS } from "./fixed-bg-image/constants";
import { MAIN_SECTIONS } from "./main/main.config";
import { TESTIMONIAL_SECTIONS } from "./testimonials/testimonials.config";
import {
  DefaultThemeType,
  Section,
} from "../../../app/context/theme-context/types";

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

export const ALL_SECTIONS: SectionConfig[] = [
  ...FIXED_BG_IMAGE_SECTIONS,
  ...MAIN_SECTIONS,
  ...TESTIMONIAL_SECTIONS,
];
