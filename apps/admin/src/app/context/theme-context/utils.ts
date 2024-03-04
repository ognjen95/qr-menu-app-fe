import { ThemeConfigurationEntity } from "~graphql-api";

import { AnimationType } from "./enums";
import { DefaultThemeType } from "./types";

export const themeMapper = (
  theme: ThemeConfigurationEntity
): DefaultThemeType => ({
  id: theme.id,
  colorPallete: theme.colorPallete,
  title: theme.title,
  logo: theme.logo,
  typography: {
    fontSize: theme.typography.fontSize,
    headers: {
      color: theme.typography.headers.color ?? "",
      fontFamily: theme.typography.headers.fontFamily ?? "",
      fontSize: theme.typography.headers.fontSize ?? "",
      weight: theme.typography.headers.weight ?? "",
    },
    text: {
      color: theme.typography.headers.color ?? "",
      fontFamily: theme.typography.headers.fontFamily ?? "",
      fontSize: theme.typography.headers.fontSize ?? "",
      weight: theme.typography.headers.weight ?? "",
    },
  },
  buttons: theme.buttons,
  navigation: theme.navigation,
  background: theme.background,
  animation: {
    type: (theme.animation.type ?? AnimationType.FADE_UP) as AnimationType,
    delay: "",
    duration: "",
    iteration: "",
    timing: "",
  },
  sections:
    theme.sections.map((section) => ({
      id: section.id,
      title: section.title ?? "",
      description: section.description ?? "",
      style: section.style ?? {},
      props: section.props ?? {},
      components:
        section?.components?.map((component) => ({
          title: component.title ?? "",
          type: component.type,
          style: component.style ?? {},
          props: component.props ?? {},
        })) ?? [],
    })) ?? [],
});
