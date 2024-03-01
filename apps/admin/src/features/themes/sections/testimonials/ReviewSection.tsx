import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { FC } from "react";
import { Section } from "src/app/context/theme-context/types";

import ThemeTypography from "~features/themes/components/typography/ThemeTypography";

import { ComponentType } from "../enums";

type ReviewSectionProps = {
  sectionData: Section;
};

const ReviewSection: FC<ReviewSectionProps> = ({
  sectionData: { components },
}) => (
  <section className="py-[120px] bg-gray-100">
    <div className="w-[1170px] mx-auto">
      <div className="flex flex-col h-full items-center">
        <div className="flex space-x-[144px] relative min-h-0 pb-10 text-center">
          <div className="w-1/2 self-center">
            <ThemeTypography
              className="pb-[20px]"
              type={ComponentType.H3}
              props={components?.[0]?.props}
              style={components?.[0]?.style}
            />
          </div>
          <div className="flex items-center">
            <Image
              className="rounded-lg min-h-[270px]"
              src={
                components?.[1]?.props?.src ??
                "https://static.cdn-upm.com/static/themes/ef8ba596-4579-11ed-8bca-525400080621/assets-4/generic2.jpg?v=8"
              }
              width={parseInt(
                components?.[1]?.style?.width?.toString() ?? "270",
                10
              )}
              alt={components?.[1]?.props?.alt ?? ""}
              height={parseInt(
                components?.[1]?.style?.height?.toString() ?? "270",
                10
              )}
            />
          </div>
        </div>
        <div className="flex space-x-[144px] relative min-h-0 w-full">
          <div className="flex w-1/3 items-center justify-center">
            <Image
              className="rounded-lg"
              src={
                components?.[2]?.props?.src ??
                "https://static.cdn-upm.com/static/themes/ef8ba596-4579-11ed-8bca-525400080621/assets-4/generic2.jpg?v=8"
              }
              width={parseInt(
                components?.[2]?.style?.width?.toString() ?? "270",
                10
              )}
              alt={components?.[2]?.props?.alt ?? ""}
              height={parseInt(
                components?.[2]?.style?.height?.toString() ?? "270",
                10
              )}
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
              props={components?.[3]?.props}
              style={components?.[3]?.style}
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ReviewSection;
