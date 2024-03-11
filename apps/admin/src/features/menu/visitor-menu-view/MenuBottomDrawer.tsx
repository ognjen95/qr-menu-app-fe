import { FC } from "react";

import MenuDrawerContent from "./MenuDrawerContent";
import { MenuBottomDrawerProps } from "./types";
import BottomDrawer from "../../../components/drawers/BottomDrawer";
import RightDrawer from "../../../components/drawers/RightDrawer";
import useBreakpoints from "../../../hooks/use-breakpoints";
import ThemeButton from "../../themes/components/buttons/ThemeButton";

const MenuBottomDrawer: FC<MenuBottomDrawerProps> = ({
  modal,
  alergens = [],
  tags = [],
  colorPallete,
  buttons,
}) => {
  const isSmallScreen = useBreakpoints("sm");

  if (!isSmallScreen)
    return (
      <RightDrawer
        backgroundColor={colorPallete?.surface}
        isOpen={modal.isOpen}
        onClose={modal.close}
        actions={
          <ThemeButton
            style={{
              width: "100%",
            }}
            props={{
              value: "Order",
            }}
          />
        }
      >
        <MenuDrawerContent
          colorPallete={colorPallete}
          alergens={alergens}
          tags={tags}
          modal={modal}
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
        <ThemeButton
          style={{
            width: "100%",
          }}
          props={{
            value: "Order",
          }}
        />
      }
    >
      <MenuDrawerContent
        colorPallete={colorPallete}
        alergens={alergens}
        tags={tags}
        modal={modal}
      />
    </BottomDrawer>
  );
};

export default MenuBottomDrawer;
