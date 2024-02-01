import { FC } from "react";
import { DeleteModal, Loader, Paper, Text, TextVariant } from "ui-components";

import RestaurantsTable from "./restaurants-table/RestaurantsTable";
import useGetRestaurants from "./useGetRestaurants";
import ManageRestaurantModal from "../common/ManageRestaurantModal";
import CreateRestaurantFeature from "../create-restaurant/CreateRestaurant";
import useDeleteRestaurant from "../delete-restaurant/use-delete-restaurant";
import useUpdateRestaurant from "../update-restaurant/use-update-restaurant";

const RestaurantsOverviewFeature: FC = () => {
  const { restaurants, loading } = useGetRestaurants();

  const {
    deleteRestaurant,
    modal,
    loading: loadingRestaurantDelete,
  } = useDeleteRestaurant();

  const {
    modal: updateModal,
    form: updateForm,
    loading: loadingUpdate,
    onSubmit,
    onUpdate,
  } = useUpdateRestaurant(restaurants);

  return (
    <Paper fullHeight fullWidth noPadding>
      <div className="flex flex-col w-full pt-3">
        <div className="flex items-center justify-between w-full px-5 pb-5">
          <Text variant={TextVariant.HEADING6}>Restaurants</Text>
          <CreateRestaurantFeature />
        </div>
        {loading && !restaurants.length && <Loader centered />}
        {!!restaurants.length && (
          <RestaurantsTable
            restaurants={restaurants}
            onDelete={(id: string) => modal.open({ id })}
            onUpdate={onUpdate}
          />
        )}
      </div>
      <DeleteModal
        title="Delete restaurant"
        close={modal.close}
        isOpen={modal.isOpen}
        onConfirm={deleteRestaurant}
        description="Are you sure you want to delete this restaurant?"
        loading={loadingRestaurantDelete}
      />
      <ManageRestaurantModal
        close={updateModal.close}
        form={updateForm}
        formName="update-restaurant"
        isOpen={updateModal.isOpen}
        loading={loadingUpdate}
        onSubmit={onSubmit}
      />
    </Paper>
  );
};

export default RestaurantsOverviewFeature;
