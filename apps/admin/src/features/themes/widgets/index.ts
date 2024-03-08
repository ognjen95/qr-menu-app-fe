import { MENU_WIDGET_CONFIG } from "./menu-widget/constant";
import MenuWidget from "./menu-widget/MenuWidget";
import { SectionConfig } from "../types";

export const ALL_WIDGETS: SectionConfig[] = [
  {
    image: "/images/section-preview-1.png",
    component: MenuWidget,
    config: MENU_WIDGET_CONFIG,
  },
];
