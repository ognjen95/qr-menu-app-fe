import { FC, useState } from "react";
import { IconButton, IconType } from "ui-components";

import MenuDrawerContent from "./MenuDrawerContent";
import { MenuBottomDrawerProps } from "./types";
import { ComponentType } from "../../../app/context/theme-context/enums";
import { ColorPallete } from "../../../app/context/theme-context/types";
import BottomDrawer from "../../../components/drawers/BottomDrawer";
import RightDrawer from "../../../components/drawers/RightDrawer";
import useBreakpoints from "../../../hooks/use-breakpoints";
import ThemeButton from "../../themes/components/buttons/ThemeButton";
import ThemeTypography from "../../themes/components/typography/ThemeTypography";

const OrderButton = ({ colorPallete }: { colorPallete: ColorPallete }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="flex items-center space-x-5">
      <div className="flex p-1 space-between rounded-xl bg-grey-50/10">
        <IconButton
          iconProps={{
            onClick: () => setQuantity((prev) => (prev > 1 ? prev - 1 : prev)),
            stroke: colorPallete.primary,
            type: IconType.REMOVE_MINUS_CIRCLE,
          }}
        />
        <div className="w-14 text-center">
          <ThemeTypography
            type={ComponentType.H4}
            style={{ color: colorPallete.text }}
            props={{ value: quantity.toString() }}
          />
        </div>
        <IconButton
          iconProps={{
            onClick: () => setQuantity((prev) => prev + 1),
            stroke: colorPallete.primary,
            type: IconType.PLUS,
          }}
        />
      </div>
      <ThemeButton
        style={{
          height: "48px",
          width: "100%",
        }}
        props={{
          value: "Order",
        }}
      />
      ;
    </div>
  );
};

const MenuBottomDrawer: FC<MenuBottomDrawerProps> = ({
  modal,
  alergens = [],
  tags = [],
  colorPallete,
}) => {
  const isSmallScreen = useBreakpoints("sm");

  if (!isSmallScreen)
    return (
      <RightDrawer
        backgroundColor={colorPallete?.surface}
        isOpen={modal.isOpen}
        onClose={modal.close}
        actions={<OrderButton colorPallete={colorPallete!} />}
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
      actions={<OrderButton colorPallete={colorPallete!} />}
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
