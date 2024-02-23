import Image from "next/image";
import { FC } from "react";
import {
  ButtonsStyle,
  ColorPallete,
  Section,
  Typography,
} from "src/app/context/theme-context/types";

import { AnimationType } from "../../../../../app/context/theme-context/enums";
import ThemeButton from "../../../components/buttons/ThemeButton";
import ThemeTypography from "../../../components/typography/ThemeTypography";
import { ComponentType } from "../../enums";

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
  <section className="py-[120px] bg-gray-100">
    <div className="w-[1170px] px-[15px] mx-auto">
      <div className="flex h-full -mx-[15px] items-center">
        <div className="w-1/2 float-left relative min-h-0 px-[15px]">
          <Image
            className="rounded-ss-[80px] rounded-ee-[80px]"
            src={
              sectionData.components?.[0]?.props?.src ??
              "https://static.cdn-upm.com/static/themes/ef8ba596-4579-11ed-8bca-525400080621/assets-4/generic2.jpg?v=8"
            }
            width={parseInt(
              sectionData.components?.[0]?.style?.width?.toString() ?? "400",
              10
            )}
            alt={sectionData.components?.[0]?.props?.alt ?? ""}
            height={parseInt(
              sectionData.components?.[0]?.style?.height?.toString() ?? "400",
              10
            )}
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
