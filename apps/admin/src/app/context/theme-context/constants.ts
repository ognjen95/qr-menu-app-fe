import { DefaultThemeType } from "./types";

export const DEFAULT_THEME: DefaultThemeType = {
  sections: [
    {
      description: "Description",
      id: "1",
      title: "Header1",
      style: {},
      props: {},
      components: [
        {
          title: "Header1",
          type: "H1",
          style: {
            color: "orange",
          },
          props: {
            value: "Header Num 1",
          },
        },
        {
          title: "Header2",
          type: "P",
          style: {
            color: "black",
          },
          props: {
            value: "This is some borng description text. Bla bla bla ....",
          },
        },
      ],
    },
  ],
  colorPallete: {
    primary: "orange",
    text: "white",
    cards: "white",
    background: "#f4f4f4",
    headers: "orange",
    surface: "white",
    tertiary: "yellow",
    secondary: "darkGreen",
  },
  title: "Theme 1",
  animation: {
    delay: "2s",
    duration: "2s",
    iteration: "2s",
    timing: "2s",
    type: "slide-in",
  },
  background: {
    color: "#fff",
    image: "",
  },
  buttons: {
    borderRadius: "8px",
  },
  typography: {
    fontSize: "MEDIUM",
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
} as const;
