import { FC } from "react";

import SimpleTable from "~components/tables/SimpleTable";

import useMenusColumns from "./useMenusColumns";
import { MenuTableModel } from "../types";

export type MenuTableProps = {
  menus: MenuTableModel[];
  onDelete: (id: string) => void;
  onUpdate: (id: string) => void;
};

const MenuTable: FC<MenuTableProps> = ({ menus, onDelete, onUpdate }) => {
  const columns = useMenusColumns(onDelete, onUpdate);

  return (
    <div className="flex flex-col min-h-0">
      <div className="overflow-y-auto flex flex-col">
        <SimpleTable data={menus} columns={columns} propertyOnRowClick="id" />
      </div>
    </div>
  );
};

export default MenuTable;
