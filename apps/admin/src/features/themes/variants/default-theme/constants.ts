import { GALLERY_SECTION } from "~features/themes/sections/main/gallery/constants";
import { WORKING_HOURS_SECTION } from "~features/themes/sections/main/working-hours-section/constants";

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
import { CUISINE_INFO_SECTION } from "../../sections/main/cuisine-info-section/constants";
import { INGREDIANTS_INFO_SECTION } from "../../sections/main/ingrediants-info-section/constants";
import { OFFERS_SECTION } from "../../sections/main/offers-section/constants";
import { WELCOME_SECTION_CONFIG } from "../../sections/main/welcome-section/constants";

export const DEFAULT_THEME_CONFIG: DefaultThemeType = {
  activePages: DEFAULT_ACTIVE_PAGES,
  id: "",
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
            src: "https://static.cdn-upm.com/static/themes/ef8ba596-4579-11ed-8bca-525400080621/assets-4/restaurantlogo.png?v=8",
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
    WELCOME_SECTION_CONFIG,
    CUISINE_INFO_SECTION,
    OFFERS_SECTION,
    INGREDIANTS_INFO_SECTION,
    GALLERY_SECTION,
    WORKING_HOURS_SECTION,
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
    cards: "#fff",
    headers: "#000",
    primary: "#D2A556",
    secondary: "#545454",
    surface: "#fff",
    tertiary: "#000",
    text: "#000",
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
    url: undefined,
  },
  navigation: {
    layout: NavigationLayout.CENTER,
    backgroundColor: "",
    navigationLinksColors: "",
    fontSize: "",
    fontWeight: "",
  },
};
