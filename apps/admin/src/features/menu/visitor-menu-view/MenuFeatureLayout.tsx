import React, { forwardRef, useContext } from "react";
import { Loader } from "ui-components";
import { useModal } from "ui-components/src/modal";

import MenuBottomDrawer from "./MenuBottomDrawer";
import MenuHeader from "./MenuHeader";
import { useThemeContext } from "../../../app/context/theme-context/ThemeContext";
import {
  MenuSectionItem,
  MenuSection as MenuSectionType,
} from "../menu-overview/types";
import MenuSection from "../menu-section/MenuSection";

export type MenuFeatureLayoutProps = {
  menu: {
    name: string;
    menuSections: MenuSectionType[];
  };
  chips: string[];
  selectedChip: string;
  setSelectedChip: (chip: string) => void;
  isTopOfPage: boolean;
  onChipClick: (chip: string) => void;
  hideHeader?: boolean;
};

const MenuFeatureLayout = forwardRef<HTMLDivElement, MenuFeatureLayoutProps>(
  (
    {
      chips,
      selectedChip,
      setSelectedChip,
      isTopOfPage,
      onChipClick,
      menu,
      hideHeader,
    },
    ref
  ) => {
    const modal = useModal<MenuSectionItem>();
    const { theme } = useThemeContext();

    if (!theme) return <Loader centered />;

    console.log({ colors: theme?.colorPallete });

    return (
      <div
        className="relative"
        style={{
          backgroundColor: theme?.colorPallete?.background,
        }}
      >
        {!hideHeader && (
          <MenuHeader
            colorPallete={theme?.colorPallete}
            chips={chips}
            selectedChip={selectedChip}
            isTopOfPage={isTopOfPage}
            onChipClick={onChipClick}
          />
        )}
        <div className="xs:px-5">
          {menu?.menuSections.map((section) => (
            <div
              ref={selectedChip === section.name ? ref : undefined}
              key={section.id}
            >
              <MenuSection
                colorPallete={theme?.colorPallete}
                sectionId={section.id}
                section={section.name}
                selectedChip={selectedChip}
                modal={modal}
                items={section.items}
                setSelectedChip={setSelectedChip}
              />
            </div>
          ))}
        </div>
        <MenuBottomDrawer
          colorPallete={theme?.colorPallete}
          buttons={theme?.buttons}
          modal={modal}
          tags={modal.params?.tags}
          alergens={modal.params?.alergens}
        />
      </div>
    );
  }
);

export default MenuFeatureLayout;
