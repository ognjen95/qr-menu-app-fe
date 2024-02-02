import React, { FC } from "react";
import { UseModalReturn } from "ui-components/src/modal/useModal";

import CreateMenuSectionFormModal from "./CreateMenuSectionFormModal";
import useCreateMenuSection from "./useCreateMenuSection";
import { MenuSection as MenuSectionModel } from "../menu-overview/types";

export type CreateMenuSectionProps = {
  menuId: string;
  modal: UseModalReturn<Partial<MenuSectionModel>>;
  editSectionModal: UseModalReturn<MenuSectionModel>;
};

const CreateMenuSectionFeature: FC<CreateMenuSectionProps> = ({
  menuId,
  modal: sectionModal,
  editSectionModal,
}) => {
  const {
    sectionForm,
    createMenuSection,
    createSectionLoading,
    updateLoading,
  } = useCreateMenuSection(menuId as string, sectionModal, editSectionModal);

  return (
    <CreateMenuSectionFormModal
      editSectionModal={editSectionModal}
      modal={sectionModal}
      form={sectionForm}
      loading={createSectionLoading || updateLoading}
      createMenuSection={createMenuSection}
    />
  );
};

export default CreateMenuSectionFeature;
