import { Ref, useEffect, useRef, useState } from "react";

import { TypographySize } from "../../../../../app/context/theme-context/enums";
import { useThemeContext } from "../../../../../app/context/theme-context/ThemeContext";
import { SectionComponent } from "../../../../../app/context/theme-context/types";
import { ComponentType } from "../../../sections/enums";
import { TYPOGRAPHY_MAPPER } from "../../typography/constants";
import { ComponentTypeUnion } from "../../typography/types";

const useEditTypography = (
  defaultComponent: SectionComponent,
  sectionIndex: number,
  componentIndex: number
) => {
  const { theme, editSection } = useThemeContext();
  const [textValue, setTextValue] = useState("");
  const [color, setColor] = useState("");
  const ref = useRef<HTMLDivElement>() as Ref<HTMLDivElement>;
  const section = theme.sections[sectionIndex];
  const component = section.components[componentIndex];

  useEffect(() => {
    setTextValue(
      component?.props?.value || defaultComponent?.props?.value || ""
    );
  }, [component?.props?.value, defaultComponent?.props?.value]);

  useEffect(() => {
    if (component?.style?.color) {
      setColor(component.style.color);
      return;
    }

    if (component.type === ComponentType.P) {
      setColor(theme.colorPallete.text);
    } else {
      setColor(theme.colorPallete.headers);
    }
  }, [
    component.style,
    component.type,
    theme.colorPallete.headers,
    theme.colorPallete.text,
  ]);

  const handleEditTextValue = () => {
    editSection(
      {
        ...section,
        components: section.components.map((comp, index) => {
          if (componentIndex === index) {
            return {
              ...comp,
              props: {
                value: textValue,
              },
            };
          }

          return comp;
        }),
      },
      sectionIndex
    );
  };

  const handleEditFontFamily = (font: string) => {
    editSection(
      {
        ...section,
        components: section.components.map((comp, index) => {
          if (componentIndex === index) {
            return {
              ...comp,
              style: {
                ...comp.style,
                fontFamily: font,
              },
            };
          }

          return comp;
        }),
      },
      sectionIndex
    );
  };

  const handleEditFontWeight = (weight: string) => {
    editSection(
      {
        ...section,
        components: section.components.map((comp, index) => {
          if (componentIndex === index) {
            return {
              ...comp,
              style: {
                ...comp.style,
                fontWeight: weight,
              },
            };
          }

          return comp;
        }),
      },
      sectionIndex
    );
  };

  const handleFontSizeChange = (size: TypographySize) => {
    editSection(
      {
        ...section,
        components: section.components.map((comp, index) => {
          if (componentIndex === index) {
            return {
              ...comp,
              style: {
                ...comp.style,
                fontSize:
                  TYPOGRAPHY_MAPPER[size][component.type as ComponentTypeUnion],
              },
            };
          }

          return comp;
        }),
      },
      sectionIndex
    );
  };

  const handleColorChange = (selectedColor: string) => {
    editSection(
      {
        ...section,
        components: section.components.map((comp, index) => {
          if (componentIndex === index) {
            return {
              ...comp,
              style: {
                ...comp.style,
                color: selectedColor,
              },
            };
          }

          return comp;
        }),
      },
      sectionIndex
    );

    setColor(selectedColor);
  };

  return {
    textValue,
    setTextValue,
    color,
    setColor,
    ref,
    handleEditTextValue,
    handleEditFontFamily,
    handleEditFontWeight,
    handleFontSizeChange,
    handleColorChange,
    typography: theme.typography,
    component,
  };
};

export default useEditTypography;
