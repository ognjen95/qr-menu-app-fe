import Image from "next/image";
import { FC } from "react";
import {
  ColorPallete,
  Section,
  Typography,
} from "src/app/context/theme-context/types";

import { AnimationType } from "../../../../../app/context/theme-context/enums";
import ThemeTypography from "../../../components/typography/ThemeTypography";
import { ComponentType } from "../../enums";

type IngredientsSectionProps = {
  sectionData: Section;
  colorPallete: ColorPallete;
  typography: Typography;
  animationType: AnimationType;
};

const IngredientsSectionSection: FC<IngredientsSectionProps> = ({
  sectionData: { components },
  colorPallete,
  typography,
  animationType,
}) => (
  <section className="py-[120px] bg-gray-100">
    <div className="w-[1170px] px-[15px] mx-auto">
      <div className="flex h-full -mx-[15px] items-center">
        <div
          className="w-1/2 float-left duration-[400ms] relative min-h-0 px-[15px]"
          data-aos={animationType}
        >
          <ThemeTypography
            className="pb-[20px]"
            type={ComponentType.H4}
            props={components?.[0]?.props}
            style={components?.[0]?.style}
          />
          <ThemeTypography
            className="pb-[30px]"
            type={ComponentType.H2}
            props={components?.[1]?.props}
            style={components?.[1]?.style}
          />
          <ThemeTypography
            type={ComponentType.P}
            props={components?.[2]?.props}
            style={components?.[2]?.style}
          />
        </div>
        <div
          className="w-1/2 float-right relative min-h-0 px-[15px] flex justify-center"
          // data-aos="fade-up"
        >
          <Image
            className="rounded-ss-[80px] rounded-ee-[80px]"
            src={
              components?.[4]?.props?.src ??
              "https://static.cdn-upm.com/static/themes/ef8ba596-4579-11ed-8bca-525400080621/assets-4/cook.jpg?v=8"
            }
            width={+(components?.[3]?.style?.width ?? 400)}
            alt={components?.[4]?.props?.alt ?? ""}
            height={+(components?.[3]?.style?.height ?? 400)}
          />
        </div>
      </div>
    </div>
  </section>
);

export default IngredientsSectionSection;
