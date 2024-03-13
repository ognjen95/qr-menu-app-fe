import { UseModalReturn } from "ui-components/src/modal/useModal";

import { DefaultThemeType } from "../../../app/context/theme-context/types";
import { MenuSectionItem } from "../menu-overview/types";

export type MenuBottomDrawerProps = {
  modal: UseModalReturn<MenuSectionItem>;
  alergens?: string[];
  tags?: string[];
  colorPallete?: DefaultThemeType["colorPallete"];
  buttons?: DefaultThemeType["buttons"];
  onVariantChange?: (variant: string) => void;
};

export type OrderUrlItem = {
  id: string;
  price: string;
  qty: string;
};
