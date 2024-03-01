import { FC } from "react";
import {
  ColorPallete,
  Section,
  Typography,
} from "src/app/context/theme-context/types";

import { AnimationType } from "../../../../../app/context/theme-context/enums";
import ThemeImage from "../../../components/images/ThemeImage";
import ThemeTypography from "../../../components/typography/ThemeTypography";
import { ComponentType } from "../../enums";

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
  <section className="py-16">
    <div className="w-[1170px] px-[15px] mx-auto">
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
    </div>
  </section>
);

export default WelcomeSection;
