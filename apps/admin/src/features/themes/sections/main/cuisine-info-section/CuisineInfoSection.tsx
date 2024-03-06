import { FC } from "react";
import {
  ButtonsStyle,
  ColorPallete,
  Section,
  Typography,
} from "src/app/context/theme-context/types";

import {
  AnimationType,
  ComponentType,
} from "../../../../../app/context/theme-context/enums";
import ThemeButton from "../../../components/buttons/ThemeButton";
import ThemeImage from "../../../components/images/ThemeImage";
import ThemeTypography from "../../../components/typography/ThemeTypography";

type CuisineSectionProps = {
  sectionData: Section;
  colorPallete: ColorPallete;
  typography: Typography;
  buttons: ButtonsStyle;
  animationType: AnimationType;
};

const CuisineSectionSection: FC<CuisineSectionProps> = ({
  sectionData,
  colorPallete,
  typography,
  buttons,
  animationType,
}) => (
  <section
    className="py-[120px]"
    style={{
      backgroundColor:
        colorPallete.surface || sectionData.style?.backgroundColor,
    }}
  >
    <div className="w-[1170px] px-[15px] mx-auto">
      <div className="flex h-full -mx-[15px] items-center">
        <div className="w-1/2 float-left relative min-h-0 px-[15px]">
          <ThemeImage
            component={sectionData.components[0]}
            className="rounded-ss-[80px] rounded-ee-[80px]"
          />
        </div>
        <div
          className="w-1/2 float-left relative min-h-0 px-[15px]"
          data-aos={animationType}
        >
          <ThemeTypography
            className="pb-[20px]"
            type={ComponentType.H4}
            props={sectionData.components?.[1]?.props}
            style={sectionData.components?.[1]?.style}
          />
          <ThemeTypography
            className="pb-[40px]"
            type={ComponentType.H2}
            props={sectionData.components?.[2]?.props}
            style={sectionData.components?.[2]?.style}
          />
          <ThemeTypography
            type={ComponentType.P}
            props={sectionData.components?.[3]?.props}
            style={sectionData.components?.[3]?.style}
          />
          <div className="mt-10">
            <ThemeButton
              style={sectionData.components?.[4]?.style}
              props={sectionData.components?.[4]?.props}
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CuisineSectionSection;
