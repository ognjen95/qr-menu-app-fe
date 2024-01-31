"use client";

import { ButtonTabs, IconType } from "ui-components";

import RestaurantsOverviewFeature from "~features/admin/company/restaurants/restaurants-overview/RestaurantsOverview";

import TopNavbar from "../../../../components/top-navbar/TopNavbar";
import MenusTable from "../menus/ menus-table/menus-table";

const CompanyOverviewFeature = () => (
  <div className="h-screen flex flex-col">
    <TopNavbar title="Menus & Restaurants" />
    <div className="p-5 flex flex-col h-full">
      <ButtonTabs
        tabs={[
          {
            id: 1,
            text: "Menus",
            icon: IconType.FILE_DOCUMENT,
            feature: <MenusTable />,
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

export default CompanyOverviewFeature;
