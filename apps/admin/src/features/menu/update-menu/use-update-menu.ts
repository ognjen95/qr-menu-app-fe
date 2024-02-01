import { useForm, useModal } from "ui-components";

import { namedOperations, useUpdateMenuMutation } from "~graphql-api";

import { UpdateMenuModalParams } from "./types";
import { DEFAULT_VALUES, VALIDATION_SCHEMA } from "../create-menu/constants";
import { MenuFormModel } from "../create-menu/types";
import { MenuTableModel } from "../menus-overview/types";

const useUpdateMenu = (menus: MenuTableModel[]) => {
  const modal = useModal<UpdateMenuModalParams>();

  const form = useForm({
    defaultValues: DEFAULT_VALUES,
    validationSchema: VALIDATION_SCHEMA,
  });

  const { reset } = form;

  const [updateMenu, { loading }] = useUpdateMenuMutation();

  const onUpdate = (id: string) => {
    const menu = menus.find((rest) => rest.id === id);

    if (menu) {
      reset({
        name: menu.name,
        description: menu.description,
      });
      modal.open({ id });
    }
  };

  const onSubmit = (data: MenuFormModel) => {
    updateMenu({
      variables: {
        args: {
          id: modal.params!.id,
          description: data.description,
          name: data.name,
        },
      },
      onCompleted: () => {
        modal.close();
      },
      refetchQueries: [namedOperations.Query.GetMenus],
    });
  };

  return { modal, form, onSubmit, loading, onUpdate };
};

export default useUpdateMenu;
