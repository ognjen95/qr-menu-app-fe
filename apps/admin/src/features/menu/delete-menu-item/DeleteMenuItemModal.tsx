import React, { FC } from "react";
import { toast } from "react-toastify";
import { DeleteModal } from "ui-components";
import { UseModalReturn } from "ui-components/src/modal/useModal";

import {
  GetMenuDocument,
  useDeleteMenuItemMutation,
} from "../../../graphql-api";
import { MenuSectionItem } from "../menu-overview/types";

export type DeleteMenuItemModalProps = {
  modal: UseModalReturn<MenuSectionItem>;
};

const DeleteMenuItemModalFeature: FC<DeleteMenuItemModalProps> = ({
  modal,
}) => {
  const [deleteItem, { loading }] = useDeleteMenuItemMutation();
  const onDelete = () => {
    if (!modal.params?.id) return;

    deleteItem({
      refetchQueries: [GetMenuDocument],
      onCompleted: () => {
        toast.success("Menu item deleted");
        modal.close();
      },
      variables: { id: modal.params?.id },
    });
  };

  return (
    <DeleteModal
      loading={loading}
      isOpen={modal.isOpen}
      close={modal.close}
      title={`Are you sure you want to delete this ${
        modal.params?.name ?? ""
      }?`}
      description="This action cannot be undone."
      onConfirm={onDelete}
    />
  );
};

export default DeleteMenuItemModalFeature;
