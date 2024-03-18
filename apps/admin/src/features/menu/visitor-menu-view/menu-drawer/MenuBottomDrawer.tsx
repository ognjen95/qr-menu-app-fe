import { FC, useEffect, useState } from "react";

import MenuDrawerContent from "./MenuDrawerContent";
import OrderButton from "./OrderButton";
import BottomDrawer from "../../../../components/drawers/BottomDrawer";
import RightDrawer from "../../../../components/drawers/RightDrawer";
import useBreakpoints from "../../../../hooks/use-breakpoints";
import { MenuBottomDrawerProps } from "../types";

const MenuBottomDrawer: FC<MenuBottomDrawerProps> = ({
  modal,
  alergens = [],
  tags = [],
  colorPallete,
}) => {
  const isSmallScreen = useBreakpoints("sm");
  const [selectedVariant, setSelectedVariant] = useState("");

  useEffect(() => () => setSelectedVariant(""), []);

  if (!isSmallScreen)
    return (
      <RightDrawer
        backgroundColor={colorPallete?.surface}
        isOpen={modal.isOpen}
        onClose={modal.close}
        actions={
          <OrderButton
            selectedVariant={selectedVariant}
            selectedItem={modal}
            colorPallete={colorPallete!}
          />
        }
      >
        <MenuDrawerContent
          colorPallete={colorPallete}
          alergens={alergens}
          tags={tags}
          modal={modal}
          onVariantChange={(variant) => {
            setSelectedVariant(variant);
          }}
        />
      </RightDrawer>
    );

  return (
    <BottomDrawer
      hideHandle
      backgroundColor={colorPallete?.surface}
      isOpen={modal.isOpen}
      onClose={modal.close}
      actions={
        <OrderButton
          selectedVariant={selectedVariant}
          selectedItem={modal}
          colorPallete={colorPallete!}
        />
      }
    >
      <MenuDrawerContent
        colorPallete={colorPallete}
        alergens={alergens}
        tags={tags}
        modal={modal}
        onVariantChange={(variant) => {
          setSelectedVariant(variant);
        }}
      />
    </BottomDrawer>
  );
};

export default MenuBottomDrawer;
