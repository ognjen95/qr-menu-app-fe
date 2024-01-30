import React from "react";
import { Paper, TextVariant, Loader, Text } from "ui-components";

import MenuTable from "./menus-table/MenussTable";
import useGetMenus from "./useGetMenus";
import CreateMenuFeature from "../create-menu/CreateMenu";

const MenusOverview = () => {
  const { menus, loading } = useGetMenus();

  return (
    <Paper fullHeight fullWidth noPadding>
      <div className="flex flex-col w-full pt-3">
        <div className="flex items-center justify-between w-full px-5 pb-5">
          <Text variant={TextVariant.HEADING6}>Menus</Text>
          <CreateMenuFeature />
        </div>
        {loading && !menus.length && <Loader centered />}
        {!!menus.length && <MenuTable menus={menus} />}
        {!menus.length && !loading && (
          <div className="flex items-center justify-center h-full">
            <CreateMenuFeature />
          </div>
        )}
      </div>
    </Paper>
  );
};

export default MenusOverview;
