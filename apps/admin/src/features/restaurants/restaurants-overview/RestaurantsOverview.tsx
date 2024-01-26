import { FC } from "react";
import { Loader, Paper, Text, TextVariant } from "ui-components";

import RestaurantsTable from "./restaurants-table/RestaurantsTable";
import CreateRestaurantFeature from "../create-restaurant/CreateRestaurant";
import useGetRestaurants from "./useGetRestaurants";

const RestaurantsOverviewFeature: FC = () => {
  const {restaurants, loading} = useGetRestaurants();

  return (
    <Paper fullHeight fullWidth noPadding>
      <div className="flex flex-col w-full pt-3">
      <div className="flex items-center justify-between w-full px-5 pb-5">
        <Text variant={TextVariant.HEADING6}>
          Restaurants
        </Text>
        <CreateRestaurantFeature />
      </div>
        {loading && !restaurants.length && (
          <Loader centered />
        )}
        {!!restaurants.length && <RestaurantsTable restaurants={restaurants} />}
        {!restaurants.length && !loading && (
          <div className="flex items-center justify-center h-full">
            <CreateRestaurantFeature />
          </div>
        )}
      </div>
    </Paper>
  );
};

export default RestaurantsOverviewFeature;
