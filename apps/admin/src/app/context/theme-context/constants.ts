import {
  AnimationType,
  ButtonSize,
  ButtonType,
  ComponentType,
  NavigationLayout,
  SectionPage,
  TypographySize,
} from "./enums";
import { DefaultThemeType } from "./types";

export const DEFAULT_ACTIVE_PAGES = [
  SectionPage.HOME,
  SectionPage.ABOUT,
  SectionPage.CONTACT,
  SectionPage.MENU,
  SectionPage.GALLERY,
];

export const DEFAULT_THEME: DefaultThemeType = {
  logo: {
    url: "",
  },
  id: "",
  activePages: DEFAULT_ACTIVE_PAGES,
  navigation: {
    layout: NavigationLayout.CENTER,
    backgroundColor: "",
    navigationLinksColors: "",
    fontSize: "",
    fontWeight: "",
  },
  colorPallete: {
    primary: "orange",
    tertiary: "yellow",
    secondary: "darkGreen",
    text: "black",
    cards: "white",
    background: "#f4f4f4",
    headers: "orange",
    surface: "white",
  },
  title: "Theme 1",
  animation: {
    delay: "2s",
    duration: "2s",
    iteration: "2s",
    timing: "2s",
    type: AnimationType.FADE_DOWN,
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
  typography: {
    fontSize: TypographySize.MEDIUM,
    headers: {
      fontSize: "48px",
      color: "black",
      weight: "600",
      fontFamily: "Arial",
    },
    text: {
      fontSize: "16px",
      color: "black",
      weight: "400",
      fontFamily: "Arial",
    },
  },
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
          style: {
            fontSize: "",
          },
          title: "Header link 1",
          type: ComponentType.LINK,
        },
        {
          props: {
            value: "About us",
          },
          style: {
            fontSize: "",
          },
          title: "Header link 2",
          type: ComponentType.LINK,
        },
        {
          props: {
            value: "Gallery",
          },
          style: {
            fontSize: "",
          },
          title: "Header link 3",
          type: ComponentType.LINK,
        },
        {
          props: {
            value: "Contact",
          },
          style: {
            fontSize: "",
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
          },
          title: "Button",
          type: ComponentType.BUTTON,
        },
      ],
      description: "Description",
      id: "1",
      title: "header",
    },
    {
      components: [
        {
          props: {
            value: "Welcome to our Restaurant",
          },
          style: {
            fontSize: "60px",
          },
          title: "Welcome title",
          type: ComponentType.H1,
        },
        {
          props: {
            value: "New restaurant in New York,",
          },
          style: {
            fontSize: "18px",
          },
          title: "Welcome description 1",
          type: ComponentType.H4,
        },
        {
          props: {
            value: "USA.",
          },
          style: {
            fontSize: "18px",
          },
          title: "Welcome description 2",
          type: ComponentType.H4,
        },
        {
          props: {
            alt: "image 1",
            className: "",
            id: "",
            name: "",
            onClick: "",
            placeholder: "",
            src: "https://static.cdn-upm.com/static/themes/ef8ba596-4579-11ed-8bca-525400080621/assets-4/generic8.jpg?v=8",
            type: "",
            value: "",
          },
          style: {
            height: "400",
            justifyContent: "",
            width: "400",
            zIndex: "",
          },
          title: "Header image",
          type: ComponentType.IMAGE,
        },
      ],
      description: "First content section",
      id: "2",
      title: "welcome",
    },
    {
      components: [
        {
          props: {
            alt: "image 1",
            className: "",
            id: "",
            name: "",
            onClick: "",
            placeholder: "",
            src: "https://static.cdn-upm.com/static/themes/ef8ba596-4579-11ed-8bca-525400080621/assets-4/generic2.jpg?v=8",
            type: "",
            value: "",
          },
          style: {
            height: "400",
            justifyContent: "",
            width: "400",
            zIndex: "",
          },
          title: "second content image",
          type: ComponentType.IMAGE,
        },
        {
          props: {
            value: "Taste the world's cuisine",
          },
          style: {
            fontSize: "30px",
          },
          title: "Welcome title",
          type: ComponentType.H4,
        },
        {
          props: {
            value: "It will delight you!",
          },
          style: {
            fontSize: "48px",
          },
          title: "",
          type: ComponentType.H4,
        },
        {
          props: {
            value:
              "We are not afraid to experiment. Our Chef combines carefully selected ingredients and serves them on your plate in an out-of-the-ordinary form.",
          },
          style: {
            fontSize: "16px",
          },
          title: "",
          type: ComponentType.H4,
        },
      ],
      description: "Second content section",
      id: "3",

      title: "cuisine-info",
    },
    {
      components: [
        {
          title: "",
          type: ComponentType.ICON,
        },
        {
          props: {
            value: "Excellent coffee",
          },
          style: {
            fontSize: "30px",
          },
          title: "",
          type: ComponentType.H3,
        },
        {
          props: {
            value: "We offer only the finest coffee from the finest beans.",
          },
          style: {
            fontSize: "16px",
          },
          title: "",
          type: ComponentType.P,
        },
        {
          title: "",
          type: ComponentType.ICON,
        },
        {
          props: {
            value: "Rest comfortably",
          },
          style: {
            fontSize: "30px",
          },
          title: "",
          type: ComponentType.H3,
        },
        {
          props: {
            value: "We offer guest rooms for travelers",
          },
          style: {
            fontSize: "16px",
          },
          title: "",
          type: ComponentType.P,
        },
        {
          title: "",
          type: ComponentType.ICON,
        },
        {
          props: {
            value: "Delicious food",
          },
          style: {
            fontSize: "30px",
          },
          title: "",
          type: ComponentType.H3,
        },
        {
          props: {
            value: "Original cuisine at will",
          },
          style: {
            fontSize: "16px",
          },
          title: "",
          type: ComponentType.P,
        },
      ],
      description: "Second content section",
      id: "4",

      title: "offers",
    },
    {
      components: [
        {
          props: {
            value: "Original cuisine",
          },
          style: {
            fontSize: "28px",
          },
          title: "",
          type: ComponentType.H4,
        },
        {
          props: {
            value: "Only the best seasonal ingredients",
          },
          style: {
            fontSize: "50px",
          },
          title: "",
          type: ComponentType.H2,
        },
        {
          props: {
            value:
              "You are only one step away from a real feast for the eyes and palate. We offer delicious dishes based on the best recipes from around the world. These are unique flavor compositions that will satisfy everyone.",
          },
          style: {
            fontSize: "16px",
          },
          title: "",
          type: ComponentType.P,
        },
        {
          props: {
            alt: "image 1",
            className: "",
            id: "",
            name: "",
            onClick: "",
            placeholder: "",
            src: "https://static.cdn-upm.com/static/themes/ef8ba596-4579-11ed-8bca-525400080621/assets-4/cook.jpg?v=8",
            type: "",
            value: "",
          },
          style: {
            height: "400",
            width: "400",
          },
          title: "second content image",
          type: ComponentType.IMAGE,
        },
      ],
      description: "Second content section",
      id: "5",

      title: "ingredients-info",
    },
    {
      components: [
        {
          props: {
            value: "Visit us!",
          },
          style: {
            fontSize: "72px",
          },
          title: "",
          type: ComponentType.H1,
        },
        {
          props: {
            value:
              "We are waiting you from Monday to Sunday! You can also place your order online",
          },
          style: {
            fontSize: "18px",
          },
          title: "",
          type: ComponentType.P,
        },
      ],
      description: "Second content section",
      id: "6",

      title: "working-hours",
    },
  ],
} as const;
