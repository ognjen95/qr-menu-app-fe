import { TypographySize } from "../../../../../graphql-api";

export const FONT_SIZE_MAPPER = {
  [TypographySize.Small]: {
    headers: "16px",
    text: "14px",
  },
  [TypographySize.Medium]: {
    headers: "18px",
    text: "16px",
  },
  [TypographySize.Large]: {
    headers: "20px",
    text: "18px",
  },
};

export const FONT_FAMILY_OPTIONS = [
  {
    value: "Inter",
    label: "Inter",
  },
  {
    value: "Rubik",
    label: "Rubik",
  },
  {
    value: "Montserrat",
    label: "Montserrat",
  },
  {
    value: "Playfair Display",
    label: "Playfair Display",
  },
  {
    value: "Merriweather",
    label: "Merriweather",
  },
];

export const FONT_WEIGHT_MAPPER = {
  400: "Light",
  500: "Regular",
  600: "Bold",
};
