import { useSearchParams } from "next/navigation";
import { useCallback, ReactElement, useState, useEffect } from "react";
import { useModal } from "ui-components";

import EditSectionWrapper from "./EditSectionWrapper";
import {
  AnimationType,
  SectionPage,
} from "../../../app/context/theme-context/enums";
import {
  Section,
  ButtonsStyle,
  Typography,
} from "../../../app/context/theme-context/types";
import { ColorPallete } from "../../../graphql-api";
import { WORKING_HOURS_SECTIONS } from "../sections/fixed-bg-image/constants";
import { HEADER_SECTIONS } from "../sections/headers/headers.config";
import { MAIN_SECTIONS } from "../sections/main/main.config";
import { TESTIMONIAL_SECTIONS } from "../sections/testimonials/testimonials.config";

const useRenderSections = () => {
  const addSectionModal = useModal<{ section: Section; index: number }>();
  const edtSectionModal = useModal<{ index: number; section: Section }>();
  const deleteSectionModal = useModal<{ index: number }>();
  const { get } = useSearchParams();

  const [activePage, setActivePage] = useState(SectionPage.HOME);

  useEffect(() => {
    setActivePage((get("page") as SectionPage) || SectionPage.HOME);
  }, [get]);

  const renderThemeSection = useCallback(
    (
      sectionData: Section,
      colorPallete: ColorPallete,
      typography: Typography,
      buttons: ButtonsStyle,
      animation: AnimationType,
      index: number
    ): ReactElement | null => {
      const renderSection = [
        ...HEADER_SECTIONS,
        ...MAIN_SECTIONS,
        ...TESTIMONIAL_SECTIONS,
        ...WORKING_HOURS_SECTIONS,
      ].find(
        (section) => section.config?.title === sectionData.title
      )?.component;

      if (!renderSection) return null;

      if (
        activePage === sectionData.page ||
        (!sectionData.page && activePage === SectionPage.HOME)
      ) {
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
            {renderSection({
              sectionData,
              colorPallete,
              typography,
              buttons,
              animationType: animation,
            })}
          </EditSectionWrapper>
        );
      }

      return null;
    },
    [addSectionModal, deleteSectionModal, edtSectionModal, activePage]
  );

  return {
    renderThemeSection,
    addSectionModal,
    edtSectionModal,
    deleteSectionModal,
  };
};

export default useRenderSections;
