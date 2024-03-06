import { WORKING_HOURS_SECTION } from "./fixed-bg-image-section/constants";
import FixedBgImageSection from "./fixed-bg-image-section/FixedBgImageSection";
import { SectionConfigMapper } from "../types";

export const WORKING_HOURS_SECTIONS: SectionConfigMapper[] = [
  {
    image: "/images/section-preview-1.png",
    config: WORKING_HOURS_SECTION,
    component: FixedBgImageSection,
  },
];
