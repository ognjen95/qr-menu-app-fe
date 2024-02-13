import { cloneDeep } from "@apollo/client/utilities";

import { ActionsType, DefaultThemeType } from "./types";
import { DesignOptions } from "../../../features/builder/builder-sidebar/enums";

const reducer = (state: DefaultThemeType, actions: ActionsType) => {
  let stateCopy = cloneDeep(state);

  switch (actions.type) {
    case "THEME":
      stateCopy = actions.payload;
      return stateCopy;
    case DesignOptions.COLORS:
      stateCopy.colorPallete = actions.payload;
      return stateCopy;
    case DesignOptions.TYPOGRAPHY:
      stateCopy.typography = actions.payload;
      return stateCopy;
    case DesignOptions.BACKGROUND:
      stateCopy.background = actions.payload;
      return stateCopy;
    case DesignOptions.BUTTONS:
      stateCopy.buttons = actions.payload;
      return stateCopy;
    default:
      return state;
  }
};

export default reducer;
