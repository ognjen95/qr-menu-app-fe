import React from "react";
import { Button, FCWithChildren, IconType } from "ui-components";
import { ButtonSize, ButtonColor } from "ui-components/src/button/enums";
import { colors } from "ui-components/src/config/tailwind-config";

import TopNavbar from "../../../../components/top-navbar/TopNavbar";

export type MenuOverviewLayoutProps = {
  menuName: string;
};

const MenuOverviewLayout: FCWithChildren<MenuOverviewLayoutProps> = ({
  children,
  menuName,
}) => (
  <div className="flex flex-col">
    <TopNavbar
      backToUrl="/admin/menus"
      backToTitle="Menus & Restaurants"
      title={menuName}
      rightComponent={
        <div className="flex items-center space-x-2">
          <Button
            size={ButtonSize.SMALL}
            color={ButtonColor.OUTLINED}
            leftIcon={{
              type: IconType.DASHBOARD,
              fill: "none",
              stroke: colors.grey[900],
            }}
          >
            Preview QR Code
          </Button>
          <Button
            size={ButtonSize.SMALL}
            color={ButtonColor.OUTLINED}
            leftIcon={{
              type: IconType.HIDE_EYE,
              fill: "none",
              stroke: colors.primary[500],
            }}
          >
            Preview Menu
          </Button>
        </div>
      }
    />
    {children}
  </div>
);

export default MenuOverviewLayout;
