import { FC } from "react";
import { Button } from "ui-components";

import useCreateMenu from "./use-create-menu";
import ManageMenuModal from "../common/ManageMenuModal";

const CreateMenuFeature: FC = () => {
  const { modal, form, loading, onSubmit } = useCreateMenu();
  return (
    <div>
      <Button onClick={modal.open}>+ New Menu</Button>
      <ManageMenuModal
        close={modal.close}
        form={form}
        formName="create-menu"
        isOpen={modal.isOpen}
        loading={loading}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default CreateMenuFeature;
