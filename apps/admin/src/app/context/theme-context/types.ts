import { CSSProperties } from "react";

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

export type Section = {
  description: string;
  id: string;
  title: string;
  style: CSSProperties;
  props: Record<string, string>;
  components: Array<{
    title: string;
    type: string;
    style: CSSProperties;
    props: Record<string, string>;
  }>;
};

export type ColorPallete = {
  primary: string;
  text: string;
  cards: string;
  background: string;
  headers: string;
  surface: string;
  tertiary: string;
  secondary: string;
};

export type Typography = {
  fontSize: string;
  headers: {
    color: string;
    fontFamily: string;
    fontSize: string;
    weight: string;
  };
  text: {
    color: string;
    fontFamily: string;
    fontSize: string;
    weight: string;
  };
};

export type ButtonsStyle = {
  borderRadius: string;
};

export type DefaultThemeType = {
  sections: Section[];
  colorPallete: ColorPallete;
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
  buttons: ButtonsStyle;
  typography: Typography;
};
