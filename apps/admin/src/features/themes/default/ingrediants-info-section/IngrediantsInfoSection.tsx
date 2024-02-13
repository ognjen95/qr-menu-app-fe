import Image from "next/image";
import { CSSProperties, FC } from "react";
import {
  ColorPallete,
  Section,
  Typography,
} from "src/app/context/theme-context/types";
import { removeEmptyFields } from "src/common/helpers";

type IngredientsSectionProps = {
  sectionData: Section;
  colorPallete: ColorPallete;
  typography: Typography;
};

const IngredientsSectionSection: FC<IngredientsSectionProps> = ({
  sectionData: { components },
  colorPallete,
  typography,
}) => (
  <section className="py-[120px] bg-gray-100">
    <div className="w-[1170px] px-[15px] mx-auto">
      <div className="flex h-full -mx-[15px] items-center">
        <div
          className="w-1/2 float-left duration-[400ms] relative min-h-0 px-[15px]"
          // data-aos="fade-up"
        >
          <h4
            className="pb-[40px]"
            style={{
              fontFamily: typography.headers.fontFamily,
              fontWeight: typography.headers.weight,
              color: colorPallete.primary,
              fontSize: "28px",
              ...(removeEmptyFields(components?.[0]?.style) as CSSProperties),
            }}
          >
            {components?.[0]?.props?.value ?? "Original Ingredients"}
          </h4>
          <h2
            className="pb-[30px]"
            style={{
              fontFamily: typography.headers.fontFamily,
              fontWeight: typography.headers.weight,
              color: colorPallete.text,
              fontSize: "50px",
              ...(components?.[1]?.style as CSSProperties),
            }}
          >
            {components?.[1]?.props?.value ??
              "Only the best seasonal ingredients"}
          </h2>
          <p
            style={{
              fontFamily: typography.text.fontFamily,
              fontWeight: typography.text.weight,
              color: colorPallete.secondary,
              fontSize: "16px",
              ...removeEmptyFields(components?.[2]?.style),
            }}
          >
            {components?.[2]?.props?.value ??
              "You are only one step away from a real feast for the eyes and palate. We offer delicious dishes based on the best recipes from around the world. These are unique flavor compositions that will satisfy everyone."}
          </p>
        </div>
        <div
          className="w-1/2 float-right relative min-h-0 px-[15px] flex justify-center"
          // data-aos="fade-up"
        >
          <Image
            className="rounded-ss-[80px] rounded-ee-[80px]"
            src={
              components?.[4]?.props?.src ??
              "https://static.cdn-upm.com/static/themes/ef8ba596-4579-11ed-8bca-525400080621/assets-4/cook.jpg?v=8"
            }
            width={+(components?.[3]?.style?.width ?? 400)}
            alt={components?.[4]?.props?.alt ?? ""}
            height={+(components?.[3]?.style?.height ?? 400)}
          />
        </div>
      </div>
    </div>
  </section>
);

export default IngredientsSectionSection;
