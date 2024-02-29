import { useState } from "react";

import { Section } from "../../../../../app/context/theme-context/types";
import { ColorPallete } from "../../../../../graphql-api";

export const TRANSPARENT_BORDER = "solid 2px transparent";

const useEditButtonColors = (
  editSection: (section: Section, index: number) => void,
  section: Section,
  componentIndex: number,
  sectionIndex: number,
  colorPallete: ColorPallete
) => {
  const currentComponentState = section.components[componentIndex];
  const initialBgColor =
    currentComponentState?.style?.backgroundColor || colorPallete?.primary;
  const initialTextColor =
    currentComponentState?.style?.color || colorPallete?.text;
  const initialBorder = currentComponentState?.style?.border || "tranparent";

  const [backgroundColor, setBackgroundColor] = useState(initialBgColor);
  const [color, setColor] = useState(initialTextColor);
  const [borderColor, setBorderColor] = useState(initialBorder.toString());

  const isTransparentBorder = borderColor === "transparent";

  const isTransparentBackground = backgroundColor === "transparent";

  const handleEditBackgroundColor = (buttonBackgroundColor: string) => {
    editSection(
      {
        ...section,
        components: section.components.map((comp, index) => {
          if (index === componentIndex) {
            return {
              ...comp,
              style: {
                ...comp.style,
                backgroundColor: buttonBackgroundColor,
              },
            };
          }

          return comp;
        }),
      },
      sectionIndex
    );

    setBackgroundColor(buttonBackgroundColor);
  };

  const handleBackgroundChange = (checked: boolean) => {
    if (checked) {
      handleEditBackgroundColor("transparent");
    } else {
      handleEditBackgroundColor(colorPallete?.primary);
    }
  };

  const handleEditColor = (buttonTextColor: string) => {
    editSection(
      {
        ...section,
        components: section.components.map((comp, index) => {
          if (index === componentIndex) {
            return {
              ...comp,
              style: {
                ...comp.style,
                color: buttonTextColor,
              },
            };
          }

          return comp;
        }),
      },
      sectionIndex
    );

    setColor(buttonTextColor);
  };

  const handleEditBorderColor = (buttonBorderColor: string) => {
    editSection(
      {
        ...section,
        components: section.components.map((comp, index) => {
          if (index === componentIndex) {
            return {
              ...comp,
              style: {
                ...comp.style,
                border: `${buttonBorderColor} 2px solid`,
              },
            };
          }

          return comp;
        }),
      },
      sectionIndex
    );

    setBorderColor(buttonBorderColor);
  };

  const handleHideBorderChange = (checked: boolean) => {
    if (checked) {
      handleEditBorderColor("transparent");
    } else {
      handleEditBorderColor(colorPallete?.primary);
    }
  };

  return {
    backgroundColor,
    color,
    borderColor,
    handleEditBackgroundColor,
    handleEditColor,
    handleEditBorderColor,
    isTransparentBorder,
    handleHideBorderChange,
    isTransparentBackground,
    handleBackgroundChange,
  };
};

export default useEditButtonColors;
