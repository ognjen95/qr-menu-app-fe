import { createColumnHelper } from "@tanstack/react-table";
import { FC } from "react";
import { Icon, IconType, Text } from "ui-components";
import { colors } from "ui-components/src/config/tailwind-config";

import SimpleTable from "~components/tables/SimpleTable";
import CreateRestaurantFeature from "~features/restaurants/create-restaurant/CreateRestaurant";

import { RestaurantTableModel } from "../types";

const columnHelper = createColumnHelper<RestaurantTableModel>();

const columns = [
  columnHelper.accessor("name", {
    cell: (cell) => <Text>{cell.getValue()}</Text>,
    header: () => "Name",
    size: 90,
  }),
  columnHelper.accessor("id", {
    cell: () => (
      <div className="flex space-x-2">
        <Icon
          type={IconType.TRASH_FULL}
          stroke={colors.red[500]}
          onClick={() => {}}
        />
        <Icon type={IconType.EDIT_PENCIL_1} onClick={() => {}} />
      </div>
    ),
    header: undefined,
    size: 10,
  }),
];

export type RestaurantsTableProps = {
  restaurants: RestaurantTableModel[];
};

const RestaurantsTable: FC<RestaurantsTableProps> = ({ restaurants }) => (
  <div className="flex flex-col min-h-0">
    <div className="self-end">
      <CreateRestaurantFeature />
    </div>
    <div className="overflow-y-auto flex flex-col">
      <SimpleTable
        data={restaurants}
        columns={columns}
        onRowClick={() => {}}
        propertyOnRowClick="id"
      />
    </div>
  </div>
);

export default RestaurantsTable;
