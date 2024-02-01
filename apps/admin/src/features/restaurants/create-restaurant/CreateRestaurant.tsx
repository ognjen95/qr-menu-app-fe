import { FC } from "react";
import { Button, IconType } from "ui-components";
import { ButtonSize } from "ui-components/src/button/enums";

import useCreateRestaurant from "./use-create-restaurant";
import ManageRestaurantModal from "../common/ManageRestaurantModal";

const CreateRestaurantFeature: FC = () => {
  const { modal, form, loading, onSubmit } = useCreateRestaurant();

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
        New Restaurant
      </Button>
      <ManageRestaurantModal
        close={modal.close}
        form={form}
        formName="create-restaurant"
        isOpen={modal.isOpen}
        loading={loading}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default CreateRestaurantFeature;
