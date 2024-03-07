import {
  CUISINE_INFO_PIZZA_SECTION,
  CUISINE_INFO_SECTION,
} from "./cuisine-info-section/constants";
import CuisineSectionSection from "./cuisine-info-section/CuisineInfoSection";
import { GALLERY_SECTION } from "./gallery/constants";
import GallerySection from "./gallery/GallerySection";
import { INGREDIANTS_INFO_SECTION } from "./ingrediants-info-section/constants";
import IngredientsSectionSection from "./ingrediants-info-section/IngrediantsInfoSection";
import { MENU_SECTION } from "./menu-section/constants";
import MenuSection from "./menu-section/MenuSection";
import { OFFERS_SECTION } from "./offers-section/constants";
import OffersSectionSection from "./offers-section/OffersSection";
import {
  WELCOME_PIZZA_SECTION,
  WELCOME_SECTION_CONFIG,
} from "./welcome-section/constants";
import WelcomeSection from "./welcome-section/WelcomeSection";
import { WORKING_HOURS_SECTION } from "./working-hours-section/constants";
import WorkingHoursSection from "./working-hours-section/WorkingHoursSection";

export const MAIN_SECTIONS = [
  {
    image: "/images/section-preview-2.png",
    config: CUISINE_INFO_SECTION,
    component: CuisineSectionSection,
  },
  {
    image: "/images/section-preview-2.png",
    config: CUISINE_INFO_PIZZA_SECTION,
    component: CuisineSectionSection,
  },
  {
    image: "/images/section-preview-3.png",
    config: OFFERS_SECTION,
    component: OffersSectionSection,
  },
  {
    image: "/images/section-preview-4.png",
    config: INGREDIANTS_INFO_SECTION,
    component: IngredientsSectionSection,
  },
  {
    image: "/images/section-preview-1.png",
    config: MENU_SECTION,
    component: MenuSection,
  },
  {
    image: "/images/section-preview-1.png",
    config: GALLERY_SECTION,
    component: GallerySection,
  },
  {
    image: "/images/section-preview-1.png",
    config: WORKING_HOURS_SECTION,
    component: WorkingHoursSection,
  },
  {
    image: "/images/section-preview-1.png",
    config: WELCOME_PIZZA_SECTION,
    component: WelcomeSection,
  },
  {
    image: "/images/section-preview-1.png",
    config: WELCOME_SECTION_CONFIG,
    component: WelcomeSection,
  },
];
