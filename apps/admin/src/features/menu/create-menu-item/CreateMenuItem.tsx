import React, { FC } from "react";
import { UseModalReturn } from "ui-components/src/modal/useModal";

import { ItemModalModel } from "../menu-overview/types";
import { useCreateMenuItem } from "./useCreateMenuItem";
import CreateMenuItemFormModal from "./CreateMenuItemFormModal";

export type CreateMenuItemFeatureProps = {
  modal: UseModalReturn<ItemModalModel>;
  menuId: string;
};

const CreateMenuItemFeature: FC<CreateMenuItemFeatureProps> = ({
  modal,
  menuId,
}) => {

  const {
    sectionItemForm,
    formFields,
    addVariant,
    removeVariant,
    createMenuSectionItem,
    loading,
    image,
    setImage,
    imageRef,
    onTagClick,
    onAlergenClick,
    upload,
  } = useCreateMenuItem(menuId, modal);


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
      createMenuSectionItem={createMenuSectionItem}
      modal={modal}
      loading={loading}
      sectionItemForm={sectionItemForm}
      menuId={menuId}
      upload={upload}
    />
  );
};

export default CreateMenuItemFeature;
