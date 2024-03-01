import { CUISINE_INFO_SECTION } from "./cuisine-info-section/constants";
import CuisineSectionSection from "./cuisine-info-section/CuisineInfoSection";
import { INGREDIANTS_INFO_SECTION } from "./ingrediants-info-section/constants";
import IngredientsSectionSection from "./ingrediants-info-section/IngrediantsInfoSection";
import { MENU_SECTION } from "./menu-section/constants";
import MenuSection from "./menu-section/MenuSection";
import { OFFERS_SECTION } from "./offers-section/constants";
import OffersSectionSection from "./offers-section/OffersSection";
import { SectionConfigMapper } from "../types";

export const MAIN_SECTIONS: SectionConfigMapper[] = [
  {
    image: "/images/section-preview-2.png",
    config: CUISINE_INFO_SECTION,
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
];
