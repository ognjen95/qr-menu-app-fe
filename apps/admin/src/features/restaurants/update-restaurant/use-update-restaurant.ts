import { toast } from "react-toastify";
import { useForm, useModal } from "ui-components";

import { namedOperations, useUpdateRestaurantMutation } from "~graphql-api";

import { UpdateRestaurantModalParams } from "./types";
import {
  DEFAULT_VALUES,
  VALIDATION_SCHEMA,
} from "../create-restaurant/constants";
import { RestaurantFormModel } from "../create-restaurant/types";
import { RestaurantTableModel } from "../restaurants-overview/types";

const useUpdateRestaurant = (restaurants: RestaurantTableModel[]) => {
  const modal = useModal<UpdateRestaurantModalParams>();

  const form = useForm({
    defaultValues: DEFAULT_VALUES,
    validationSchema: VALIDATION_SCHEMA,
  });

  const { reset } = form;

  const [updateRestaurant, { loading }] = useUpdateRestaurantMutation();

  const onUpdate = (id: string) => {
    const restaurant = restaurants.find((rest) => rest.id === id);

    if (restaurant) {
      reset({
        name: restaurant.name,
        description: restaurant.description,
        address: restaurant.location.address,
        city: restaurant.location.city,
        state: restaurant.location.state,
        country: restaurant.location.country,
      });
      modal.open({ id });
    }
  };

  const onSubmit = (data: RestaurantFormModel) => {
    updateRestaurant({
      variables: {
        args: {
          id: modal.params!.id,
          description: data.description,
          name: data.name,
          location: {
            address: data.address,
            city: data.city,
            country: data.country,
            state: data.state,
          },
        },
      },
      onCompleted: () => {
        modal.close();
        toast.success("Restaurant updated");
        form.reset(DEFAULT_VALUES);
      },
      refetchQueries: [namedOperations.Query.GetRestaurants],
    });
  };

  return {
    modal: {
      ...modal,
      close: () => {
        modal.close();
        form.reset(DEFAULT_VALUES);
      },
    },
    form,
    onSubmit,
    loading,
    onUpdate,
  };
};

export default useUpdateRestaurant;
