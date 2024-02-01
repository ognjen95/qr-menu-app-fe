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
        args: { name: data.name, description: data.description },
      },
      refetchQueries: [namedOperations.Query.GetRestaurants],
      onCompleted: () => {
        modal.close();
      },
    });
  };

  return { modal, form, onSubmit, loading };
};

export default useCreateRestaurant;
