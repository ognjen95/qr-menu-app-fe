import React from "react";

import ButtonHover from "./ButtonHover";
import ButtonShapes from "./ButtonShapes";
import ButtonSizes from "./ButtonSizes";
import ButtonTypes from "./ButtonType";
import { useThemeContext } from "../../../../../app/context/theme-context/ThemeContext";

const ButtonsSubsection = () => {
  const { theme, setButtons } = useThemeContext();

  return (
    <div className="flex flex-col space-y-5">
      <ButtonSizes setButtons={setButtons} theme={theme.buttons} />
      <ButtonShapes setButtons={setButtons} theme={theme.buttons} />
      <ButtonHover setButtons={setButtons} theme={theme.buttons} />
      <ButtonTypes setButtons={setButtons} theme={theme.buttons} />
    </div>
  );
};

export default ButtonsSubsection;
