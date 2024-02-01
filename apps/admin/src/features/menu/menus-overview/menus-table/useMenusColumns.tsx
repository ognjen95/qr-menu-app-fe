import { createColumnHelper } from "@tanstack/react-table";
import { format } from "date-fns";
import Link from "next/link";
import { Icon, IconType, Switch, Text } from "ui-components";
import { colors } from "ui-components/src/config/tailwind-config";

import { DEFAULT_DATE_FORMAT } from "../../../../common/constants";
import { MenuTableModel } from "../types";

const useMenusColumns = (
  onDelete: (id: string) => void,
  onUpdate: (id: string) => void
) => {
  const columnHelper = createColumnHelper<MenuTableModel>();

  const columns = [
    columnHelper.accessor("name", {
      cell: (cell) => (
        <Link
          className="hover:underline"
          href={`/admin/menus/${cell.row.original.id}`}
        >
          {cell.getValue()}
        </Link>
      ),
      header: () => "Name",
      size: 20,
    }),
    columnHelper.accessor("description", {
      cell: (cell) => <Text>{cell.getValue()}</Text>,
      header: () => "Description",
      size: 30,
    }),
    columnHelper.accessor("isVisible", {
      cell: (cell) => <Switch checked={cell.getValue()} />,
      header: () => "Visible",
      size: 15,
    }),
    columnHelper.accessor("createdAt", {
      cell: (cell) =>
        cell.getValue() && (
          <Text>{format(cell.getValue()!, DEFAULT_DATE_FORMAT)}</Text>
        ),
      header: () => "Created at",
      size: 15,
    }),
    columnHelper.accessor("id", {
      cell: (cell) => (
        <div className="flex space-x-2">
          <Icon
            type={IconType.TRASH_FULL}
            stroke={colors.red[500]}
            onClick={() => onDelete(cell.row.original.id)}
          />
          <Icon
            type={IconType.EDIT_PENCIL_1}
            onClick={() => onUpdate(cell.row.original.id)}
          />
        </div>
      ),
      header: undefined,
      size: 10,
    }),
  ];

  return columns;
};

export default useMenusColumns;
