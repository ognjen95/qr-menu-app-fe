import { MENU_SECTION } from "~features/themes/sections/main/menu-section/constants";
import {
  REVIEW_SECTION,
  TESTIMONIAL_SECTION,
} from "~features/themes/sections/testimonials/constants";

import { DEFAULT_ACTIVE_PAGES } from "../../../../app/context/theme-context/constants";
import {
  AnimationType,
  ButtonSize,
  ButtonType,
  ComponentType,
  NavigationLayout,
  SectionPage,
  TypographySize,
} from "../../../../app/context/theme-context/enums";
import { DefaultThemeType } from "../../../../app/context/theme-context/types";
import {
  FIXED_BG_IMAGE_SECTION_PIZZA_2_SECTION,
  FIXED_BG_IMAGE_SECTION_PIZZA_SECTION,
} from "../../sections/fixed-bg-image/fixed-bg-image-section/constants";
import { CUISINE_INFO_PIZZA_SECTION } from "../../sections/main/cuisine-info-section/constants";
import { WELCOME_PIZZA_SECTION } from "../../sections/main/welcome-section/constants";

export const PIZZA_RESTAURANT_THEME_CONFIG: DefaultThemeType = {
  activePages: DEFAULT_ACTIVE_PAGES,
  sections: [
    {
      components: [
        {
          props: {
            alt: "logo",
            className: "",
            id: "",
            name: "",
            onClick: "",
            placeholder: "",
            src: "https://static.cdn-upm.com/static/themes/6654c880-9584-11ed-9ecf-525400080521/assets-2/logo-no-background.svg?v=0",
            type: "",
            value: "",
          },
          style: {
            height: "100",
            justifyContent: "",
            width: "100",
            zIndex: "",
          },
          title: "Header image",
          type: ComponentType.IMAGE,
        },
        {
          props: {
            value: "Home",
          },
          title: "Header link 1",
          type: ComponentType.LINK,
        },
        {
          props: {
            value: "About us",
          },
          title: "Header link 2",
          type: ComponentType.LINK,
        },
        {
          props: {
            value: "Gallery",
          },
          title: "Header link 3",
          type: ComponentType.LINK,
        },
        {
          props: {
            value: "Contact",
          },
          title: "Header link 4",
          type: ComponentType.LINK,
        },
        {
          props: {
            value: "Order online",
          },
          style: {
            fontSize: "",
            color: "white",
          },
          title: "Button",
          type: ComponentType.BUTTON,
        },
      ],
      description: "Description",
      id: "1",
      title: "header",
    },
    FIXED_BG_IMAGE_SECTION_PIZZA_SECTION,
    WELCOME_PIZZA_SECTION,
    CUISINE_INFO_PIZZA_SECTION,
    TESTIMONIAL_SECTION,
    REVIEW_SECTION,
    MENU_SECTION,
    FIXED_BG_IMAGE_SECTION_PIZZA_2_SECTION,
  ],
  animation: {
    delay: "1",
    duration: "1",
    iteration: "1",
    timing: "1",
    type: AnimationType.NONE,
  },
  background: {
    color: "#fff",
    image: "",
  },
  buttons: {
    borderRadius: "8px",
    buttonHover: false,
    buttonType: ButtonType.FILLED,
    buttonSize: ButtonSize.MEDIUM,
  },
  colorPallete: {
    background: "#f4f4f4",
    cards: "white",
    headers: "black",
    primary: "#f2d25f",
    secondary: "#545454",
    surface: "white",
    tertiary: "black",
    text: "black",
  },
  title: "Theme 1",
  typography: {
    fontSize: TypographySize.MEDIUM,
    headers: {
      color: "",
      fontFamily: "Merriweather",
      fontSize: "",
      weight: "600",
    },
    text: {
      color: "",
      fontFamily: "Arial",
      fontSize: "",
      weight: "500",
    },
  },
  logo: {
    url: "https://cdn.midjourney.com/4b89fb6c-9560-4412-9fdb-f341962a7e50/0_2.webp",
  },
  navigation: {
    layout: NavigationLayout.CENTER,
    backgroundColor: "",
    navigationLinksColors: "",
    fontSize: "",
    fontWeight: "",
  },
  id: "",
};
