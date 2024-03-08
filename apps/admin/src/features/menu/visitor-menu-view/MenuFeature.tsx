import { FC } from "react";

import MenuFeatureLayout from "./MenuFeatureLayout";
import usePublicMenu from "./usePublicMenu";
import ThemeContextProvider from "../../../app/context/theme-context/ThemeContext";

export type MenuFeatureProps = {
  hideHeader?: boolean;
  id?: string;
};

const MenuFeature: FC<MenuFeatureProps> = ({ hideHeader, id }) => {
  const {
    menu,
    chips,
    selectedChip,
    setSelectedChip,
    isTopOfPage,
    onChipClick,
    ref,
  } = usePublicMenu({ hideHeader, id });

  return (
    <MenuFeatureLayout
      menu={menu}
      onChipClick={onChipClick}
      chips={chips}
      selectedChip={selectedChip}
      setSelectedChip={(chip) => setSelectedChip(`${chip}#SCROLLED_TO`)}
      isTopOfPage={isTopOfPage}
      ref={ref}
      hideHeader={hideHeader}
    />
  );
};

export default MenuFeature;
