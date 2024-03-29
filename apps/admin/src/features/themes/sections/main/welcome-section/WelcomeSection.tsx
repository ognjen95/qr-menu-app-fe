import { FC } from "react";
import {
  ColorPallete,
  Section,
  Typography,
} from "src/app/context/theme-context/types";
import { FCWithChildren } from "ui-components";

import {
  AnimationType,
  ComponentType,
} from "../../../../../app/context/theme-context/enums";
import { removeEmptyFields } from "../../../../../common/helpers";
import ThemeImage from "../../../components/images/ThemeImage";
import ThemeSection from "../../../components/section-wrapper/ThemeSection";
import ThemeTypography from "../../../components/typography/ThemeTypography";

type WelcomeSectionProps = {
  sectionData: Section;
  colorPallete: ColorPallete;
  typography: Typography;
  animationType: AnimationType;
};

const WelcomeSection: FC<WelcomeSectionProps> = ({
  sectionData,
  colorPallete,
  typography,
  animationType,
}) => (
  <ThemeSection
    colorPallete={colorPallete}
    sectionData={sectionData}
    typography={typography}
    animationType={animationType}
  >
    <div
      className="flex h-full -mx-[15px] items-center"
      data-aos={animationType}
    >
      <div className="w-1/2 float-left duration-[400ms] relative min-h-0 px-[15px]">
        <div className="relative py-2 px-1 pb-[30px]">
          <ThemeTypography
            type={ComponentType.H1}
            props={sectionData.components?.[0]?.props}
            style={sectionData.components?.[0]?.style}
          />
        </div>
        <div className="relative py-2 px-1">
          <ThemeTypography
            type={ComponentType.H5}
            props={sectionData.components?.[1]?.props}
            style={sectionData.components?.[1]?.style}
          />
          <ThemeTypography
            type={ComponentType.H5}
            props={sectionData.components?.[2]?.props}
            style={sectionData.components?.[2]?.style}
          />
        </div>
      </div>
      <div className="w-1/2 float-left relative min-h-0 px-[15px] flex justify-center">
        <ThemeImage
          component={sectionData.components?.[3]}
          className="rounded-ss-[80px] rounded-ee-[80px]"
        />
      </div>
    </div>
  </ThemeSection>
);

export default WelcomeSection;
