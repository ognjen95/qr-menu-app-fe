import { IconType } from "../icon/enums";

export type Nav = {
  text: string;
  link: string;
  notificationNumber?: number;
  onClick?: () => void;
};

export type TopNav = Nav & {
  iconType: IconType;
};

export type BottomNav = Nav & {
  icon: React.ReactNode;
  showTooltip?: boolean;
  notClickable?: boolean;
};
