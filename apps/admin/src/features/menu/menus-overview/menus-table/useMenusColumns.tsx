import { createColumnHelper } from "@tanstack/react-table";
import { format } from "date-fns";
import { Icon, IconType, IconSize, Switch, Text } from "ui-components";
import { colors } from "ui-components/src/config/tailwind-config";
import { DEFAULT_DATE_FORMAT } from "../../../../common/constants";
import { MenuTableModel } from "../types";
import Link from "next/link";

const useMenusColumns = () => {
  const columnHelper = createColumnHelper<MenuTableModel>();

  const columns = [
    columnHelper.accessor("name", {
      cell: (cell) => <Link className="hover:underline" href={`/admin/menus/${cell.row.original.id}`}>{cell.getValue()}</Link>,
      header: () => "Name",
      size: 20,
    }),
    columnHelper.accessor("description", {
      cell: (cell) => (
        <Text>{cell.getValue()}</Text>
      ),
      header: () => "Description",
      size: 30,
    }),
    columnHelper.accessor("restaurantId", {
      cell: (cell) => (
        cell.getValue()
          ? <Icon type={IconType.CHECK} fill="none" size={IconSize.EXTRA_LARGE} stroke={colors.green[500]} />
          : <Icon stroke={colors.red[500]} size={IconSize.LARGE} type={IconType.CLOSE} />
      ),
      header: () => "Assgined",
      size: 10,
    }),
    columnHelper.accessor("isVisible", {
      cell: (cell) => (
        <Switch checked={cell.getValue()} />
      ),
      header: () => "Visible",
      size: 15,
    }),
    columnHelper.accessor("createdAt", {
      cell: (cell) => (
        cell.getValue() && <Text>{format(cell.getValue()!, DEFAULT_DATE_FORMAT)}</Text>
      ),
      header: () => "Created at",
      size: 15,
    }),
    columnHelper.accessor("id", {
      cell: () => (
        <div className="flex space-x-2">
          <Icon
            type={IconType.TRASH_FULL}
            stroke={colors.red[500]}
            onClick={() => { }}
          />
          <Icon type={IconType.EDIT_PENCIL_1} onClick={() => { }} />
        </div>
      ),
      header: undefined,
      size: 10,
    }),
  ];

  return columns;
}

export default useMenusColumns;