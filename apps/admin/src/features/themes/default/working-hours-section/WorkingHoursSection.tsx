import { FC } from "react";
import {
  ColorPallete,
  Section,
  Typography,
} from "src/app/context/theme-context/types";
import { removeEmptyFields } from "src/common/helpers";

type WorkingHoursSectionProps = {
  sectionData: Section;
  colorPallete: ColorPallete;
  typography: Typography;
};

const WorkingHoursSection: FC<WorkingHoursSectionProps> = ({
  sectionData: { components },
  colorPallete,
  typography,
}) => (
  <section className="relative py-[120px] bg-[url('https://static.cdn-upm.com/static/themes/ef8ba596-4579-11ed-8bca-525400080621/assets-4/generic1_DfIsHdhY.jpg?v=8')] bg-fixed">
    <div className="absolute top-0 left-0 bg-[#545454] opacity-75 w-full h-full z-0" />
    <div className="relative flex flex-col space-y-10 z-20 bg-transparent text-center">
      <h1
        style={{
          fontFamily: typography.headers.fontFamily,
          fontWeight: typography.headers.weight,
          color: colorPallete.tertiary,
          fontSize: "72px",
          ...removeEmptyFields(components?.[0]?.style),
        }}
      >
        {components?.[0]?.props?.value ?? "Visit us!"}
      </h1>
      <p
        style={{
          fontFamily: typography.text.fontFamily,
          fontWeight: typography.text.weight,
          color: colorPallete.tertiary,
          fontSize: "17px",
          ...removeEmptyFields(components?.[1]?.style),
        }}
      >
        {components?.[1]?.props?.value ??
          "We are waiting you from Monday to Sunday! You can also place your order online"}
      </p>
      <a
        href="/menu"
        className="text-white"
        style={{
          color: colorPallete.tertiary,
          fontFamily: typography.text.fontFamily,
          fontWeight: typography.text.weight,
        }}
      >
        Order now
      </a>
    </div>
  </section>
);

export default WorkingHoursSection;
