import capitalize from "lodash.capitalize";

import { SectionPage } from "../../../app/context/theme-context/enums";

export const PAGES = Object.values(SectionPage).map((page) => ({
  isVisible: false,
  name: `${capitalize(page)} page`,
  url: `?page=${page}`,
  value: page,
}));
