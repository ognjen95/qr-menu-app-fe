import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import { ColorPallete, Section } from "src/app/context/theme-context/types";

import ThemeTypography from "~features/themes/components/typography/ThemeTypography";

import { ComponentType } from "../../../../app/context/theme-context/enums";
import ThemeImage from "../../components/images/ThemeImage";
import ThemeSection from "../../components/section-wrapper/ThemeSection";

type ReviewSectionProps = {
  sectionData: Section;
  colorPallete: ColorPallete;
};

const ReviewSection: FC<ReviewSectionProps> = ({
  sectionData,
  colorPallete,
}) => (
  <ThemeSection colorPallete={colorPallete} sectionData={sectionData}>
    <div className="flex flex-col h-full items-center">
      <div className="flex space-x-[144px] relative min-h-0 pb-10 text-center">
        <div className="w-1/2 self-center">
          <ThemeTypography
            className="pb-[20px]"
            type={ComponentType.H3}
            props={sectionData?.components?.[0]?.props}
            style={sectionData?.components?.[0]?.style}
          />
        </div>
        <div className="flex items-center">
          <ThemeImage
            component={sectionData?.components?.[1]}
            className="rounded-lg min-h-[270px]"
          />
        </div>
      </div>
      <div className="flex space-x-[144px] relative min-h-0 w-full">
        <div className="flex w-1/3 items-center justify-center">
          <ThemeImage
            component={sectionData?.components?.[2]}
            className="rounded-lg"
          />
        </div>
        <div className="flex flex-col self-center">
          <div className="flex space-x-5 justify-center mb-10">
            <FontAwesomeIcon icon={faStar} size="2x" color="#FFD700" />
            <FontAwesomeIcon icon={faStar} size="2x" color="#FFD700" />
            <FontAwesomeIcon icon={faStar} size="2x" color="#FFD700" />
            <FontAwesomeIcon icon={faStar} size="2x" color="#FFD700" />
            <FontAwesomeIcon icon={faStar} size="2x" color="#FFD700" />
          </div>
          <ThemeTypography
            className="pb-[20px]"
            type={ComponentType.H3}
            props={sectionData?.components?.[3]?.props}
            style={sectionData?.components?.[3]?.style}
          />
        </div>
      </div>
    </div>
  </ThemeSection>
);

export default ReviewSection;
