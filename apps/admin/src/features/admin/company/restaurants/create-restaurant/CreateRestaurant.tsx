import { FC } from "react";
import {
  Button,
  Form,
  InputField,
  Modal,
  useForm,
  useModal,
} from "ui-components";

const CreateRestaurantFeature: FC = () => {
  const modal = useModal();
  const form = useForm();
  return (
    <div>
      <Button onClick={modal.open}>New Restaurant</Button>
      <Modal
        isOpen={modal.isOpen}
        close={modal.close}
        title="Add restaurant"
        onConfirm={() => {}}
      >
        <Form form={form} fullWidth>
          {({ control }) => (
            <div className="flex flex-col space-y-4 w-full">
              <InputField control={control} fieldName="name" label="Name" />
              <InputField
                control={control}
                fieldName="description"
                label="Description"
              />
              <InputField
                control={control}
                fieldName="address"
                label="Address"
              />
              <InputField control={control} fieldName="city" label="City" />
              <InputField
                control={control}
                fieldName="country"
                label="Country"
              />
              <InputField control={control} fieldName="state" label="State" />
            </div>
          )}
        </Form>
      </Modal>
    </div>
  );
};

export default CreateRestaurantFeature;
