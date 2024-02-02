import React, { FC } from "react";
import {
  Form,
  InputField,
  Modal,
  SubmitHandler,
  UseFormReturn,
} from "ui-components";
import { UseModalReturn } from "ui-components/src/modal/useModal";

import { MenuSection, MenuSectionModel } from "../menu-overview/types";

export type CreateMenuSectionFormModalProps = {
  modal: UseModalReturn<Partial<MenuSectionModel>>;
  form: UseFormReturn<MenuSectionModel>;
  loading: boolean;
  createMenuSection: SubmitHandler<MenuSectionModel>;
  editSectionModal: UseModalReturn<MenuSection>;
};

const CreateMenuSectionFormModal: FC<CreateMenuSectionFormModalProps> = ({
  modal,
  form,
  loading,
  createMenuSection,
  editSectionModal,
}) => (
  <Modal
    formName="sectionForm"
    title="Add new section"
    description="Enter name and description for new section in your menu. You can add items to this section later."
    isOpen={modal.isOpen || editSectionModal?.isOpen || false}
    close={modal.isOpen ? modal.close : editSectionModal.close}
    loading={loading}
  >
    <Form
      form={form}
      onSubmit={createMenuSection}
      formName="sectionForm"
      fullWidth
      fullHeight
    >
      {({ control }) => (
        <div className="flex flex-col space-y-5 w-full py-5">
          <InputField
            placeholder="Section name"
            fieldName="name"
            control={control}
            autoFocus
          />
          <InputField
            placeholder="Section description"
            fieldName="description"
            control={control}
          />
        </div>
      )}
    </Form>
  </Modal>
);

export default CreateMenuSectionFormModal;
