import { useForm, useModal } from "ui-components";

import { namedOperations, useCreateMenuMutation } from "~graphql-api";

import { DEFAULT_VALUES, VALIDATION_SCHEMA } from "./constants";
import { MenuFormModel } from "./types";

const useCreateMenu = () => {
  const modal = useModal();
  const form = useForm({
    defaultValues: DEFAULT_VALUES,
    validationSchema: VALIDATION_SCHEMA,
  });

  const [createMenu, { loading }] = useCreateMenuMutation();

  const onSubmit = (data: MenuFormModel) => {
    createMenu({
      variables: {
        createMenuInput: { name: data.name, description: data.description },
      },
      refetchQueries: [namedOperations.Query.GetMenus],
      onCompleted: () => {
        modal.close();
      },
    });
  };

  return { modal, form, onSubmit, loading };
};

export default useCreateMenu;
