import { FC } from "react";

import { Section } from "../../../app/context/theme-context/types";

export type SectionConfigMapper = {
  image: string;
  config: Section;
  component: FC;
};
