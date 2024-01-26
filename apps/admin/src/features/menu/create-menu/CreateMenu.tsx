import { FC } from "react";
import { Button, IconType, Input, Modal, useModal } from "ui-components";

const CreateMenuFeature: FC = () => {
  const modal = useModal();

  return ((
    <div>
      <Button leftIcon={{
        type: IconType.PLUS,
      }}
        onClick={modal.open}
      >
        Create Menu
      </Button>
      <Modal
      modalIcon={{
        type: IconType.FILE_ADD,
        fill: "none",
      }}
        title="Create Menu"
        description="Please enter the name of the menu you want to create."
        close={modal.close}
        onConfirm={modal.close}
        isOpen={modal.isOpen}
      >
        <div className="w-full py-5">
          <Input placeholder="Menu name" />
        </div>
      </Modal>

    </div>
  ))
};

export default CreateMenuFeature;
