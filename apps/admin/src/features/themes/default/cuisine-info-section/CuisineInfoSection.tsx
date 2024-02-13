import Image from "next/image";
import { FC } from "react";
import {
  ButtonsStyle,
  ColorPallete,
  Section,
  Typography,
} from "src/app/context/theme-context/types";
import { removeEmptyFields } from "src/common/helpers";

type CuisineSectionProps = {
  sectionData: Section;
  colorPallete: ColorPallete;
  typography: Typography;
  buttons: ButtonsStyle;
};

const CuisineSectionSection: FC<CuisineSectionProps> = ({
  sectionData,
  colorPallete,
  typography,
  buttons,
}) => (
  <section className="py-[120px] bg-gray-100">
    <div className="w-[1170px] px-[15px] mx-auto">
      <div className="flex h-full -mx-[15px] items-center">
        <div
          className="w-1/2 float-left relative min-h-0 px-[15px]"
          // data-aos="fade-up"
        >
          <Image
            className="rounded-ss-[80px] rounded-ee-[80px]"
            src={
              sectionData.components?.[0]?.props?.src ??
              "https://static.cdn-upm.com/static/themes/ef8ba596-4579-11ed-8bca-525400080621/assets-4/generic2.jpg?v=8"
            }
            width={parseInt(
              sectionData.components?.[0]?.style?.width?.toString() ?? "400",
              10
            )}
            alt={sectionData.components?.[0]?.props?.alt ?? ""}
            height={parseInt(
              sectionData.components?.[0]?.style?.height?.toString() ?? "400",
              10
            )}
          />
        </div>
        <div
          className="w-1/2 float-left relative min-h-0 px-[15px]"
          // data-aos="fade-up"
        >
          <h4
            className="pb-[40px]"
            style={{
              fontFamily: typography.headers.fontFamily,
              fontWeight: typography.headers.weight,
              color: colorPallete.primary,
              fontSize: "30px",
              ...removeEmptyFields(sectionData?.components?.[1]?.style),
            }}
          >
            {sectionData.components?.[1]?.props?.value ??
              "Taste the world's cuisine"}
          </h4>
          <h2
            className=" pb-[30px]"
            style={{
              fontFamily: typography.headers.fontFamily,
              fontWeight: typography.headers.weight,
              color: colorPallete.text,
              fontSize: "48px",
              ...removeEmptyFields(sectionData?.components?.[2]?.style),
            }}
          >
            {sectionData.components?.[2]?.props?.value ??
              "It will delight you!"}
          </h2>
          <p
            style={{
              fontFamily: typography.text.fontFamily,
              fontWeight: typography.text.weight,
              color: colorPallete.secondary,
              fontSize: "16px",
              ...removeEmptyFields(sectionData?.components?.[3]?.style),
            }}
          >
            {sectionData.components?.[3]?.props?.value ??
              "We are not afraid to experiment. Our Chef combines carefully selected ingredients and serves them on your plate in an out-of-the-ordinary form."}
          </p>
          <button
            style={{
              fontFamily: typography.text.fontFamily,
              color: "white",
              backgroundColor: colorPallete.primary,
              borderRadius: buttons.borderRadius,
              ...removeEmptyFields(sectionData?.components?.[5]?.style),
            }}
            className="h-14 px-4 self-center mt-10"
            type="button"
          >
            {sectionData.components?.[5]?.props?.value ?? "Order now"}
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default CuisineSectionSection;
