import { DefaultThemeType } from "../../../../../app/context/theme-context/types";

export const RECOMENDED_COLORS: Array<
  DefaultThemeType["colorPallete"] & {
    id: number;
  }
> = [
  {
    id: 1,
    background: "#f4f4f4",
    cards: "#fff",
    headers: "#000",
    primary: "#D2A556",
    secondary: "#545454",
    surface: "#fff",
    tertiary: "#000",
    text: "#000",
  },
  {
    id: 2,
    primary: "#fc5913",
    secondary: "#1f2937",
    tertiary: "#f4f4f4",
    text: "#f9fafb",
    cards: "#1f2937",
    background: "#0f172a",
    headers: "#fff",
    surface: "#1f2937",
  },
  {
    id: 3,
    primary: "#fc5913",
    secondary: "#1f2937",
    tertiary: "#f4f4f4",
    text: "#f9fafb",
    cards: "#14532d",
    background: "#052e16",
    headers: "#fff",
    surface: "#14532d",
  },
  {
    id: 4,
    primary: "#219ebc",
    secondary: "#8ecae6",
    tertiary: "#023047",
    text: "black",
    cards: "white",
    background: "f2f2f2",
    headers: "black",
    surface: "white",
  },
  {
    id: 5,
    background: "#fff",
    cards: "#f2f2f2",
    headers: "#000",
    primary: "#a855f7",
    secondary: "#545454",
    surface: "#f2f2f2",
    tertiary: "#000",
    text: "#000",
  },
];
