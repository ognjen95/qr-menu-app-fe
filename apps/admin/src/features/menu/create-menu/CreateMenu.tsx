import { FC } from "react";
import { Button, Form, InputField, Modal } from "ui-components";

import useCreateMenu from "./use-create-menu";

const CreateMenuFeature: FC = () => {
  const { modal, form, loading, onSubmit } = useCreateMenu();
  return (
    <div>
      <Button onClick={modal.open}>+ New Menu</Button>
      <Modal
        isOpen={modal.isOpen}
        close={modal.close}
        title="Add Menu"
        formName="create-menu"
        loading={loading}
      >
        <Form form={form} fullWidth formName="create-menu" onSubmit={onSubmit}>
          {({ control }) => (
            <div className="flex flex-col space-y-4 w-full pb-4">
              <InputField control={control} fieldName="name" label="Name" />
              <InputField
                control={control}
                fieldName="description"
                label="Description (optional)"
              />
            </div>
          )}
        </Form>
      </Modal>
    </div>
  );
};

export default CreateMenuFeature;
