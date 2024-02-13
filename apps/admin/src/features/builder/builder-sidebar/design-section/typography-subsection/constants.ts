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
