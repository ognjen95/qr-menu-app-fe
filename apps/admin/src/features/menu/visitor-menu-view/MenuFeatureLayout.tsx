import React, { forwardRef } from "react";
import { useModal } from "ui-components/src/modal";

import MenuBottomDrawer from "./MenuBottomDrawer";
import MenuHeader from "./MenuHeader";
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
};

const MenuFeatureLayout = forwardRef<HTMLDivElement, MenuFeatureLayoutProps>(
  (
    { chips, selectedChip, setSelectedChip, isTopOfPage, onChipClick, menu },
    ref
  ) => {
    const modal = useModal<MenuSectionItem>();

    return (
      <div className="relative">
        <MenuHeader
          chips={chips}
          selectedChip={selectedChip}
          isTopOfPage={isTopOfPage}
          onChipClick={onChipClick}
        />
        <div className="xs:px-5">
          {menu?.menuSections.map((section) => (
            <div
              ref={selectedChip === section.name ? ref : undefined}
              key={section.id}
            >
              <MenuSection
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
          modal={modal}
          tags={modal.params?.tags}
          alergens={modal.params?.alergens}
        />
      </div>
    );
  }
);

export default MenuFeatureLayout;
