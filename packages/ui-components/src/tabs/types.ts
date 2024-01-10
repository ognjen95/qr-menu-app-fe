import { ReactNode } from "react";

export type Tab = {
  text: string;
  feature: ReactNode;
  disableContentScroll?: boolean;
  id: number | string;
  errorCount?: number;
};

export type TabsAndFeatures = {
  tabs: ReactNode[];
  features: ReactNode[];
};
