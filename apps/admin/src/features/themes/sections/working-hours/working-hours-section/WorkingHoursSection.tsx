import { FC } from "react";
import {
  ColorPallete,
  Section,
  Typography,
} from "src/app/context/theme-context/types";

import ThemeButton from "../../../components/buttons/ThemeButton";
import ThemeTypography from "../../../components/typography/ThemeTypography";
import { ComponentType } from "../../enums";

type WorkingHoursSectionProps = {
  sectionData: Section;
  colorPallete: ColorPallete;
  typography: Typography;
};

const WorkingHoursSection: FC<WorkingHoursSectionProps> = ({
  sectionData: { components },
  colorPallete,
  typography,
}) => (
  <section
    className="relative py-[120px] group bg-fixed"
    style={{ backgroundImage: `url(${components?.[0]?.props?.src ?? ""})` }}
  >
    <div className="absolute top-0 left-0 bg-black/50 transition-all ease-in-out duration-300 group-hover:backdrop-blur-sm w-full h-full z-0" />
    <div className="relative flex flex-col space-y-10 z-20 bg-transparent text-center">
      <ThemeTypography
        type={ComponentType.H1}
        props={components?.[1]?.props}
        style={components?.[1]?.style}
      />
      <ThemeTypography
        type={ComponentType.P}
        props={components?.[2]?.props}
        style={components?.[2]?.style}
      />
      <ThemeButton
        props={components?.[3]?.props}
        style={{
          ...components?.[3]?.style,
        }}
      />
    </div>
  </section>
);

export default WorkingHoursSection;
