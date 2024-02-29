import { ButtonSize } from "../../../../../app/context/theme-context/enums";
import {
  PartialButtons,
  DefaultThemeType,
} from "../../../../../app/context/theme-context/types";

export type ButtonTypeprops = {
  setButtons: (buttons: PartialButtons) => void;
  theme: DefaultThemeType["buttons"];
  currentButtonSize?: ButtonSize;
};
