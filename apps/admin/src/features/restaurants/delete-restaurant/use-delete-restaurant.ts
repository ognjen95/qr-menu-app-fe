import { useModal } from "ui-components";

import { namedOperations, useDeleteRestaurantMutation } from "~graphql-api";

import { DeleteRestaurantModalParams } from "./types";

const useDeleteRestaurant = () => {
  const modal = useModal<DeleteRestaurantModalParams>();
  const [deleteRestaurantMutation, { loading }] = useDeleteRestaurantMutation();
  const deleteRestaurant = () => {
    deleteRestaurantMutation({
      variables: {
        restaurantId: modal.params!.id,
      },
      refetchQueries: [namedOperations.Query.GetRestaurants],
      onCompleted: () => modal.close(),
    });
  };

  return { deleteRestaurant, loading, modal };
};

export default useDeleteRestaurant;
