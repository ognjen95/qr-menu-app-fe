import { createColumnHelper } from "@tanstack/react-table";
import { useRouter } from "next/navigation";
import { Button, Icon, IconSize, IconType, Text } from "ui-components";
import { ButtonColor, ButtonSize } from "ui-components/src/button/enums";
import { colors } from "ui-components/src/config/tailwind-config";
import { RestaurantTableModel } from "../types";

const useRestaurantColumns = () => {
  const { push } = useRouter();
  const columnHelper = createColumnHelper<RestaurantTableModel>();

  const columns = [
    columnHelper.accessor("name", {
      cell: (cell) => <Text>{cell.getValue()}</Text>,
      header: () => "Name",
      size: 30,
    }),
    columnHelper.accessor("location", {
      cell: (cell) => (
        <Text>{`${cell.getValue()?.address ?? ""}, 
        ${cell.getValue()?.city ?? ""},
       ${cell.getValue()?.country ?? ""}`}</Text>
      ),
      header: () => "Location",
      size: 30,
    }),
    columnHelper.accessor("menuId", {
      cell: (cell) => (
        cell.getValue()
          ?
          <Button
            onClick={() => push(`/admin/menus/${cell.getValue()}`)}
            color={ButtonColor.OUTLINED}
            size={ButtonSize.SMALL}>
            View menu
          </Button>
          : <Icon stroke={colors.red[500]} size={IconSize.LARGE} type={IconType.CLOSE} />

      ),
      header: () => "Menu",
      size: 30,
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

export default useRestaurantColumns;