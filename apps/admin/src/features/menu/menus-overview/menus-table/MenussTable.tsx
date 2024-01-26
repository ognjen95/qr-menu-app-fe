import { FC } from "react";

import SimpleTable from "~components/tables/SimpleTable";

import { MenuTableModel } from "../types";
import useMenusColumns from "./useMenusColumns";

export type MenuTableProps = {
  menus: MenuTableModel[];
};

const MenuTable: FC<MenuTableProps> = ({ menus }) => {
  const columns = useMenusColumns();

  return (
    <div className="flex flex-col min-h-0">
      <div className="overflow-y-auto flex flex-col">
        <SimpleTable
          data={menus}
          columns={columns}
          propertyOnRowClick="id"
        />
      </div>
    </div>
  );
};

export default MenuTable;
