import { IconType } from "ui-components";

import { MainNav, DesignOptions } from "./enums";

export const MAIN_NAV = [
  {
    iconType: IconType.CONTENT,
    text: MainNav.EDITOR,
    link: "/admin/menus",
  },
  {
    iconType: IconType.EDIT_PENCIL_1,
    text: MainNav.DESIGN,
    link: "/admin/dashboard",
  },
  {
    iconType: IconType.IMAGE_1,
    text: MainNav.THEMES,
    link: "/admin/dashboard",
  },
  {
    iconType: IconType.FILE_DOCUMENT,
    text: MainNav.PAGES,
    link: "/admin/builder",
  },
  {
    iconType: IconType.GLOBE,
    text: MainNav.LANGUAGES,
    link: "/admin/builder",
  },
  {
    iconType: IconType.SETTINGS,
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
    iconType: IconType.TYPOGRAPHY,
    text: DesignOptions.TYPOGRAPHY,
    return: MainNav.DESIGN,
  },
  {
    iconType: IconType.TEMPLATE,
    text: DesignOptions.BUTTONS,
    return: MainNav.DESIGN,
  },
  {
    iconType: IconType.IMAGE_1,
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
