import { faBed, faCoffee, faCutlery } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CSSProperties, FC } from "react";
import {
  ColorPallete,
  Section,
  Typography,
} from "src/app/context/theme-context/types";

type OffersSectionProps = {
  sectionData: Section;
  colorPallete: ColorPallete;
  typography: Typography;
};

const OffersSectionSection: FC<OffersSectionProps> = ({
  sectionData: { components },
  colorPallete,
  typography,
}) => (
  <section className="py-[120px]">
    <div className="px-[15px] mx-auto w-[1170px]">
      <div
        className="flex justify-center"
        // data-aos="fade-up"
      >
        <div className="relative min-h-0 px-[15px] w-1/3">
          <div className="flex flex-col text-center">
            <FontAwesomeIcon
              icon={faCoffee}
              color={components?.[0]?.style?.color ?? colorPallete.primary}
              size="4x"
              className="mb-5"
            />
            <h3
              style={{
                fontFamily: typography.headers.fontFamily,
                fontWeight: typography.headers.weight,
                color: colorPallete.text,
                fontSize: "30px",
                ...(components?.[1]?.style as CSSProperties),
              }}
            >
              {components?.[1]?.props?.value ?? "Excellent coffee"}
            </h3>
            <p
              style={{
                fontFamily: typography.text.fontFamily,
                fontWeight: typography.headers.weight,
                color: colorPallete.text,
                fontSize: "18px",
                ...(components?.[2]?.style as CSSProperties),
              }}
            >
              {components?.[2]?.props?.value ??
                "We offer only the finest coffee from the finest beans"}
            </p>
          </div>
        </div>
        <div className="relative min-h-0 px-[15px] w-1/3">
          <div className="flex flex-col text-center">
            <FontAwesomeIcon
              icon={faBed}
              color={components?.[3]?.style?.color ?? colorPallete.primary}
              size="4x"
              className="mb-5"
            />
            <h3
              style={{
                fontFamily: typography.headers.fontFamily,
                fontWeight: typography.headers.weight,
                color: colorPallete.text,
                fontSize: "30px",
                ...(components?.[4]?.style as CSSProperties),
              }}
            >
              {components?.[4]?.props?.value ?? "Rest comfortably"}
            </h3>
            <p
              style={{
                fontFamily: typography.text.fontFamily,
                fontWeight: typography.text.weight,
                color: colorPallete.text,
                fontSize: "18px",
                ...(components?.[5]?.style as CSSProperties),
              }}
            >
              {components?.[5]?.props?.value ??
                "We offer guest rooms for travelers"}
            </p>
          </div>
        </div>
        <div className="relative min-h-0 px-[15px] w-1/3">
          <div className="flex flex-col text-center">
            <FontAwesomeIcon
              icon={faCutlery}
              color={components?.[6]?.style?.color ?? colorPallete.primary}
              size="4x"
              className="mb-5"
            />
            <h3
              style={{
                fontFamily: typography.headers.fontFamily,
                fontWeight: typography.headers.weight,
                color: colorPallete.text,
                fontSize: "30px",
                ...(components?.[7]?.style as CSSProperties),
              }}
            >
              {components?.[7]?.props?.value ?? "Delicious food"}
            </h3>
            <p
              style={{
                fontFamily: typography.text.fontFamily,
                fontWeight: typography.text.weight,
                color: colorPallete.text,
                fontSize: "18px",
                ...(components?.[8]?.style as CSSProperties),
              }}
            >
              {components?.[8]?.props?.value ?? "Original cuisine at will"}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default OffersSectionSection;
