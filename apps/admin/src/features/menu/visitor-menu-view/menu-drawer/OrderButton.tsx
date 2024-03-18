import { IconButton, IconType } from "ui-components";
import { UseModalReturn } from "ui-components/src/modal/useModal";

import { ColorPallete, ComponentType } from "../../../../graphql-api";
import ThemeButton from "../../../themes/components/buttons/ThemeButton";
import ThemeTypography from "../../../themes/components/typography/ThemeTypography";
import { MenuSectionItem } from "../../menu-overview/types";
import useOrder from "../useOrder";

const OrderButton = ({
  colorPallete,
  selectedItem,
  selectedVariant,
}: {
  colorPallete: ColorPallete;
  selectedItem: UseModalReturn<MenuSectionItem>;
  selectedVariant: string;
}) => {
  const { quantity, setQuantity, addToOrder, price } = useOrder({
    selectedItem: selectedItem.params!,
    modal: selectedItem,
    selectedVariant,
  });

  return (
    <div className="flex items-center space-x-5">
      <div className="flex p-1 space-between rounded-xl bg-grey-50/10">
        <IconButton
          iconProps={{
            onClick: () => setQuantity((prev) => (prev > 1 ? prev - 1 : prev)),
            stroke: colorPallete.primary,
            type: IconType.REMOVE_MINUS_CIRCLE,
          }}
        />
        <div className="w-14 text-center">
          <ThemeTypography
            type={ComponentType.H4}
            style={{ color: colorPallete.text }}
            props={{ value: quantity.toString() }}
          />
        </div>
        <IconButton
          iconProps={{
            onClick: () => setQuantity((prev) => prev + 1),
            stroke: colorPallete.primary,
            type: IconType.PLUS,
          }}
        />
      </div>
      <ThemeButton
        onClick={addToOrder}
        className="shadow"
        style={{
          height: "48px",
          width: "100%",
        }}
        props={{
          value: `Add (${quantity * Number(price || 0)}$)`,
        }}
      />
    </div>
  );
};

export default OrderButton;
