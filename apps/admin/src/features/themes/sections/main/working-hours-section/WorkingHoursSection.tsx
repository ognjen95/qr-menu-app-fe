import { FC } from "react";
import { ColorPallete, Section } from "src/app/context/theme-context/types";

import ThemeTypography from "~features/themes/components/typography/ThemeTypography";
import { ComponentType } from "~graphql-api";

import ThemeSection from "../../../components/section-wrapper/ThemeSection";

export type WorkingHoursSectionProps = {
  sectionData: Section;
  colorPallete: ColorPallete;
};

const WorkingHoursSection: FC<WorkingHoursSectionProps> = ({
  sectionData,
  colorPallete,
}) => (
  <ThemeSection colorPallete={colorPallete} sectionData={sectionData}>
    <div className="flex h-full -mx-[15px] justify-center">
      <div className=" w-full h-full flex flex-col justify-center items-center">
        <ThemeTypography
          className="pb-[80px]"
          type={ComponentType.H1}
          props={sectionData.components?.[0]?.props}
          style={sectionData.components?.[0]?.style}
        />
        <div>
          <ThemeTypography
            type={ComponentType.H6}
            props={sectionData.components?.[1]?.props}
            style={sectionData.components?.[1]?.style}
          />
          <div
            className="w-[200px] h-1 rounded-lg my-3"
            style={{ backgroundColor: colorPallete.primary }}
          />
          <div className="grid grid-cols-[repeat(2,_1fr)] auto-rows-max gap-y-4 gap-x-[150px]">
            <ThemeTypography
              type={ComponentType.P}
              props={sectionData.components?.[2]?.props}
              style={sectionData.components?.[2]?.style}
            />
            <ThemeTypography
              type={ComponentType.P}
              props={sectionData.components?.[3]?.props}
              style={sectionData.components?.[3]?.style}
            />
            <ThemeTypography
              type={ComponentType.P}
              props={sectionData.components?.[4]?.props}
              style={sectionData.components?.[4]?.style}
            />
            <ThemeTypography
              type={ComponentType.P}
              props={sectionData.components?.[5]?.props}
              style={sectionData.components?.[5]?.style}
            />
            <ThemeTypography
              type={ComponentType.P}
              props={sectionData.components?.[6]?.props}
              style={sectionData.components?.[6]?.style}
            />
            <ThemeTypography
              type={ComponentType.P}
              props={sectionData.components?.[7]?.props}
              style={sectionData.components?.[7]?.style}
            />
            <ThemeTypography
              type={ComponentType.P}
              props={sectionData.components?.[8]?.props}
              style={sectionData.components?.[8]?.style}
            />
            <ThemeTypography
              type={ComponentType.P}
              props={sectionData.components?.[9]?.props}
              style={sectionData.components?.[9]?.style}
            />
            <ThemeTypography
              type={ComponentType.P}
              props={sectionData.components?.[10]?.props}
              style={sectionData.components?.[10]?.style}
            />
            <ThemeTypography
              type={ComponentType.P}
              props={sectionData.components?.[11]?.props}
              style={sectionData.components?.[11]?.style}
            />
            <ThemeTypography
              type={ComponentType.P}
              props={sectionData.components?.[12]?.props}
              style={sectionData.components?.[12]?.style}
            />
            <ThemeTypography
              type={ComponentType.P}
              props={sectionData.components?.[13]?.props}
              style={sectionData.components?.[13]?.style}
            />
            <ThemeTypography
              type={ComponentType.P}
              props={sectionData.components?.[14]?.props}
              style={sectionData.components?.[14]?.style}
            />
            <ThemeTypography
              type={ComponentType.P}
              props={sectionData.components?.[15]?.props}
              style={sectionData.components?.[15]?.style}
            />
          </div>
        </div>
      </div>
    </div>
  </ThemeSection>
);

export default WorkingHoursSection;
