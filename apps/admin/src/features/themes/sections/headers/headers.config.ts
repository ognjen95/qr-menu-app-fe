import { WELCOME_SECTION_CONFIG } from "../main/welcome-section/constants";
import WelcomeSection from "../main/welcome-section/WelcomeSection";
import { SectionConfigMapper } from "../types";

export const HEADER_SECTIONS: SectionConfigMapper[] = [
  {
    image: "/images/section-preview-1.png",
    config: WELCOME_SECTION_CONFIG,
    component: WelcomeSection,
  },
];
