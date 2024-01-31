import { FC } from "react";
import { Paper } from "ui-components";

import RestaurantsTable from "./restaurants-table/RestaurantsTable";
import { RestaurantTableModel } from "./types";
import CreateRestaurantFeature from "../create-restaurant/CreateRestaurant";

const RestaurantsOverviewFeature: FC = () => {
  const restaurants: RestaurantTableModel[] = [
    { id: "1", name: "Mc Donalds Belgrade" },
    { id: "2", name: "Mc Donalds Novi Sad" },
  ];

  return (
    <Paper fullHeight fullWidth noPadding>
      <div className="flex flex-col w-full px-5 pt-3">
        {!!restaurants.length && <RestaurantsTable restaurants={restaurants} />}
        {!restaurants.length && (
          <div className="flex items-center justify-center h-full">
            <CreateRestaurantFeature />
          </div>
        )}
      </div>
    </Paper>
  );
};

export default RestaurantsOverviewFeature;
