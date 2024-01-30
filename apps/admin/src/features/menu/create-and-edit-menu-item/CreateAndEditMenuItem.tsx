import React, { FC } from "react";
import { UseModalReturn } from "ui-components/src/modal/useModal";

import CreateMenuItemFormModal from "./CreateAndEditMenuItemFormModal";
import { useCreateMenuItem } from "./useCreateAndEditMenuItem";
import { ItemModalModel, MenuSectionItem } from "../menu-overview/types";

export type CreateAndEditMenuItemFeatureProps = {
  modal: UseModalReturn<ItemModalModel>;
  editModal?: UseModalReturn<MenuSectionItem>;
  menuId: string;
};

const CreateAndEditMenuItemFeature: FC<CreateAndEditMenuItemFeatureProps> = ({
  modal,
  menuId,
  editModal,
}) => {
  const {
    sectionItemForm,
    formFields,
    addVariant,
    removeVariant,
    onSubmit,
    loading,
    image,
    setImage,
    imageRef,
    onTagClick,
    onAlergenClick,
  } = useCreateMenuItem(menuId, modal, editModal);

  return (
    <CreateMenuItemFormModal
      formFields={formFields}
      addVariant={addVariant}
      removeVariant={removeVariant}
      onTagClick={onTagClick}
      onAlergenClick={onAlergenClick}
      imageRef={imageRef}
      image={image}
      setImage={setImage}
      onSubmit={onSubmit}
      modal={modal}
      editModal={editModal}
      loading={loading}
      sectionItemForm={sectionItemForm}
      disableConfirmButton={!sectionItemForm.formState.isValid}
    />
  );
};

export default CreateAndEditMenuItemFeature;
