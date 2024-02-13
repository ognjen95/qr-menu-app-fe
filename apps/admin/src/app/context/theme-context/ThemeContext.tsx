import React, { createContext, useContext, useMemo, useReducer } from "react";
import { FCWithChildren } from "ui-components";

import { DEFAULT_THEME } from "./constants";
import reducer from "./reducer";
import { DefaultThemeType, ThemeContextType } from "./types";
import { DesignOptions } from "../../../features/builder/builder-sidebar/enums";

const ThemeContext = createContext<ThemeContextType>({
  theme: DEFAULT_THEME,
  setCollorPallete: () => {},
  setTypography: () => {},
  setBackground: () => {},
  setButtons: () => {},
});

const ThemeContextProvider: FCWithChildren = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, DEFAULT_THEME);

  const contextValue = useMemo(
    () => ({
      theme: state,
      setTheme: (theme: DefaultThemeType) => {
        dispatch({ type: "THEME", payload: theme });
      },
      setCollorPallete: (colorPallete: DefaultThemeType["colorPallete"]) => {
        dispatch({ type: DesignOptions.COLORS, payload: colorPallete });
      },
      setTypography: (typography: DefaultThemeType["typography"]) => {
        dispatch({ type: DesignOptions.TYPOGRAPHY, payload: typography });
      },
      setBackground: (background: DefaultThemeType["background"]) => {
        dispatch({ type: DesignOptions.BACKGROUND, payload: background });
      },
      setButtons: (buttons: DefaultThemeType["buttons"]) => {
        dispatch({ type: DesignOptions.BUTTONS, payload: buttons });
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
