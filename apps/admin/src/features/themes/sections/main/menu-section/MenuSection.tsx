import Image from "next/image";
import { FC } from "react";
import {
  ColorPallete,
  Section,
  Typography,
} from "src/app/context/theme-context/types";

import ThemeButton from "~features/themes/components/buttons/ThemeButton";

import ThemeTypography from "../../../components/typography/ThemeTypography";
import { ComponentType } from "../../enums";

type MenuSectionProps = {
  sectionData: Section;
  colorPallete: ColorPallete;
};

const MenuSection: FC<MenuSectionProps> = ({
  sectionData: { components },
  colorPallete,
}) => (
  <section className="py-[120px]">
    <div className="px-[15px] mx-auto w-[1170px]">
      <div className="text-center mb-[60px]">
        <ThemeTypography
          type={ComponentType.H1}
          props={components?.[10]?.props}
          style={components?.[10]?.style}
        />
      </div>
      <div
        className="flex justify-center"
        // data-aos="fade-up"
      >
        <div className="relative min-h-0 px-[15px] w-1/3">
          <div className="flex flex-col text-center">
            <Image
              className="rounded-md mb-4"
              src={
                components?.[0]?.props?.src ??
                "https://static.cdn-upm.com/static/themes/6654c880-9584-11ed-9ecf-525400080521/assets-2/pexels-alberta-studios-9792460.jpg?v=0"
              }
              width={+(components?.[0]?.style?.width ?? 350)}
              alt={components?.[0]?.props?.alt ?? ""}
              height={+(components?.[0]?.style?.height ?? 350)}
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
            <Image
              className="rounded-md mb-4"
              src={
                components?.[3]?.props?.src ??
                "https://static.cdn-upm.com/static/themes/6654c880-9584-11ed-9ecf-525400080521/assets-2/pexels-marcelo-oliveira-santana-6697469.jpg?v=0"
              }
              width={+(components?.[3]?.style?.width ?? 350)}
              alt={components?.[3]?.props?.alt ?? ""}
              height={+(components?.[3]?.style?.height ?? 350)}
            />
            <ThemeTypography
              type={ComponentType.H3}
              props={components?.[4]?.props}
              style={{
                color: colorPallete.secondary,
                ...components?.[4]?.style,
              }}
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
            <Image
              className="rounded-md mb-4"
              src={
                components?.[6]?.props?.src ??
                "https://static.cdn-upm.com/static/themes/6654c880-9584-11ed-9ecf-525400080521/assets-2/pexels-yassir-abbas-11111603.jpg?v=0"
              }
              width={+(components?.[6]?.style?.width ?? 350)}
              alt={components?.[6]?.props?.alt ?? ""}
              height={+(components?.[6]?.style?.height ?? 350)}
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
