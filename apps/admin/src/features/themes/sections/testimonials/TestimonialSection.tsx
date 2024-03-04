import { FC } from "react";
import { Section } from "src/app/context/theme-context/types";

import ThemeTypography from "~features/themes/components/typography/ThemeTypography";

import { ComponentType } from "../../../../app/context/theme-context/enums";
import ThemeImage from "../../components/images/ThemeImage";

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
          <ThemeImage component={components?.[1]} className="rounded-lg" />
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
