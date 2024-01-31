import { FC } from "react";
import {
  Button,
  Form,
  InputField,
  Modal,
  useForm,
  useModal,
} from "ui-components";

const CreateMenuFeature: FC = () => {
  const modal = useModal();
  const form = useForm();

  return (
    <div>
      <Button onClick={modal.open}>+ New Menu</Button>
      <Modal
        isOpen={modal.isOpen}
        close={modal.close}
        title="Add Menu"
        onConfirm={() => {}}
      >
        <Form form={form} fullWidth>
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
