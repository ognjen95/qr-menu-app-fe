import { REVIEW_SECTION, TESTIMONIAL_SECTION } from "./constants";
import ReviewSection from "./ReviewSection";
import TestimonialSection from "./TestimonialSection";

export const TESTIMONIAL_SECTIONS = [
  {
    image: "/images/section-preview-2.png",
    config: TESTIMONIAL_SECTION,
    component: TestimonialSection,
  },
  {
    image: "/images/section-preview-2.png",
    config: REVIEW_SECTION,
    component: ReviewSection,
  },
];
