import { WORKING_HOURS_SECTION } from "./working-hours-section/constants";
import WorkingHoursSection from "./working-hours-section/WorkingHoursSection";
import { SectionConfigMapper } from "../types";

export const WORKING_HOURS_SECTIONS: SectionConfigMapper[] = [
  {
    image: "/images/section-preview-1.png",
    config: WORKING_HOURS_SECTION,
    component: WorkingHoursSection,
  },
];
