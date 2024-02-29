import { useState } from "react";

import { Section } from "../../../../../app/context/theme-context/types";

const useEditButtonRadius = (
  editSection: (section: Section, index: number) => void,
  section: Section,
  componentIndex: number,
  sectionIndex: number
) => {
  const [radius, setRadius] = useState<number[]>([0]);

  const handleEditButtonRadius = (value: number) => {
    editSection(
      {
        ...section,
        components: section.components.map((comp, index) => {
          if (index === componentIndex) {
            return {
              ...comp,
              style: {
                ...comp.style,
                borderRadius: `${value}px`,
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
    radius,
    setRadius,
    handleEditButtonRadius,
  };
};

export default useEditButtonRadius;
