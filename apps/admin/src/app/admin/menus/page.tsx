"use client";

import {
  useModal,
  ButtonTabs,
  IconType,
} from "ui-components";

import RestaurantsOverviewFeature from "~features/restaurants/restaurants-overview/RestaurantsOverview";

import TopNavbar from "../../../components/top-navbar/TopNavbar";
import MenusOverviewFeature from "../../../features/menu/menus-overview/MenusOverview";

const MenusPage = () => {
  return (
    <div className="h-screen flex flex-col">
      <TopNavbar title="Menus & Restaurants" />
      <div className="p-5 flex flex-col h-full">
        <ButtonTabs
          tabs={[
            {
              id: 1,
              text: "Menus",
              icon: IconType.FILE_DOCUMENT,
              feature: (
              <MenusOverviewFeature />
              ),
            },
            {
              id: 2,
              text: "Restaurants",
              icon: IconType.CUSTOMERS,
              feature: <RestaurantsOverviewFeature />,
            },
          ]}
          defaultTab="Menus"
        />
      </div>
    </div>
  );
};

export default MenusPage;
