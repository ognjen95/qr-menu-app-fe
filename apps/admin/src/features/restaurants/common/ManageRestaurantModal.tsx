import { FC } from "react";
import {
  Form,
  IconType,
  InputField,
  Modal,
  UseFormReturn,
} from "ui-components";
import { colors } from "ui-components/src/config/tailwind-config";

import { RestaurantFormModel } from "../create-restaurant/types";

type ManageRestaurantModalProps = {
  isOpen: boolean;
  close: () => void;
  loading: boolean;
  formName: string;
  form: UseFormReturn<RestaurantFormModel>;
  onSubmit: (data: RestaurantFormModel) => void;
};

const ManageRestaurantModal: FC<ManageRestaurantModalProps> = ({
  close,
  form,
  formName,
  isOpen,
  loading,
  onSubmit,
}) => (
  <Modal
    isOpen={isOpen}
    close={close}
    title="Add restaurant"
    formName={formName}
    loading={loading}
    modalIcon={{
      type: IconType.CUSTOMERS,
      fill: "none",
      stroke: colors.primary[600],
    }}
  >
    <Form form={form} fullWidth formName={formName} onSubmit={onSubmit}>
      {({ control }) => (
        <div className="flex flex-col space-y-4 w-full">
          <InputField control={control} fieldName="name" label="Name" />
          <InputField
            control={control}
            fieldName="description"
            label="Description"
          />
          <InputField control={control} fieldName="address" label="Address" />
          <InputField control={control} fieldName="city" label="City" />
          <InputField control={control} fieldName="country" label="Country" />
          <InputField control={control} fieldName="state" label="State" />
        </div>
      )}
    </Form>
  </Modal>
);

export type { ManageRestaurantModalProps };

export default ManageRestaurantModal;
