import { toast } from "react-toastify";
import { useForm, useModal } from "ui-components";

import { namedOperations, useCreateRestaurantMutation } from "~graphql-api";

import { DEFAULT_VALUES, VALIDATION_SCHEMA } from "./constants";
import { RestaurantFormModel } from "./types";

const useCreateRestaurant = () => {
  const modal = useModal();
  const form = useForm({
    defaultValues: DEFAULT_VALUES,
    validationSchema: VALIDATION_SCHEMA,
  });

  const [createRestaurant, { loading }] = useCreateRestaurantMutation();

  const onSubmit = (data: RestaurantFormModel) => {
    createRestaurant({
      variables: {
        args: {
          name: data.name,
          description: data.description,
          location: {
            address: data.address,
            city: data.city,
            state: data.state,
            country: data.country,
          },
          menuId: data.menuId?.value.toString() || null,
        },
      },
      refetchQueries: [namedOperations.Query.GetRestaurants],
      onCompleted: () => {
        modal.close();
        toast.success("Restaurant created");
        form.reset(DEFAULT_VALUES);
      },
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
  };
};

export default useCreateRestaurant;
