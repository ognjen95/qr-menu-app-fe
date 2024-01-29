import React, { FC } from "react";
import { UseModalReturn } from "ui-components/src/modal/useModal";

import CreateMenuSectionFormModal from "./CreateMenuSectionFormModal";
import useCreateMenuSection from "./useCreateMenuSection";
import { MenuSectionModel } from "../menu-overview/types";

export type CreateMenuSectionProps = {
  menuId: string;
  modal: UseModalReturn<Partial<MenuSectionModel>>;
};

const CreateMenuSectionFeature: FC<CreateMenuSectionProps> = ({
  menuId,
  modal: sectionModal,
}) => {
  const { sectionForm, createMenuSection, createSectionLoading } =
    useCreateMenuSection(menuId as string, sectionModal);

  return (
    <CreateMenuSectionFormModal
      modal={sectionModal}
      form={sectionForm}
      loading={createSectionLoading}
      createMenuSection={createMenuSection}
    />
  );
};

export default CreateMenuSectionFeature;
