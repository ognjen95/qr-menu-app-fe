import { useModal } from "ui-components";

import { namedOperations, useDeleteMenuMutation } from "~graphql-api";

import { DeleteMenuModalParams } from "./types";

const useDeleteMenu = () => {
  const modal = useModal<DeleteMenuModalParams>();
  const [deleteMenuMutation, { loading }] = useDeleteMenuMutation();
  const deleteMenu = () => {
    deleteMenuMutation({
      variables: {
        deleteMenuId: modal.params!.id,
      },
      refetchQueries: [namedOperations.Query.GetMenus],
      onCompleted: () => modal.close(),
    });
  };

  return { deleteMenu, loading, modal };
};

export default useDeleteMenu;
