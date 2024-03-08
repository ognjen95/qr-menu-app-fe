import { useSearchParams } from "next/navigation";
import { FC } from "react";
import { useModal } from "ui-components";

import EditSectionWrapper from "./EditSectionWrapper";
import { SectionPage } from "../../../app/context/theme-context/enums";
import {
  Section,
  DefaultThemeType,
} from "../../../app/context/theme-context/types";
import { ALL_SECTIONS } from "../sections/constants";
import { SectionConfig } from "../types";

const useRenderSections = (theme: DefaultThemeType) => {
  const addSectionModal = useModal<{ section: Section; index: number }>();
  const edtSectionModal = useModal<{ index: number; section: Section }>();
  const deleteSectionModal = useModal<{ index: number }>();

  const { get } = useSearchParams();

  const page = (get("page") as SectionPage) || SectionPage.HOME;

  const sectionList: [SectionConfig["component"], Section, number][] = [];

  theme.sections.forEach((sectionData, index) => {
    const isHomePage = !sectionData.page && page === SectionPage.HOME;
    const pageExists = sectionData.page === page || isHomePage;

    const sectionComponent = ALL_SECTIONS.find(
      (section) => section.config?.title === sectionData.title
    )?.component;

    if (!sectionComponent || !pageExists) return;

    sectionList.push([sectionComponent as FC, sectionData, index]);
  });

  const sections = sectionList.map(([SectionComponent, sectionData, index]) => (
    <EditSectionWrapper
      key={sectionData.id + sectionData.title + index.toString()}
      editModal={() => edtSectionModal.open({ index, section: sectionData })}
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
      <SectionComponent
        sectionData={sectionData}
        colorPallete={theme.colorPallete}
        typography={theme.typography}
        buttons={theme.buttons}
        animationType={theme.animation.type}
      />
    </EditSectionWrapper>
  ));

  return {
    sections,
    addSectionModal,
    edtSectionModal,
    deleteSectionModal,
  };
};

export default useRenderSections;
