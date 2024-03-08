import { FC } from "react";

import { FIXED_BG_IMAGE_SECTIONS } from "./fixed-bg-image/constants";
import { MAIN_SECTIONS } from "./main/main.config";
import { TESTIMONIAL_SECTIONS } from "./testimonials/testimonials.config";
import { SectionConfig } from "../types";
import { ALL_WIDGETS } from "../widgets";

export const ALL_SECTIONS: SectionConfig[] = [
  ...FIXED_BG_IMAGE_SECTIONS,
  ...MAIN_SECTIONS,
  ...TESTIMONIAL_SECTIONS,
  ...ALL_WIDGETS,
];
