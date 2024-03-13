import { toast } from "react-toastify";

import { useOrderContext } from "../../../app/context/cart-context/CartContext";
import { ComponentType } from "../../../app/context/theme-context/enums";
import { ColorPallete } from "../../../app/context/theme-context/types";
import ThemeButton from "../../themes/components/buttons/ThemeButton";
import ThemeTypography from "../../themes/components/typography/ThemeTypography";

const OrderBottomNav = ({ colorPallete }: { colorPallete: ColorPallete }) => {
  const { order, resetOrder } = useOrderContext();

  const total =
    order?.reduce((acc, item) => acc + +item.price * +item.qty, 0) ?? 0;

  return (
    <div className="p-3 sticky right-10 left-10 bottom-0">
      <div className="flex items-center space-x-5 justify-between w-full sticky right-10 left-10 bottom-5 py-3 px-5 bg-white/50 backdrop-blur rounded-xl">
        <div className="flex flex-col min-w-fit w-1/3">
          <ThemeTypography
            type={ComponentType.P}
            style={{
              color: "black",
              fontSize: "12px",
              fontWeight: "400",
            }}
            props={{
              value: "Total:",
            }}
          />
          <ThemeTypography
            type={ComponentType.H5}
            style={{
              color: "black",
              fontWeight: "600",
            }}
            props={{
              value: `${total.toFixed(2)} $`,
            }}
          />
        </div>
        <ThemeButton
          onClick={() => {
            resetOrder();
            toast.success("Order completed");
          }}
          style={{
            height: "48px",
            width: "100%",
          }}
          props={{
            value: "Complete order",
          }}
        />
      </div>
    </div>
  );
};

export default OrderBottomNav;
