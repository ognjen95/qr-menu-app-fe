import { ComponentType } from "../../../app/context/theme-context/enums";
import {
  CSSStyle,
  ComponentProps,
} from "../../../app/context/theme-context/types";

export type ThemeComponentProps<T = ComponentType.DIV> = {
  style?: CSSStyle;
  props?: ComponentProps;
  type?: T;
  className?: string;
};
