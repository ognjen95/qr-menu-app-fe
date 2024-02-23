import React, { createContext, useContext, useMemo, useReducer } from "react";
import { FCWithChildren } from "ui-components";

import { SectionActions } from "./enums";
import reducer from "./reducer";
import { DefaultThemeType, Section, ThemeContextType } from "./types";
import { DesignOptions } from "../../../features/builder/builder-sidebar/enums";
import { DEFAULT_THEME_CONFIG } from "../../../features/themes/default/constants";

const ThemeContext = createContext<ThemeContextType>({
  theme: DEFAULT_THEME_CONFIG,
  loading: false,
  setTheme: () => {},
  setCollorPallete: () => {},
  setTypography: () => {},
  setBackground: () => {},
  setButtons: () => {},
  setNavigation: () => {},
  setAnimation: () => {},
  addSection: () => {},
  editSection: () => {},
  deleteSection: () => {},
});

const ThemeContextProvider: FCWithChildren = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, DEFAULT_THEME_CONFIG);

  const contextValue = useMemo(
    () => ({
      loading: false,
      theme: state,
      setTheme: (theme: DefaultThemeType) => {
        dispatch({ type: "THEME", payload: theme });
      },
      setCollorPallete: (
        colorPallete: Partial<DefaultThemeType["colorPallete"]>
      ) => {
        dispatch({ type: DesignOptions.COLORS, payload: colorPallete });
      },
      setTypography: (typography: Partial<DefaultThemeType["typography"]>) => {
        dispatch({ type: DesignOptions.TYPOGRAPHY, payload: typography });
      },
      setBackground: (background: Partial<DefaultThemeType["background"]>) => {
        dispatch({ type: DesignOptions.BACKGROUND, payload: background });
      },
      setButtons: (buttons: Partial<DefaultThemeType["buttons"]>) => {
        dispatch({ type: DesignOptions.BUTTONS, payload: buttons });
      },
      setNavigation: (navigation: Partial<DefaultThemeType["navigation"]>) => {
        dispatch({ type: DesignOptions.NAVIGATION, payload: navigation });
      },
      setAnimation: (animation: Partial<DefaultThemeType["animation"]>) => {
        dispatch({ type: DesignOptions.ANIMATIONS, payload: animation });
      },
      addSection: (section: Section, index: number) => {
        dispatch({
          type: SectionActions.ADD,
          payload: {
            section,
            index,
          },
        });
      },
      editSection: (section: Section, index: number) => {
        dispatch({
          type: SectionActions.EDIT,
          payload: {
            section,
            index,
          },
        });
      },
      deleteSection: (index: number) => {
        dispatch({
          type: SectionActions.DELETE,
          payload: {
            index,
          },
        });
      },
    }),
    [state]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export function useThemeContext() {
  return useContext(ThemeContext);
}

export default ThemeContextProvider;
