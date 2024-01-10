import { ReactNode } from "react";

import { IconSize, IconType } from "../icon/enums";

export type DropdownMenuItem = {
  key: string;
  label: string;
  onClick: () => void;
  iconType?: IconType;
  iconFill?: string;
  iconStroke?: string;
  iconSize?: IconSize;
  disabled?: boolean;
  tooltipMessage?: string;
};

export type CustomDropdownMenuItem = {
  label: string;
  component: ReactNode;
};

export type DropdownMenuItems =
  | [DropdownMenuItem, ...DropdownMenuItem[]]
  | [CustomDropdownMenuItem, ...CustomDropdownMenuItem[]];
