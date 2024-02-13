import { IconType } from "ui-components";

import { MainNav, DesignOptions } from "./enums";

export const MAIN_NAV = [
  {
    iconType: IconType.CONTENT,
    text: MainNav.EDITOR,
    link: "/admin/menus",
  },
  {
    iconType: IconType.DASHBOARD,
    text: MainNav.DESIGN,
    link: "/admin/dashboard",
  },
  {
    iconType: IconType.DASHBOARD,
    text: MainNav.THEMES,
    link: "/admin/dashboard",
  },
  {
    iconType: IconType.TEMPLATE,
    text: MainNav.PAGES,
    link: "/admin/builder",
  },
  {
    iconType: IconType.TEMPLATE,
    text: MainNav.LANGUAGES,
    link: "/admin/builder",
  },
  {
    iconType: IconType.TEMPLATE,
    text: MainNav.SETTINGS,
    link: "/admin/builder",
  },
];

export const DESING_OPTIONS = [
  {
    iconType: IconType.TEMPLATE,
    text: DesignOptions.COLORS,
    return: MainNav.DESIGN,
  },
  {
    iconType: IconType.TEMPLATE,
    text: DesignOptions.TYPOGRAPHY,
    return: MainNav.DESIGN,
  },
  {
    iconType: IconType.TEMPLATE,
    text: DesignOptions.BUTTONS,
    return: MainNav.DESIGN,
  },
  {
    iconType: IconType.TEMPLATE,
    text: DesignOptions.BACKGROUND,
    return: MainNav.DESIGN,
  },
  {
    iconType: IconType.TEMPLATE,
    text: DesignOptions.ANIMATIONS,
    return: MainNav.DESIGN,
  },
  {
    iconType: IconType.TEMPLATE,
    text: DesignOptions.NAVIGATION,
    return: MainNav.DESIGN,
  },
  {
    iconType: IconType.TEMPLATE,
    text: DesignOptions.FOOTER,
    return: MainNav.DESIGN,
  },
  {
    iconType: IconType.TEMPLATE,
    text: DesignOptions.LOGO,
    return: MainNav.DESIGN,
  },
];
