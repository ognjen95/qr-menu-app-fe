import Image from "next/image";
import { CSSProperties, FC } from "react";
import {
  ButtonsStyle,
  ColorPallete,
  Section,
  Typography,
} from "src/app/context/theme-context/types";
import { removeEmptyFields } from "src/common/helpers";

import {
  COMPONENT_1_VALUE,
  COMPONENT_2_VALUE,
  COMPONENT_3_VALUE,
  COMPONENT_4_VALUE,
  COMPONENT_5_VALUE,
} from "./defaults";

type HeaderProps = {
  sectionData: Section;
  colorPallete: ColorPallete;
  typography: Typography;
  buttons: ButtonsStyle;
};

const Header: FC<HeaderProps> = ({
  sectionData,
  colorPallete,
  buttons,
  typography,
}) => (
  <section className="flex justify-center">
    <div className="flex w-full max-w-[1170px] justify-between p-4">
      <Image
        src={
          // TODO: logo url should be on theme level
          sectionData.components?.[0]?.props?.src ??
          "https://static.cdn-upm.com/static/themes/ef8ba596-4579-11ed-8bca-525400080621/assets-4/restaurantlogo.png?v=8"
        }
        width={+(sectionData.components?.[0]?.style?.width ?? 100)}
        alt={sectionData.components?.[0]?.props?.alt ?? ""}
        height={+(sectionData.components?.[0]?.style?.width ?? 100)}
      />
      <div className="flex space-x-10 self-center">
        <a
          style={{
            fontFamily: typography.text.fontFamily,
            color: colorPallete.text,
            ...(sectionData.components?.[1]?.style as CSSProperties),
          }}
        >
          {sectionData.components?.[1]?.props?.value ?? COMPONENT_1_VALUE}
        </a>
        <a
          style={{
            fontFamily: typography.text.fontFamily,
            color: colorPallete.text,
            ...(removeEmptyFields(
              sectionData?.components?.[2]?.style
            ) as CSSProperties),
          }}
        >
          {sectionData.components?.[2]?.props?.value ?? COMPONENT_2_VALUE}
        </a>
        <a
          style={{
            fontFamily: typography.text.fontFamily,
            color: colorPallete.text,
            ...(removeEmptyFields(
              sectionData?.components?.[3]?.style
            ) as CSSProperties),
          }}
        >
          {sectionData.components?.[3]?.props?.value ?? COMPONENT_3_VALUE}
        </a>
        <a
          style={{
            fontFamily: typography.text.fontFamily,
            color: colorPallete.text,
            ...(removeEmptyFields(
              sectionData?.components?.[4]?.style
            ) as CSSProperties),
          }}
        >
          {sectionData.components?.[4]?.props?.value ?? COMPONENT_4_VALUE}
        </a>
      </div>
      <button
        style={{
          fontFamily: typography.text.fontFamily,
          color: "white",
          backgroundColor: colorPallete.primary,
          borderRadius: buttons.borderRadius,
          ...(removeEmptyFields(
            sectionData?.components?.[5]?.style
          ) as CSSProperties),
        }}
        className="h-14 px-4 self-center"
        type="button"
      >
        {sectionData.components?.[5]?.props?.value ?? COMPONENT_5_VALUE}
      </button>
    </div>
  </section>
);

export type { HeaderProps };

export default Header;
