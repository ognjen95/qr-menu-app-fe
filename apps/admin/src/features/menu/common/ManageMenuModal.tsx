import { FC } from "react";
import {
  Form,
  IconType,
  InputField,
  Modal,
  UseFormReturn,
} from "ui-components";
import { colors } from "ui-components/src/config/tailwind-config";

import { MenuFormModel } from "../create-menu/types";

type ManageMenuModalProps = {
  isOpen: boolean;
  close: () => void;
  loading: boolean;
  formName: string;
  form: UseFormReturn<MenuFormModel>;
  onSubmit: (data: MenuFormModel) => void;
};

const ManageMenuModal: FC<ManageMenuModalProps> = ({
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
    title="Add Menu"
    formName={formName}
    loading={loading}
    modalIcon={{
      type: IconType.FILE_ADD,
      fill: "none",
      stroke: colors.primary[600],
    }}
  >
    <Form form={form} fullWidth formName={formName} onSubmit={onSubmit}>
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
);

export type { ManageMenuModalProps };

export default ManageMenuModal;
