"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import React, { FC, useEffect } from "react";
import { toast } from "react-toastify";
import { DefaultThemeType, Section } from "src/app/context/theme-context/types";
import { DeleteModal } from "ui-components";

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

    addSection(section!, index!);
    toast.success("Section added successfully");
    addSectionModal.close();
  };

  const handleDelete = () => {
    const index = deleteSectionModal.params?.index;
    deleteSection(index!);
    toast.success("Section deleted successfully");
    deleteSectionModal.close();
  };

  return (
    <div
      className="break-words w-full"
      style={{
        backgroundColor: theme?.background.color,
      }}
    >
      <Navigation
        navigation={theme.navigation}
        logo={theme?.logo?.url ?? ""}
        sectionData={
          theme.sections.find((section) => section.title === "header")!
        }
        colorPallete={theme.colorPallete}
        typography={theme.typography}
        buttons={theme.buttons}
      />
      {theme?.sections?.map((section, index) =>
        renderThemeSection(
          section,
          theme.colorPallete,
          theme.typography,
          theme.buttons,
          theme.animation.type,
          index
        )
      )}
      <Footer1
        logo={theme?.logo?.url ?? ""}
        colorPallete={theme.colorPallete}
        typography={theme.typography}
      />
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
    </div>
  );
};

export default DefaultTheme;
