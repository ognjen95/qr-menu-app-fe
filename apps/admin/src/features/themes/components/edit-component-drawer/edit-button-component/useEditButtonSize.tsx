import { ButtonSize } from "../../../../../app/context/theme-context/enums";
import { Section } from "../../../../../app/context/theme-context/types";

export const THEME_BUTTON_SIZE_MAPPER = {
  [ButtonSize.SMALL]: {
    height: 40,
    paddingLeft: 16,
    paddingRight: 16,
    type: ButtonSize.SMALL,
  },
  [ButtonSize.MEDIUM]: {
    height: 48,
    paddingLeft: 20,
    paddingRight: 20,
    type: ButtonSize.MEDIUM,
  },
  [ButtonSize.LARGE]: {
    height: 56,
    paddingLeft: 24,
    paddingRight: 24,
    type: ButtonSize.LARGE,
  },
};

const useEditButtonSize = (
  editSection: (section: Section, index: number) => void,
  section: Section,
  componentIndex: number,
  sectionIndex: number
) => {
  const currentComponentState = section.components[componentIndex];
  const currentButtonSize = Object.values(THEME_BUTTON_SIZE_MAPPER).find(
    (btnSize) =>
      btnSize.height.toString() ===
      currentComponentState?.style?.height?.toString().split("px")[0]
  )?.type;

  const handleEditButtonSize = (value: ButtonSize) => {
    const size = THEME_BUTTON_SIZE_MAPPER[value];

    editSection(
      {
        ...section,
        components: section.components.map((comp, index) => {
          if (index === componentIndex) {
            return {
              ...comp,
              style: {
                ...comp.style,
                height: `${size.height}px`,
                paddingLeft: `${size.paddingLeft}px`,
                paddingRight: `${size.paddingRight}px`,
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
    currentButtonSize,
    handleEditButtonSize,
  };
};

export default useEditButtonSize;
