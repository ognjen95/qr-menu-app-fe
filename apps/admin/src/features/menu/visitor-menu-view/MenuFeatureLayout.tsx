import clsx from "clsx";
import React, { forwardRef } from "react";
import { Loader } from "ui-components";
import { useModal } from "ui-components/src/modal";

import MenuBottomDrawer from "./menu-drawer/MenuBottomDrawer";
import MenuHeader from "./MenuHeader";
import OrderRightCard from "./order-right-card/OrderRightCard";
import OrderBottomNav from "./OrderBottomNav";
import { useOrderContext } from "../../../app/context/cart-context/CartContext";
import { useThemeContext } from "../../../app/context/theme-context/ThemeContext";
import useBreakpoints from "../../../hooks/use-breakpoints";
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
  isBuilder?: boolean;
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
      isBuilder,
    },
    ref
  ) => {
    const modal = useModal<MenuSectionItem>();

    const { theme } = useThemeContext();
    const { order, total } = useOrderContext();
    const items = menu?.menuSections.flatMap((section) => section.items);

    const orderItems =
      order?.map((ord) => {
        const item = items.find((i) => i.id === ord.id);
        const variant = item?.variants.find(
          (v) => v.price.toString() === ord.price
        );

        return {
          selectedItem: item!,
          selectedVariant: variant?.name || "",
          id: ord.id,
          name: variant?.name || item?.name || "",
          price: variant?.price ? +variant.price : 0,
          qty: +ord.qty,
          total: +(variant?.price ?? 0) * +ord.qty,
        };
      }) ?? [];

    const isSmallScreen = useBreakpoints("sm");
    const isExtraSmallScreen = useBreakpoints("xs");
    const isMobile = isSmallScreen || isExtraSmallScreen;

    if (!theme) return <Loader centered />;

    return (
      <div
        className="relative"
        style={{
          backgroundColor: theme?.colorPallete?.background,
        }}
      >
        {!hideHeader && (
          <MenuHeader
            isBuilder={isBuilder}
            colorPallete={theme?.colorPallete}
            chips={chips}
            selectedChip={selectedChip}
            isTopOfPage={isTopOfPage}
            onChipClick={onChipClick}
          />
        )}
        <div
          className={clsx("relative", {
            "xs:px-5": !isBuilder || isMobile,
            "px-5 flex space-x-10": !isMobile && !isBuilder,
          })}
        >
          <div>
            {menu?.menuSections.map((section) => (
              <div
                ref={selectedChip === section.name ? ref : undefined}
                key={section.id}
              >
                <MenuSection
                  isMobile={isMobile}
                  isBuilder={isBuilder}
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
          {!isMobile && !isBuilder && (
            <OrderRightCard
              colorPallete={theme?.colorPallete}
              orders={orderItems}
              total={total}
            />
          )}
          {order?.length && isMobile && (
            <OrderBottomNav colorPallete={theme?.colorPallete} />
          )}
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
