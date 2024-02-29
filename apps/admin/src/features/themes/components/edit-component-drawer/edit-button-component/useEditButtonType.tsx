import { ButtonType } from "../../../../../app/context/theme-context/enums";
import {
  ColorPallete,
  Section,
} from "../../../../../app/context/theme-context/types";

const useEditButtonType = (
  colorPallete: ColorPallete,
  editSection: (section: Section, index: number) => void,
  section: Section,
  componentIndex: number,
  sectionIndex: number
) => {
  const handleEditButtonType = (type: ButtonType) => {
    const currentComponentState = section.components[componentIndex];

    const outlinedButtonBackgroundColor =
      currentComponentState.style?.backgroundColor || colorPallete?.primary;

    const outlinedBorder = `2px solid ${colorPallete?.primary}`;

    const outlinedTextColor =
      currentComponentState?.style?.color || colorPallete?.primary;

    editSection(
      {
        ...section,
        components: section.components.map((comp, index) => {
          if (index === componentIndex) {
            return {
              ...comp,
              style: {
                ...comp.style,
                backgroundColor:
                  type === ButtonType.OUTLINED
                    ? "transparent"
                    : outlinedButtonBackgroundColor,
                border:
                  type === ButtonType.OUTLINED
                    ? outlinedBorder
                    : "2px solid transparent",
                color:
                  type === ButtonType.OUTLINED
                    ? outlinedTextColor
                    : currentComponentState?.style?.color || colorPallete?.text,
              },
            };
          }

          return comp;
        }),
      },
      sectionIndex
    );
  };

  return {
    handleEditButtonType,
  };
};

export default useEditButtonType;
