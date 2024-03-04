import { FC } from "react";
import { ColorPallete, Section } from "src/app/context/theme-context/types";

import ThemeButton from "~features/themes/components/buttons/ThemeButton";

import { ComponentType } from "../../../../../app/context/theme-context/enums";
import ThemeImage from "../../../components/images/ThemeImage";
import ThemeTypography from "../../../components/typography/ThemeTypography";

type MenuSectionProps = {
  sectionData: Section;
  colorPallete: ColorPallete;
};

const MenuSection: FC<MenuSectionProps> = ({
  sectionData: { components },
  colorPallete,
}) => (
  <section
    className="py-[120px]"
    style={{ backgroundColor: colorPallete.surface }}
  >
    <div className="px-[15px] mx-auto w-[1170px]">
      <div className="text-center mb-[60px]">
        <ThemeTypography
          type={ComponentType.H1}
          props={components?.[10]?.props}
          style={components?.[10]?.style}
        />
      </div>
      <div className="flex justify-center">
        <div className="relative min-h-0 px-[15px] w-1/3">
          <div className="flex flex-col text-center">
            <ThemeImage
              className="rounded-md mb-4"
              component={components?.[0]}
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
            <div className="mt-[20px]">
              <ThemeButton
                style={components?.[9]?.style}
                props={components?.[9]?.props}
              />
            </div>
          </div>
        </div>
        <div className="relative min-h-0 px-[15px] w-1/3">
          <div className="flex flex-col text-center">
            <ThemeImage
              className="rounded-md mb-4"
              component={components?.[3]}
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
            <div className="mt-[20px]">
              <ThemeButton
                style={components?.[9]?.style}
                props={components?.[9]?.props}
              />
            </div>
          </div>
        </div>
        <div className="relative min-h-0 px-[15px] w-1/3">
          <div className="flex flex-col text-center">
            <ThemeImage
              className="rounded-md mb-4"
              component={components?.[6]}
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
            <div className="mt-[20px]">
              <ThemeButton
                style={components?.[9]?.style}
                props={components?.[9]?.props}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default MenuSection;
