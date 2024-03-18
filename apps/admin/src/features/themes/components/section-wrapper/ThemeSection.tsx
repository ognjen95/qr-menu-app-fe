import { FCWithChildren } from "ui-components";

import { AnimationType } from "../../../../app/context/theme-context/enums";
import {
  ColorPallete,
  Section,
  Typography,
} from "../../../../app/context/theme-context/types";
import { removeEmptyFields } from "../../../../common/helpers";

export type ThemeSectionProps = {
  sectionData?: Section;
  colorPallete?: ColorPallete;
  typography?: Typography;
  animationType?: AnimationType;
};

const ThemeSection: FCWithChildren<ThemeSectionProps> = ({
  children,
  sectionData,
}) => (
  <div className="py-16" style={removeEmptyFields(sectionData?.style ?? {})}>
    <div className="w-[1170px] px-[15px] mx-auto">{children}</div>
  </div>
);

export default ThemeSection;
