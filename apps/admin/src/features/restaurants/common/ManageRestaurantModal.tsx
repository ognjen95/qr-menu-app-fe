import { FC, useRef } from "react";
import {
  Form,
  IconType,
  InputField,
  Modal,
  UseFormReturn,
} from "ui-components";
import { colors } from "ui-components/src/config/tailwind-config";

import MenuSelectField from "../../../components/form-fields/menu-select-field/MenuSelectField";
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
}) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
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
      <div ref={ref}>
        <Form form={form} fullWidth formName={formName} onSubmit={onSubmit}>
          {({ control }) => (
            <div className="flex flex-col space-y-4 w-full">
              <InputField control={control} fieldName="name" label="Name" />
              <InputField
                control={control}
                fieldName="description"
                label="Description"
              />
              <InputField control={control} fieldName="city" label="City" />
              <InputField
                control={control}
                fieldName="address"
                label="Address"
              />
              <div className="flex items-center space-x-2">
                <InputField
                  control={control}
                  fieldName="country"
                  label="Country"
                />
                <InputField control={control} fieldName="state" label="State" />
              </div>
              <MenuSelectField ref={ref} control={control} fieldName="menuId" />
            </div>
          )}
        </Form>
      </div>
    </Modal>
  );
};

export type { ManageRestaurantModalProps };

export default ManageRestaurantModal;
