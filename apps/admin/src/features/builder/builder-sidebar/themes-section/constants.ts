import { PIZZA_RESTAURANT_THEME_CONFIG } from "~features/themes/variants/pizza-restaurant/constants";

import { ThemeMapper } from "./types";
import { ThemeIds } from "../../../themes/enums";
import { DEFAULT_THEME_CONFIG } from "../../../themes/variants/default-theme/constants";

export const THEMES: ThemeMapper[] = [
  {
    id: ThemeIds.DEFAULT,
    image: "/images/theme1.png",
    config: DEFAULT_THEME_CONFIG,
  },
  {
    id: ThemeIds.PIZZA_RESTAURANT,
    image: "/images/pizza-theme.png",
    config: PIZZA_RESTAURANT_THEME_CONFIG,
  },
];
