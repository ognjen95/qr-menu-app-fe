import { FC } from "react";
import { ColorPallete, Section } from "src/app/context/theme-context/types";

import ThemeButton from "~features/themes/components/buttons/ThemeButton";

import { ComponentType } from "../../../../../app/context/theme-context/enums";
import ThemeImage from "../../../components/images/ThemeImage";
import ThemeSection from "../../../components/section-wrapper/ThemeSection";
import ThemeTypography from "../../../components/typography/ThemeTypography";

type MenuSectionProps = {
  sectionData: Section;
  colorPallete: ColorPallete;
};

const MenuSection: FC<MenuSectionProps> = ({ sectionData, colorPallete }) => (
  <ThemeSection colorPallete={colorPallete} sectionData={sectionData}>
    <div className="text-center mb-[60px]">
      <ThemeTypography
        type={ComponentType.H1}
        props={sectionData?.components?.[10]?.props}
        style={sectionData?.components?.[10]?.style}
      />
    </div>
    <div className="flex justify-center">
      <div className="relative min-h-0 px-[15px] w-1/3">
        <div className="flex flex-col text-center">
          <ThemeImage
            className="rounded-md mb-4"
            component={sectionData?.components?.[0]}
          />
          <ThemeTypography
            type={ComponentType.H3}
            props={sectionData?.components?.[1]?.props}
            style={sectionData?.components?.[1]?.style}
          />
          <ThemeTypography
            type={ComponentType.P}
            props={sectionData?.components?.[2]?.props}
            style={sectionData?.components?.[2]?.style}
          />
          <div className="mt-[20px]">
            <ThemeButton
              style={sectionData?.components?.[9]?.style}
              props={sectionData?.components?.[9]?.props}
            />
          </div>
        </div>
      </div>
      <div className="relative min-h-0 px-[15px] w-1/3">
        <div className="flex flex-col text-center">
          <ThemeImage
            className="rounded-md mb-4"
            component={sectionData?.components?.[3]}
          />
          <ThemeTypography
            type={ComponentType.H3}
            props={sectionData?.components?.[4]?.props}
            style={sectionData?.components?.[4]?.style}
          />
          <ThemeTypography
            type={ComponentType.P}
            props={sectionData?.components?.[5]?.props}
            style={sectionData?.components?.[5]?.style}
          />
          <div className="mt-[20px]">
            <ThemeButton
              style={sectionData?.components?.[9]?.style}
              props={sectionData?.components?.[9]?.props}
            />
          </div>
        </div>
      </div>
      <div className="relative min-h-0 px-[15px] w-1/3">
        <div className="flex flex-col text-center">
          <ThemeImage
            className="rounded-md mb-4"
            component={sectionData?.components?.[6]}
          />
          <ThemeTypography
            type={ComponentType.H3}
            props={sectionData?.components?.[7]?.props}
            style={sectionData?.components?.[7]?.style}
          />
          <ThemeTypography
            type={ComponentType.P}
            props={sectionData?.components?.[8]?.props}
            style={sectionData?.components?.[8]?.style}
          />
          <div className="mt-[20px]">
            <ThemeButton
              style={sectionData?.components?.[9]?.style}
              props={sectionData?.components?.[9]?.props}
            />
          </div>
        </div>
      </div>
    </div>
  </ThemeSection>
);

export default MenuSection;
