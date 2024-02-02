import React, { FC } from "react";
import { toast } from "react-toastify";
import { DeleteModal } from "ui-components";
import { UseModalReturn } from "ui-components/src/modal/useModal";

import {
  useDeleteMenuSectionMutation,
  GetMenuDocument,
} from "../../../graphql-api";
import { MenuSection } from "../menu-overview/types";

export type DeleteMenuSectionModalFeatureProps = {
  deleteSectionModal: UseModalReturn<MenuSection>;
};

const DeleteMenuSectionModalFeature: FC<DeleteMenuSectionModalFeatureProps> = ({
  deleteSectionModal,
}) => {
  const [deletedMenuSection, { loading: deleteMenuSectionLoading }] =
    useDeleteMenuSectionMutation();

  const deleteSection = (sectionId: string) => {
    deletedMenuSection({
      onCompleted: () => {
        deleteSectionModal.close();
        toast.success("Menu section deleted");
      },
      refetchQueries: [GetMenuDocument],
      variables: {
        deleteMenuSectionId: sectionId,
      },
    });
  };

  return (
    <DeleteModal
      isOpen={deleteSectionModal.isOpen}
      title="Delete Section"
      description="Are you sure you want to delete"
      boldedEndOfDescription={`${deleteSectionModal.params?.name ?? ""} ?`}
      onConfirm={() => deleteSection(deleteSectionModal.params?.id ?? "")}
      close={deleteSectionModal.close}
      loading={deleteMenuSectionLoading}
    />
  );
};

export default DeleteMenuSectionModalFeature;
