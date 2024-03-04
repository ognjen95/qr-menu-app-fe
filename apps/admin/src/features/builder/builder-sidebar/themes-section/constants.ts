import { PIZZA_RESTAURANT_THEME_CONFIG } from "~features/themes/variants/pizza-restaurant/constants";

import { ThemeMapper } from "./types";
import { DEFAULT_THEME } from "../../../../app/context/theme-context/constants";
import { DEFAULT_THEME_CONFIG } from "../../../themes/variants/default-theme/constants";
import { ThemeIds } from "../../../themes/enums";

export const THEMES: ThemeMapper[] = [
  {
    id: ThemeIds.DEFAULT,
    image: "/images/theme1.png",
    config: DEFAULT_THEME_CONFIG,
  },
  {
    id: ThemeIds.THEME1,
    image: "/images/theme1.png",
    config: DEFAULT_THEME,
  },
  {
    id: ThemeIds.PIZZA_RESTAURANT,
    image: "/images/pizza-theme.png",
    config: PIZZA_RESTAURANT_THEME_CONFIG,
  },
];
