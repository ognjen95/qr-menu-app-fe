import { faBed, faCoffee, faCutlery } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import {
  ColorPallete,
  Section,
  Typography,
} from "src/app/context/theme-context/types";

import ThemeTypography from "../../../components/typography/ThemeTypography";
import { ComponentType } from "../../../../../app/context/theme-context/enums";

type OffersSectionProps = {
  sectionData: Section;
  colorPallete: ColorPallete;
  typography: Typography;
};

const OffersSectionSection: FC<OffersSectionProps> = ({
  sectionData: { components },
  colorPallete,
  typography,
}) => (
  <section className="py-[120px]">
    <div className="px-[15px] mx-auto w-[1170px]">
      <div
        className="flex justify-center"
        // data-aos="fade-up"
      >
        <div className="relative min-h-0 px-[15px] w-1/3">
          <div className="flex flex-col text-center">
            <FontAwesomeIcon
              icon={faCoffee}
              color={components?.[0]?.style?.color ?? colorPallete.primary}
              size="4x"
              className="mb-5"
            />
            <ThemeTypography
              type={ComponentType.H3}
              props={components?.[1]?.props}
              style={components?.[1]?.style}
            />
            <ThemeTypography
              type={ComponentType.P}
              props={components?.[2]?.props}
              style={components?.[2]?.style}
            />
          </div>
        </div>
        <div className="relative min-h-0 px-[15px] w-1/3">
          <div className="flex flex-col text-center">
            <FontAwesomeIcon
              icon={faBed}
              color={components?.[3]?.style?.color ?? colorPallete.primary}
              size="4x"
              className="mb-5"
            />
            <ThemeTypography
              type={ComponentType.H3}
              props={components?.[4]?.props}
              style={components?.[4]?.style}
            />
            <ThemeTypography
              type={ComponentType.P}
              props={components?.[5]?.props}
              style={components?.[5]?.style}
            />
          </div>
        </div>
        <div className="relative min-h-0 px-[15px] w-1/3">
          <div className="flex flex-col text-center">
            <FontAwesomeIcon
              icon={faCutlery}
              color={components?.[6]?.style?.color ?? colorPallete.primary}
              size="4x"
              className="mb-5"
            />
            <ThemeTypography
              type={ComponentType.H3}
              props={components?.[7]?.props}
              style={components?.[7]?.style}
            />
            <ThemeTypography
              type={ComponentType.P}
              props={components?.[8]?.props}
              style={components?.[8]?.style}
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default OffersSectionSection;
