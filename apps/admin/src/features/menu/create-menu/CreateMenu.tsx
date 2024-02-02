import { FC } from "react";
import { Button, IconType } from "ui-components";
import { ButtonSize } from "ui-components/src/button/enums";

import useCreateMenu from "./use-create-menu";
import ManageMenuModal from "../common/ManageMenuModal";

const CreateMenuFeature: FC = () => {
  const { modal, form, loading, onSubmit } = useCreateMenu();

  return (
    <div>
      <Button
        leftIcon={{
          type: IconType.PLUS,
          stroke: "white",
        }}
        size={ButtonSize.SMALL}
        onClick={modal.open}
      >
        New Menu
      </Button>
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
