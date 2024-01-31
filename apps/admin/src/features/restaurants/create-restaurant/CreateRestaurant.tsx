import { FC } from "react";
import { Button, IconType, Modal, useModal } from "ui-components";
import { ButtonSize } from "ui-components/src/button/enums";

const CreateRestaurantFeature: FC = () => {
  const modal = useModal();

  return (
    <div>
      <Button
        leftIcon={{
          type: IconType.PLUS,
        }}
        size={ButtonSize.SMALL}
        onClick={modal.open}
      >
        New Restaurant
      </Button>
      <Modal
        title="Create Restaurant"
        close={modal.close}
        onConfirm={modal.close}
        isOpen={modal.isOpen}
      >
        Create
      </Modal>
    </div>
  );
};

export default CreateRestaurantFeature;
