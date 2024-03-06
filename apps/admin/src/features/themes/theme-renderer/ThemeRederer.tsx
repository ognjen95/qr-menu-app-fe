"use client";

import "aos/dist/aos.css";
import React, { FC } from "react";
import { DefaultThemeType } from "src/app/context/theme-context/types";
import { DeleteModal } from "ui-components";

import EmptyState from "./EmptyState";
import useAddAndRemoveSection from "./useAddAndRemoveSection";
import useRenderSections from "./useRenderSections";
import EditComponentDrawer from "../components/edit-component-drawer/EditComponentDrawer";
import Footer1 from "../sections/footers/footer-1/Footer1";
import Navigation from "../sections/navigations/navigation-1/Navigation";
import SectionSelectDrawer from "../sections/section-select-drawer/SectionSelectDrawer";

export type ThemeRendererProps = {
  theme: DefaultThemeType;
};

const ThemeRenderer: FC<ThemeRendererProps> = ({ theme }) => {
  const { sections, addSectionModal, edtSectionModal, deleteSectionModal } =
    useRenderSections(theme);

  const { handleAddSection, handleDelete } = useAddAndRemoveSection(
    addSectionModal,
    deleteSectionModal
  );

  const isEmptyThemePage = sections.every((sec) => !sec);

  return (
    <>
      <div
        className="break-words w-full flex flex-col justify-between h-full"
        style={{
          backgroundColor: theme?.colorPallete.background,
        }}
      >
        <Navigation
          activePages={theme.activePages ?? []}
          navigation={theme.navigation}
          logo={theme?.logo?.url ?? ""}
          sectionData={
            theme.sections.find((section) => section.title === "header")!
          }
          colorPallete={theme.colorPallete}
          typography={theme.typography}
          buttons={theme.buttons}
        />
        <div>
          {sections}
          {isEmptyThemePage && (
            <EmptyState addSectionModal={addSectionModal.open} />
          )}
        </div>
        <Footer1
          activePages={theme.activePages ?? []}
          logo={theme?.logo?.url ?? ""}
          colorPallete={theme.colorPallete}
          typography={theme.typography}
        />
      </div>
      <EditComponentDrawer edtSectionModal={edtSectionModal} />
      <SectionSelectDrawer
        addSectionModal={addSectionModal}
        handleAddSection={handleAddSection}
      />
      <DeleteModal
        title="Delete Section"
        description="Are you sure you want to delete this section?"
        isOpen={deleteSectionModal.isOpen}
        close={deleteSectionModal.close}
        onConfirm={handleDelete}
      />
    </>
  );
};

export default ThemeRenderer;