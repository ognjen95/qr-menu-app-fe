import { ThemeConfigurationEntity } from "~graphql-api";

import { DefaultThemeType } from "./types";

export const mapThemeGQL = (
  theme: ThemeConfigurationEntity
): DefaultThemeType => ({
  sections: theme.sections.map((section) => ({
    components:
      section?.components?.map((component) => ({
        props: component.props as Record<string, string>,
        style: component.style as Record<string, string>,
        title: component.title,
        type: component.type,
      })) ?? [],
    description: section.description,
    id: section.id,
    props: section.props as Record<string, string>,
    style: section.style as Record<string, string>,
    title: section.title,
  })),
  animation: {
    delay: "1",
    duration: "1",
    iteration: "1",
    timing: "1",
    type: "1",
  },
  background: {
    color: theme.background.color,
    image: theme.background.image,
  },
  buttons: {
    borderRadius: theme.buttons.borderRadius,
  },
  colorPallete: theme.colorPallete,
  title: theme.title,
  typography: {
    fontSize: theme.typography.fontSize,
    headers: {
      color: theme.typography.headers.color ?? "red",
      fontFamily: theme.typography.headers.fontFamily ?? "promeni",
      fontSize: theme.typography.headers.fontSize ?? "30px",
      weight: theme.typography.headers.weight ?? "500",
    },
    text: {
      color: theme.typography.headers.color ?? "red",
      fontFamily: theme.typography.headers.fontFamily ?? "promeni",
      fontSize: theme.typography.headers.fontSize ?? "18px",
      weight: theme.typography.headers.weight ?? "400",
    },
  },
});
