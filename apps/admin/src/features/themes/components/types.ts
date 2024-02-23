import { CSSProperties } from "react";

import { ComponentProps } from "../../../app/context/theme-context/types";
import { ComponentType } from "../sections/enums";

export type ThemeComponentProps<T = ComponentType.DIV> = {
  style?: CSSProperties;
  props?: ComponentProps;
  type?: T;
  className?: string;
};
