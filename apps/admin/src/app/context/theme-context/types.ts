import { DesignOptions } from "../../../features/builder/builder-sidebar/enums";

export type ActionsType =
  | {
      type: "THEME";
      payload: DefaultThemeType;
    }
  | {
      type: DesignOptions.COLORS;
      payload: DefaultThemeType["colorPallete"];
    }
  | {
      type: DesignOptions.TYPOGRAPHY;
      payload: DefaultThemeType["typography"];
    }
  | {
      type: DesignOptions.BUTTONS;
      payload: DefaultThemeType["buttons"];
    }
  | {
      type: DesignOptions.BACKGROUND;
      payload: DefaultThemeType["background"];
    };

export type ThemeContextType = {
  theme: DefaultThemeType;
  setCollorPallete: (colorPallete: DefaultThemeType["colorPallete"]) => void;
  setTypography: (typography: DefaultThemeType["typography"]) => void;
  setButtons: (buttons: DefaultThemeType["buttons"]) => void;
  setBackground: (background: DefaultThemeType["background"]) => void;
};

export type DefaultThemeType = {
  sections: Array<{
    description: string;
    id: string;
    title: string;
    style: Record<string, string>;
    props: Record<string, string>;
    components: Array<{
      title: string;
      type: string;
      style: Record<string, string>;
      props: Record<string, string>;
    }>;
  }>;
  colorPallete: {
    primary: string;
    text: string;
    cards: string;
    background: string;
    headers: string;
    surface: string;
    tertiary: string;
    secondary: string;
  };
  title: string;
  animation: {
    delay: string;
    duration: string;
    iteration: string;
    timing: string;
    type: string;
  };
  background: {
    color: string;
    image: string;
  };
  buttons: {
    borderRadius: string;
  };
  typography: {
    fontSize: string;
    headers: {
      fontSize: string;
      color: string;
      weight: string;
      fontFamily: string;
    };
    text: {
      fontSize: string;
      color: string;
      weight: string;
      fontFamily: string;
    };
  };
};
