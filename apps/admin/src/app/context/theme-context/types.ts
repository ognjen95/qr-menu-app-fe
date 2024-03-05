import {
  AnimationType,
  ButtonSize,
  ButtonType,
  ComponentType,
  NavigationLayout,
  SectionActions,
  SectionPage,
  TypographySize,
} from "./enums";
import { DesignOptions } from "../../../features/builder/builder-sidebar/enums";
import { ThemeSectionComponentInput } from "../../../graphql-api";

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
  theme: DefaultThemeType | null;
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
  title?: string | null;
  className?: string | null;
  id?: string | null;
  onClick?: string | null;
  src?: string | null;
  alt?: string | null;
  type?: string | null;
  value?: string | null;
  placeholder?: string | null;
  name?: string | null;
  file?: File;
};

export type CSSStyle = {
  padding?: string | null;
  margin?: string | null;
  color?: string | null;
  backgroundColor?: string | null;
  background?: string | null;
  border?: string | null;
  borderRadius?: string | null;
  fontSize?: string | null;
  fontWeight?: string | null;
  textAlign?: string | null;
  display?: string | null;
  flexDirection?: string | null;
  justifyContent?: string | null;
  alignItems?: string | null;
  flexWrap?: string | null;
  flex?: string | null;
  width?: string | null;
  height?: string | null;
  position?: string | null;
  top?: string | null;
  right?: string | null;
  bottom?: string | null;
  left?: string | null;
  zIndex?: string | null;
  boxShadow?: string | null;
  overflow?: string | null;
  transform?: string | null;
};

export type SectionComponent = {
  title: string;
  type: ComponentType;
  style?: Partial<CSSStyle>;
  props?: ComponentProps;
};

export type Section = {
  description: string;
  id: string;
  title: string;
  style?: Partial<CSSStyle>;
  props?: ComponentProps;
  page?: string;
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

export type WebsitePage = SectionPage;

export type DefaultThemeType = {
  id: string;
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
  activePages: WebsitePage[];
};
