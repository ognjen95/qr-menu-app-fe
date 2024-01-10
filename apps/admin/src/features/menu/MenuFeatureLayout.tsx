import React, { forwardRef } from "react";
import { useModal } from "ui-components/src/modal";

import { menuDummyData } from "./menu-section/constants";
import MenuSection from "./menu-section/MenuSection";
import { MenuItem } from "./menu-section/types";
import MenuBottomDrawer from "./MenuBottomDrawer";
import MenuHeader from "./MenuHeader";

export type MenuFeatureLayoutProps = {
  chips: string[];
  selectedChip: string;
  setSelectedChip: (chip: string) => void;
  isTopOfPage: boolean;
  onChipClick: (chip: string) => void;
};

const MenuFeatureLayout = forwardRef<HTMLDivElement, MenuFeatureLayoutProps>(
  ({ chips, selectedChip, setSelectedChip, isTopOfPage, onChipClick }, ref) => {
    const modal = useModal<MenuItem>();

    return (
      <div className="relative">
        <MenuHeader
          chips={chips}
          selectedChip={selectedChip}
          isTopOfPage={isTopOfPage}
          onChipClick={onChipClick}
        />
        <div className="px-5">
          {menuDummyData.map((section) => (
            <div
              ref={selectedChip === section.section ? ref : undefined}
              key={section.id}
            >
              <MenuSection
                sectionId={section.id}
                section={section.section}
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
          tags={["Vegan", "Vegetarian", "Gluten free", "Lactose free"]}
          alergens={["Milk", "Nutts", "Eggs"]}
        />
      </div>
    );
  }
);

export default MenuFeatureLayout;
