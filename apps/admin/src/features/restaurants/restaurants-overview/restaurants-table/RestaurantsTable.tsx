import { FC } from "react";

import SimpleTable from "~components/tables/SimpleTable";

import useRestaurantColumns from "./useRestaurantsColumns";
import { RestaurantTableModel } from "../types";

export type RestaurantsTableProps = {
  restaurants: RestaurantTableModel[];
  onDelete: (id: string) => void;
  onUpdate: (id: string) => void;
};

const RestaurantsTable: FC<RestaurantsTableProps> = ({
  restaurants,
  onDelete,
  onUpdate,
}) => {
  const columns = useRestaurantColumns(onDelete, onUpdate);

  return (
    <div className="flex flex-col min-h-0">
      <div className="overflow-y-auto flex flex-col">
        <SimpleTable
          data={restaurants}
          columns={columns}
          propertyOnRowClick="id"
        />
      </div>
    </div>
  );
};

export default RestaurantsTable;
