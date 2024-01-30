import { FC } from "react";

import MenuFeatureLayout from "./MenuFeatureLayout";
import usePublicMenu from "./usePublicMenu";

const MenuFeature: FC = () => {
  const {
    menu,
    chips,
    selectedChip,
    setSelectedChip,
    isTopOfPage,
    onChipClick,
    ref,
  } = usePublicMenu();

  return (
    <MenuFeatureLayout
      menu={menu}
      onChipClick={onChipClick}
      chips={chips}
      selectedChip={selectedChip}
      setSelectedChip={(chip) => setSelectedChip(`${chip}#SCROLLED_TO`)}
      isTopOfPage={isTopOfPage}
      ref={ref}
    />
  );
};

export default MenuFeature;
