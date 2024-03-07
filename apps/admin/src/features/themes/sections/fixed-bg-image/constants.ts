import {
  FIXED_BG_IMAGE_SECTION,
  FIXED_BG_IMAGE_SECTION_PIZZA_2_SECTION,
  FIXED_BG_IMAGE_SECTION_PIZZA_SECTION,
} from "./fixed-bg-image-section/constants";
import FixedBgImageSection from "./fixed-bg-image-section/FixedBgImageSection";

export const FIXED_BG_IMAGE_SECTIONS = [
  {
    image: "/images/section-preview-1.png",
    config: FIXED_BG_IMAGE_SECTION,
    component: FixedBgImageSection,
  },
  {
    image: "/images/section-preview-1.png",
    config: FIXED_BG_IMAGE_SECTION_PIZZA_2_SECTION,
    component: FixedBgImageSection,
  },
  {
    image: "/images/section-preview-1.png",
    config: FIXED_BG_IMAGE_SECTION_PIZZA_SECTION,
    component: FixedBgImageSection,
  },
];
