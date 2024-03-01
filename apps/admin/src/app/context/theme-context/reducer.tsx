import { cloneDeep } from "@apollo/client/utilities";

import { SectionActions } from "./enums";
import { ActionsType, DefaultThemeType } from "./types";
import { DesignOptions } from "../../../features/builder/builder-sidebar/enums";
import { DEFAULT_THEME_CONFIG } from "../../../features/themes/default/constants";

const reducer = (state: DefaultThemeType | null, actions: ActionsType) => {
  let stateCopy = state ? cloneDeep(state) : DEFAULT_THEME_CONFIG;

  switch (actions.type) {
    case "THEME":
      stateCopy = actions.payload;
      return stateCopy;
    case DesignOptions.COLORS:
      stateCopy.colorPallete = {
        ...stateCopy.colorPallete,
        ...actions.payload,
      };
      return stateCopy;
    case DesignOptions.TYPOGRAPHY:
      stateCopy.typography = {
        ...stateCopy.typography,
        ...actions.payload,
      };
      return stateCopy;
    case DesignOptions.BACKGROUND:
      stateCopy.background = {
        ...stateCopy.background,
        ...actions.payload,
      };
      return stateCopy;
    case DesignOptions.BUTTONS:
      stateCopy.buttons = {
        ...stateCopy.buttons,
        ...actions.payload,
      };
      return stateCopy;
    case DesignOptions.NAVIGATION:
      stateCopy.navigation = {
        ...stateCopy.navigation,
        ...actions.payload,
      };
      return stateCopy;
    case DesignOptions.ANIMATIONS:
      stateCopy.animation = {
        ...stateCopy.animation,
        ...actions.payload,
      };
      return stateCopy;
    case SectionActions.ADD:
      stateCopy.sections.splice(
        actions.payload.index,
        0,
        actions.payload.section
      );
      return stateCopy;
    case SectionActions.EDIT:
      stateCopy.sections[actions.payload.index] = {
        ...actions.payload.section,
      };
      return stateCopy;
    case SectionActions.DELETE:
      stateCopy.sections.splice(actions.payload.index, 1);
      return stateCopy;
    default:
      return state;
  }
};

export default reducer;
