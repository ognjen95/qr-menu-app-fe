"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import React, { FC, useEffect, useMemo } from "react";
import { toast } from "react-toastify";
import { DefaultThemeType, Section } from "src/app/context/theme-context/types";
import { Button, DeleteModal, EmptyList } from "ui-components";

import useRenderSections from "./useRenderSections";
import { useThemeContext } from "../../../app/context/theme-context/ThemeContext";
import EditComponentDrawer from "../components/edit-component-drawer/EditComponentDrawer";
import Footer1 from "../sections/footers/footer-1/Footer1";
import Navigation from "../sections/navigations/navigation-1/Navigation";
import SectionSelectDrawer from "../sections/section-select-drawer/SectionSelectDrawer";

export type DefaultThemeProps = {
  theme: DefaultThemeType;
};

const DefaultTheme: FC<DefaultThemeProps> = ({ theme }) => {
  useEffect(() => {
    AOS.init({ once: true });
    AOS.refresh();
  }, []);

  const {
    renderThemeSection,
    addSectionModal,
    edtSectionModal,
    deleteSectionModal,
  } = useRenderSections();

  const { addSection, deleteSection } = useThemeContext();

  const handleAddSection = (section: Section) => {
    const index = addSectionModal.params?.index;
    const isIndexUndefined = Number.isNaN(index!);

    if (isIndexUndefined) {
      addSection(section, theme.sections.length);
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

  const sections = useMemo(
    () =>
      theme?.sections?.map((section, index) =>
        renderThemeSection(
          section,
          theme.colorPallete,
          theme.typography,
          theme.buttons,
          theme.animation.type,
          index
        )
      ),
    [theme, renderThemeSection]
  );

  return (
    <>
      <div
        className="break-words w-full"
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
          {sections.every((sec) => !sec) && (
            <div className="flex flex-col items-center justify-center p-10 space-y-5">
              <EmptyList
                title="Page is empty"
                description="Click on button bellow to add first section"
                url="/images/no-content.png"
              />
              <Button
                onClick={() => {
                  addSectionModal.open();
                }}
              >
                Add Section
              </Button>
            </div>
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

export default DefaultTheme;
