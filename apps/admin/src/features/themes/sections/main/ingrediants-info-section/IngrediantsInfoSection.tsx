import Image from "next/image";
import { FC } from "react";
import {
  ColorPallete,
  Section,
  Typography,
} from "src/app/context/theme-context/types";

import {
  AnimationType,
  ComponentType,
} from "../../../../../app/context/theme-context/enums";
import ThemeImage from "../../../components/images/ThemeImage";
import ThemeSection from "../../../components/section-wrapper/ThemeSection";
import ThemeTypography from "../../../components/typography/ThemeTypography";

type IngredientsSectionProps = {
  sectionData: Section;
  colorPallete: ColorPallete;
  typography: Typography;
  animationType: AnimationType;
};

const IngredientsSectionSection: FC<IngredientsSectionProps> = ({
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
    <div className="flex h-full -mx-[15px] items-center">
      <div
        className="w-1/2 float-left duration-[400ms] relative min-h-0 px-[15px]"
        data-aos={animationType}
      >
        <ThemeTypography
          className="pb-[20px]"
          type={ComponentType.H4}
          props={sectionData?.components?.[0]?.props}
          style={sectionData?.components?.[0]?.style}
        />
        <ThemeTypography
          className="pb-[30px]"
          type={ComponentType.H2}
          props={sectionData?.components?.[1]?.props}
          style={sectionData?.components?.[1]?.style}
        />
        <ThemeTypography
          type={ComponentType.P}
          props={sectionData?.components?.[2]?.props}
          style={sectionData?.components?.[2]?.style}
        />
      </div>
      <div
        className="w-1/2 float-right relative min-h-0 px-[15px] flex justify-center"
        // data-aos="fade-up"
      >
        <ThemeImage
          className="rounded-ss-[80px] rounded-ee-[80px]"
          component={sectionData?.components?.[3]}
        />
      </div>
    </div>
  </ThemeSection>
);

export default IngredientsSectionSection;
