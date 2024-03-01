import Image from "next/image";
import { FC } from "react";
import { Section } from "src/app/context/theme-context/types";

import ThemeTypography from "~features/themes/components/typography/ThemeTypography";

import { ComponentType } from "../enums";

type TestimonialSectionProps = {
  sectionData: Section;
};

const TestimonialSection: FC<TestimonialSectionProps> = ({
  sectionData: { components },
}) => (
  <section
    className="py-[120px] bg-gray-100"
    style={{ backgroundImage: `url(${components?.[0]?.props?.src ?? ""})` }}
  >
    <div className="w-1/2 mx-auto">
      <div className="flex flex-col h-full items-center">
        <div className="float-left relative min-h-0">
          <Image
            className="rounded-lg"
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
        <div className="flex flex-col items-center text-center mt-16">
          <ThemeTypography
            className="pb-[20px]"
            type={ComponentType.H3}
            props={components?.[2]?.props}
            style={components?.[2]?.style}
          />
          <ThemeTypography
            type={ComponentType.H4}
            props={components?.[3]?.props}
            style={components?.[3]?.style}
          />
        </div>
      </div>
    </div>
  </section>
);

export default TestimonialSection;
