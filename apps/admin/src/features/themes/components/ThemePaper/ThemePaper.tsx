import { FCWithChildren } from "ui-components/src/common/types";

import { ColorPallete } from "../../../../app/context/theme-context/types";

const ThemePaper: FCWithChildren<{
  colorPallete?: ColorPallete;
  style?: React.CSSProperties;
}> = ({ children, colorPallete }) => (
  <div
    style={{
      backgroundColor: colorPallete?.surface,
      border: `1px solid ${colorPallete?.primary ?? "transparent"}`,
    }}
    className="p-5 shadow rounded-xl"
  >
    {children}
  </div>
);

export default ThemePaper;
