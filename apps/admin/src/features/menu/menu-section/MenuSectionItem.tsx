import clsx from "clsx";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React from "react";
import { UseModalReturn } from "ui-components/src/modal/useModal";

import SelectedOptions from "./SelectedMenuItems";
import { useOrderContext } from "../../../app/context/cart-context/CartContext";
import { ColorPallete } from "../../../app/context/theme-context/types";
import { ComponentType } from "../../../graphql-api";
import useOrderLocalStorage from "../../../hooks/use-order-local-storage";
import ThemeTypography from "../../themes/components/typography/ThemeTypography";
import { MenuSectionItem } from "../menu-overview/types";

const MenuItem = ({
  item,
  colorPallete,
  modal,
  isMobile,
  isBuilder,
}: {
  item: MenuSectionItem;
  colorPallete: ColorPallete;
  modal: UseModalReturn<MenuSectionItem>;
  isMobile: boolean;
  isBuilder: boolean;
}) => {
  const { order } = useOrderContext();

  const orderItems = order?.filter((i) => i.id === item.id) ?? [];
  const itemName = item.name.toLowerCase();

  const itemVariants = orderItems.map((ord) => {
    const orderItm = item.variants.find(
      (v) => v.price.toString() === ord.price
    );

    return {
      ...ord,
      name: orderItm?.name || itemName,
    };
  });

  return (
    <div
      onClick={() => modal.open(item)}
      key={item.id}
      className={clsx({
        "rounded-xl": !isMobile && !isBuilder,
      })}
      style={{
        backgroundColor: colorPallete?.surface,
      }}
    >
      <div className="flex items-center justify-between pl-4 pr-2 py-2 rounded-xl oveflow-hidden">
        <div className="flex flex-col flex-1 justify-between overflow-hidden space-y-2 pr-2">
          <ThemeTypography
            type={ComponentType.H5}
            style={{ color: colorPallete?.text }}
            props={{
              value: item.name,
            }}
          />
          <div className="flex flex-col max-h-10 overflow-hidden">
            <ThemeTypography
              type={ComponentType.P}
              style={{
                color: colorPallete?.text,
                fontWeight: "400",
                opacity: "0.9",
                fontSize: "14px",
              }}
              props={{
                value: item.description,
              }}
            />
          </div>
          <ThemeTypography
            type={ComponentType.H5}
            style={{ color: colorPallete?.primary }}
            props={{
              value: item.variants
                .map((variant) => `${variant.price}$`)
                .join(" • "),
            }}
          />
        </div>
        <div>
          <div className="shadow border border-gray-200 rounded-xl overflow-hidden relative h-[100px] w-[100px]">
            <Image
              alt="Menu item"
              quality={100}
              priority
              loading="eager"
              objectFit="cover"
              objectPosition="center"
              blurDataURL="/images/no-content.png"
              placeholder="blur"
              fill
              src={item.image || "/images/no-content.png"}
            />
          </div>
        </div>
      </div>
      {!!itemVariants?.length &&
        isMobile &&
        itemVariants.map((orderVariant, index) => (
          <SelectedOptions
            key={orderVariant.id}
            itemVariant={orderVariant}
            selectedItem={item}
            orderItems={orderItems}
            index={index}
            colorPallete={colorPallete}
          />
        ))}
    </div>
  );
};

export default MenuItem;
