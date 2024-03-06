import { toast } from "react-toastify";
import { UseModalReturn } from "ui-components/src/modal/useModal";

import { useThemeContext } from "../../../app/context/theme-context/ThemeContext";
import { Section } from "../../../app/context/theme-context/types";

const useAddAndRemoveSection = (
  addSectionModal: UseModalReturn<{
    section: Section;
    index: number;
  }>,
  deleteSectionModal: UseModalReturn<{ index: number }>
) => {
  const { theme, addSection, deleteSection } = useThemeContext();

  const handleAddSection = (section: Section) => {
    const index = addSectionModal.params?.index;
    const isIndexUndefined = Number.isNaN(index!);

    if (isIndexUndefined) {
      addSection(section, theme!.sections.length);
    } else {
      addSection(section!, index!);
    }

    toast.success("Section added successfully");
    addSectionModal.close();
  };

  const handleDelete = () => {
    const index = deleteSectionModal.params?.index;

    deleteSection(index!);
    toast.success("Section deleted successfully");
    deleteSectionModal.close();
  };

  return {
    handleAddSection,
    handleDelete,
  };
};

export default useAddAndRemoveSection;
