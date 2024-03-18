import { ColorPallete } from "../../../../app/context/theme-context/types";
import ThemeTypography from "../../../themes/components/typography/ThemeTypography";
import { MenuSectionItem } from "../../menu-overview/types";
import useOrder from "../useOrder";

const OrderItem = ({
  colorPallete,
  id,
  price,
  qty,
  name,
  selectedItem,
  selectedVariant,
}: {
  colorPallete: ColorPallete;
  id: string;
  price: number;
  qty: number;
  name: string;
  selectedItem: MenuSectionItem;
  selectedVariant: string;
}) => {
  const { addToOrder, removeFromOrder } = useOrder({
    selectedItem,
    selectedVariant,
  });

  return (
    <div
      className="flex items-center justify-between pb-2 border-b"
      style={{
        borderColor: colorPallete?.primary,
      }}
    >
      <div className="flex items-center space-x-2">
        <ThemeTypography props={{ value: qty.toString() }} />
        <ThemeTypography
          style={{
            color: colorPallete?.primary,
          }}
          props={{ value: "x" }}
        />
        <ThemeTypography props={{ value: name }} />
      </div>
      <div className="flex flex-col items-end">
        <ThemeTypography
          props={{ value: (qty * price).toFixed(2).toString() }}
        />
        <div className="flex items-center justify-end space-x-2">
          <div
            onClick={removeFromOrder}
            className="h-3 w-6 self-center flex items-center justify-center text-white rounded hover:bg-red-300/10 cursor-pointer bg-red-500"
          >
            -
          </div>
          <div
            onClick={addToOrder}
            className="h-3 w-6 self-center flex items-center justify-center text-white rounded hover:bg-green-300/10 cursor-pointer bg-green-500"
          >
            +
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
