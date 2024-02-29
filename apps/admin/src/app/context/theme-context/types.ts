import { CSSProperties } from "react";

import {
  AnimationType,
  ButtonSize,
  ButtonType,
  NavigationLayout,
  SectionActions,
  TypographySize,
} from "./enums";
import { DesignOptions } from "../../../features/builder/builder-sidebar/enums";
import { ComponentType } from "../../../features/themes/sections/enums";

export type PartialCollorPallete = Partial<DefaultThemeType["colorPallete"]>;
export type PartialTypography = Partial<DefaultThemeType["typography"]>;
export type PartialButtons = Partial<DefaultThemeType["buttons"]>;
export type PartialBackground = Partial<DefaultThemeType["background"]>;
export type PartialNavigation = Partial<DefaultThemeType["navigation"]>;
export type PartialAnimation = Partial<DefaultThemeType["animation"]>;

export type ActionsType =
  | {
      type: "THEME";
      payload: DefaultThemeType;
    }
  | {
      type: DesignOptions.COLORS;
      payload: PartialCollorPallete;
    }
  | {
      type: DesignOptions.TYPOGRAPHY;
      payload: PartialTypography;
    }
  | {
      type: DesignOptions.BUTTONS;
      payload: PartialButtons;
    }
  | {
      type: DesignOptions.BACKGROUND;
      payload: PartialBackground;
    }
  | {
      type: DesignOptions.NAVIGATION;
      payload: PartialNavigation;
    }
  | {
      type: DesignOptions.ANIMATIONS;
      payload: PartialAnimation;
    }
  | {
      type: SectionActions.ADD;
      payload: {
        index: number;
        section: Section;
      };
    }
  | {
      type: SectionActions.EDIT;
      payload: {
        index: number;
        section: Section;
      };
    }
  | {
      type: SectionActions.DELETE;
      payload: {
        index: number;
      };
    };

export type ThemeContextType = {
  theme: DefaultThemeType;
  loading: boolean;
  setTheme: (theme: DefaultThemeType) => void;
  setCollorPallete: (colorPallete: PartialCollorPallete) => void;
  setTypography: (typography: PartialTypography) => void;
  setButtons: (buttons: PartialButtons) => void;
  setBackground: (background: PartialBackground) => void;
  setNavigation: (navigation: PartialNavigation) => void;
  setAnimation: (animation: PartialAnimation) => void;
  addSection: (section: Section, index: number) => void;
  editSection: (section: Section, index: number) => void;
  deleteSection: (index: number) => void;
};

export type ComponentProps = {
  className?: string;
  id?: string;
  onClick?: string;
  src?: string;
  alt?: string;
  type?: string;
  value?: string;
  placeholder?: string;
  name?: string;
  file?: File;
};

export type SectionComponent = {
  title: string;
  type: ComponentType;
  style?: CSSProperties;
  props?: ComponentProps;
};

export type Section = {
  description: string;
  id: string;
  title: string;
  style?: CSSProperties;
  props?: Record<string, string>;
  components: Array<SectionComponent>;
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
  fontSize: TypographySize;
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
  buttonHover: boolean;
  buttonType: ButtonType;
  buttonSize: ButtonSize;
};

export type NavigationModel = {
  layout: NavigationLayout;
  backgroundColor: string;
  navigationLinksColors: string;
  fontSize: string;
  fontWeight: string;
};

export type DefaultThemeType = {
  sections: Section[];
  colorPallete: ColorPallete;
  logo: {
    url?: string;
    file?: File;
  };
  title?: string;
  animation: {
    delay: string;
    duration: string;
    iteration: string;
    timing: string;
    type: AnimationType;
  };
  background: {
    color: string;
    image: string;
  };
  buttons: ButtonsStyle;
  typography: Typography;
  navigation: NavigationModel;
};
