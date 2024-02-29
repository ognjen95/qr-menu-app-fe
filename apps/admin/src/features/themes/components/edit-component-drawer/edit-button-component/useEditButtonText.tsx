import { useState } from "react";

import {
  SectionComponent,
  Section,
} from "../../../../../app/context/theme-context/types";

const useEditButtonText = (
  component: SectionComponent,
  editSection: (section: Section, index: number) => void,
  section: Section,
  componentIndex: number,
  sectionIndex: number
) => {
  const [buttonText, setButtonText] = useState(component.props?.value);

  const handleEditTextValue = () => {
    editSection(
      {
        ...section,
        components: section.components.map((comp, index) => {
          if (index === componentIndex) {
            return {
              ...comp,
              props: {
                value: buttonText,
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
    buttonText,
    setButtonText,
    handleEditTextValue,
  };
};

export default useEditButtonText;
