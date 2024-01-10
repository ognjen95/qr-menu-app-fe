import { ReactNode } from "react";

import { IconType } from "../icon/enums";

export type ButtonTab = {
  text: string;
  feature: ReactNode;
  disableContentScroll?: boolean;
  id: number | string;
  icon?: IconType;
};

export type ButtonTabsAndFeatures = {
  tabs: ReactNode[];
  features: ReactNode[];
};
