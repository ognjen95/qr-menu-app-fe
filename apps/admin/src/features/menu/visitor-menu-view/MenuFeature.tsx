import { FC } from "react";
import { Loader } from "ui-components";

import MenuFeatureLayout from "./MenuFeatureLayout";
import usePublicMenu from "./usePublicMenu";
import OrderContextProvider from "../../../app/context/cart-context/CartContext";

export type MenuFeatureProps = {
  hideHeader?: boolean;
  id?: string;
  isBuilder?: boolean;
};

const MenuFeature: FC<MenuFeatureProps> = ({ hideHeader, id, isBuilder }) => {
  const {
    menu,
    chips,
    selectedChip,
    setSelectedChip,
    isTopOfPage,
    onChipClick,
    ref,
    loading,
  } = usePublicMenu({ hideHeader, id });

  if (loading) return <Loader centered />;

  return (
    <OrderContextProvider>
      <MenuFeatureLayout
        isBuilder={isBuilder}
        menu={menu}
        onChipClick={onChipClick}
        chips={chips}
        selectedChip={selectedChip}
        setSelectedChip={(chip) => setSelectedChip(`${chip}#SCROLLED_TO`)}
        isTopOfPage={isTopOfPage}
        ref={ref}
        hideHeader={hideHeader}
      />
    </OrderContextProvider>
  );
};

export default MenuFeature;
