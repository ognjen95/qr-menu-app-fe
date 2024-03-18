import { toast } from "react-toastify";

import OrderItem from "./OrderedItem";
import { ComponentType } from "../../../../app/context/theme-context/enums";
import { ColorPallete } from "../../../../app/context/theme-context/types";
import ThemeButton from "../../../themes/components/buttons/ThemeButton";
import ThemePaper from "../../../themes/components/ThemePaper/ThemePaper";
import ThemeTypography from "../../../themes/components/typography/ThemeTypography";
import { MenuSectionItem } from "../../menu-overview/types";

const OrderRightCard = ({
  colorPallete,
  orders,
  total,
}: {
  colorPallete: ColorPallete;
  orders: {
    id: string;
    price: number;
    qty: number;
    name: string;
    selectedItem: MenuSectionItem;
    selectedVariant: string;
  }[];
  total: number;
}) => (
  <div className="w-[500px] sticky top-0">
    <ThemePaper colorPallete={colorPallete}>
      <div>
        <ThemeTypography
          type={ComponentType.H4}
          props={{ value: "Your order" }}
        />
        <div className="flex flex-col py-5">
          {orders?.map((item) => (
            <OrderItem key={item.id} {...item} colorPallete={colorPallete} />
          ))}
        </div>
      </div>
      <div
        className="flex items-center space-x-5 justify-between w-full"
        style={{
          borderColor: colorPallete?.primary,
        }}
      >
        <div className="flex flex-col min-w-fit w-1/3">
          <ThemeTypography
            type={ComponentType.P}
            style={{
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
              fontWeight: "600",
            }}
            props={{
              value: `${total.toFixed(2)} $`,
            }}
          />
        </div>
        <ThemeButton
          onClick={() => {
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
    </ThemePaper>
  </div>
);

export default OrderRightCard;
