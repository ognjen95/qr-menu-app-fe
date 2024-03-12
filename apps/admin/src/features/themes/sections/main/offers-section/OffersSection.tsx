import { faBed, faCoffee, faCutlery } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import {
  ColorPallete,
  Section,
  Typography,
} from "src/app/context/theme-context/types";

import { ComponentType } from "../../../../../app/context/theme-context/enums";
import ThemeSection from "../../../components/section-wrapper/ThemeSection";
import ThemeTypography from "../../../components/typography/ThemeTypography";

type OffersSectionProps = {
  sectionData: Section;
  colorPallete: ColorPallete;
  typography: Typography;
};

const OffersSectionSection: FC<OffersSectionProps> = ({
  sectionData,
  colorPallete,
  typography,
}) => (
  <ThemeSection
    colorPallete={colorPallete}
    sectionData={sectionData}
    typography={typography}
  >
    <div
      className="flex justify-center"
      // data-aos="fade-up"
    >
      <div className="relative min-h-0 px-[15px] w-1/3">
        <div className="flex flex-col text-center">
          <FontAwesomeIcon
            icon={faCoffee}
            color={
              sectionData?.components?.[0]?.style?.color ?? colorPallete.primary
            }
            size="4x"
            className="mb-5"
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
        </div>
      </div>
      <div className="relative min-h-0 px-[15px] w-1/3">
        <div className="flex flex-col text-center">
          <FontAwesomeIcon
            icon={faBed}
            color={
              sectionData?.components?.[3]?.style?.color ?? colorPallete.primary
            }
            size="4x"
            className="mb-5"
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
        </div>
      </div>
      <div className="relative min-h-0 px-[15px] w-1/3">
        <div className="flex flex-col text-center">
          <FontAwesomeIcon
            icon={faCutlery}
            color={
              sectionData?.components?.[6]?.style?.color ?? colorPallete.primary
            }
            size="4x"
            className="mb-5"
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
        </div>
      </div>
    </div>
  </ThemeSection>
);

export default OffersSectionSection;
