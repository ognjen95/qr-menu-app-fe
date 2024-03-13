import clsx from "clsx";
import capitalize from "lodash.capitalize";
import { IconButton, IconType } from "ui-components";

import { DefaultThemeType } from "../../../app/context/theme-context/types";
import { ComponentType } from "../../../graphql-api";
import ThemeTypography from "../../themes/components/typography/ThemeTypography";
import { MenuSectionItem } from "../menu-overview/types";
import { OrderUrlItem } from "../visitor-menu-view/types";
import useOrder from "../visitor-menu-view/useOrder";

const SelectedOptions = ({
  itemVariant,
  selectedItem,
  colorPallete,
  orderItems,
  index,
}: {
  itemVariant: OrderUrlItem & { name: string };
  selectedItem: MenuSectionItem;
  colorPallete?: DefaultThemeType["colorPallete"];
  orderItems: OrderUrlItem[];
  index: number;
}) => {
  const { addToOrder, removeFromOrder } = useOrder({
    selectedItem,
    selectedVariant: itemVariant.name,
  });

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      key={itemVariant.id}
      className={clsx("flex justify-between px-3 items-center bg-grey-50/10", {
        "rounded-b-xl": index === orderItems.length - 1,
      })}
    >
      <IconButton
        iconProps={{
          onClick: () => removeFromOrder(),
          stroke: colorPallete?.primary,
          type: IconType.REMOVE_MINUS_CIRCLE,
        }}
      />
      <div className="flex items-center space-x-2">
        <ThemeTypography
          type={ComponentType.P}
          style={{ color: colorPallete?.text, fontWeight: "400" }}
          props={{
            value: itemVariant.qty,
          }}
        />
        <ThemeTypography
          type={ComponentType.H4}
          style={{ fontWeight: "400", fontSize: "16px" }}
          props={{
            value: `x`,
          }}
        />
        <ThemeTypography
          type={ComponentType.P}
          style={{ color: colorPallete?.text, fontWeight: "400" }}
          props={{
            value: capitalize(itemVariant.name),
          }}
        />
        <ThemeTypography
          type={ComponentType.H4}
          style={{ fontWeight: "400", fontSize: "16px" }}
          props={{
            value: "=",
          }}
        />
        <ThemeTypography
          type={ComponentType.P}
          style={{ color: colorPallete?.text, fontWeight: "400" }}
          props={{
            value: `${Number(itemVariant.price) * Number(itemVariant.qty)}$`,
          }}
        />
      </div>
      <IconButton
        iconProps={{
          onClick: () => addToOrder(),
          stroke: colorPallete?.primary,
          type: IconType.PLUS,
        }}
      />
    </div>
  );
};

export default SelectedOptions;
