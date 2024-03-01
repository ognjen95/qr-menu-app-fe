import { useCallback, ReactElement } from "react";
import { useModal } from "ui-components";

import EditSectionWrapper from "./EditSectionWrapper";
import { AnimationType } from "../../../app/context/theme-context/enums";
import {
  Section,
  ButtonsStyle,
  Typography,
} from "../../../app/context/theme-context/types";
import { ColorPallete } from "../../../graphql-api";
import { HEADER_SECTIONS } from "../sections/headers/headers.config";
import { MAIN_SECTIONS } from "../sections/main/main.config";
import { TESTIMONIAL_SECTIONS } from "../sections/testimonials/testimonials.config";
import { WORKING_HOURS_SECTIONS } from "../sections/working-hours/constants";

const useRenderSections = () => {
  const addSectionModal = useModal<{ section: Section; index: number }>();
  const edtSectionModal = useModal<{ index: number; section: Section }>();
  const deleteSectionModal = useModal<{ index: number }>();

  const renderThemeSection = useCallback(
    (
      sectionData: Section,
      colorPallete: ColorPallete,
      typography: Typography,
      buttons: ButtonsStyle,
      animation: AnimationType,
      index: number
    ): ReactElement | null => {
      const renderSectionComponent = [
        ...HEADER_SECTIONS,
        ...MAIN_SECTIONS,
        ...TESTIMONIAL_SECTIONS,
        ...WORKING_HOURS_SECTIONS,
      ].find(
        (section) => section.config.title === sectionData.title
      )?.component;

      if (!renderSectionComponent) return null;

      return (
        <EditSectionWrapper
          editModal={() =>
            edtSectionModal.open({ index, section: sectionData })
          }
          addUpModal={() =>
            addSectionModal.open({
              section: sectionData,
              index: index >= 0 ? index : 0,
            })
          }
          addDownModal={() =>
            addSectionModal.open({ section: sectionData, index: index + 1 })
          }
          deleteSectionModal={() => deleteSectionModal.open({ index })}
        >
          {renderSectionComponent({
            sectionData,
            colorPallete,
            typography,
            buttons,
            animationType: animation,
          })}
        </EditSectionWrapper>
      );
    },
    [addSectionModal, deleteSectionModal, edtSectionModal]
  );

  return {
    renderThemeSection,
    addSectionModal,
    edtSectionModal,
    deleteSectionModal,
  };
};

export default useRenderSections;
