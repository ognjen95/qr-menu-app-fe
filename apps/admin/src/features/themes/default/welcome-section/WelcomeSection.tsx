import Image from "next/image";
import { FC } from "react";
import {
  ColorPallete,
  Section,
  Typography,
} from "src/app/context/theme-context/types";
import { removeEmptyFields } from "src/common/helpers";

type WelcomeSectionProps = {
  sectionData: Section;
  colorPallete: ColorPallete;
  typography: Typography;
};

const WelcomeSection: FC<WelcomeSectionProps> = ({
  sectionData,
  colorPallete,
  typography,
}) => (
  <section className="py-16">
    <div className="w-[1170px] px-[15px] mx-auto">
      <div className="flex h-full -mx-[15px] items-center">
        <div
          className="w-1/2 float-left duration-[400ms] relative min-h-0 px-[15px]"
          // data-aos="fade-up"
        >
          <div className="relative py-2 px-1 pb-[30px]">
            <h1
              style={{
                fontFamily: typography.headers.fontFamily,
                fontWeight: typography.headers.weight,
                color: colorPallete.primary,
                fontSize: "60px",
                lineHeight: "70px",
                ...removeEmptyFields(sectionData.components?.[0]?.style),
              }}
            >
              {sectionData.components?.[0]?.props?.value ??
                "Welcome to our restaurant"}
            </h1>
          </div>
          <div className="relative py-2 px-1">
            <h4
              style={{
                fontFamily: typography.headers.fontFamily,
                fontWeight: typography.headers.weight,
                color: colorPallete.text,
                fontSize: "22px",
                ...removeEmptyFields(sectionData.components?.[1]?.style),
              }}
            >
              {sectionData.components?.[1]?.props?.value ??
                "New restaurant in New York,"}
            </h4>
            <h4
              style={{
                fontFamily: typography.headers.fontFamily,
                fontWeight: typography.headers.weight,
                color: colorPallete.text,
                fontSize: "22px",
                ...removeEmptyFields(sectionData.components?.[2]?.style),
              }}
            >
              {sectionData.components?.[2]?.props?.value ?? "USA."}
            </h4>
          </div>
        </div>
        <div
          className="w-1/2 float-left relative min-h-0 px-[15px] flex justify-center"
          // data-aos="fade-up"
        >
          <Image
            className="rounded-ss-[80px] rounded-ee-[80px]"
            src={
              sectionData.components?.[3]?.props?.src ??
              "https://static.cdn-upm.com/static/themes/ef8ba596-4579-11ed-8bca-525400080621/assets-4/generic8.jpg?v=8"
            }
            width={+(sectionData.components?.[3]?.style?.width ?? 400)}
            alt={sectionData.components?.[3]?.props?.alt ?? ""}
            height={+(sectionData.components?.[3]?.style?.height ?? 400)}
          />
        </div>
      </div>
    </div>
  </section>
);

export default WelcomeSection;
