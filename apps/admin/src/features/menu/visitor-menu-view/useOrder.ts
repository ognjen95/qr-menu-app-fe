import { useState } from "react";
import { UseModalReturn } from "ui-components/src/modal/useModal";

import { useOrderContext } from "../../../app/context/cart-context/CartContext";
import { MenuSectionItem } from "../menu-overview/types";

const useOrder = ({
  selectedItem,
  modal,
  selectedVariant,
}: {
  modal?: UseModalReturn<MenuSectionItem>;
  selectedItem: MenuSectionItem;
  selectedVariant: string;
}) => {
  const [quantity, setQuantity] = useState(1);

  const { setOrder, order } = useOrderContext();

  const { id, variants } = selectedItem || {};

  const foundVariant = variants?.find(
    (variant) => variant.name === selectedVariant
  );

  const price = foundVariant?.price || variants?.[0]?.price;

  const name = foundVariant?.name || selectedItem.name;

  const addToOrder = () => {
    if (!id || !name || !price || !order) return;

    const hasSameItem = order.find(
      (item) => item.id === id && item.price.toString() === price.toString()
    );

    if (hasSameItem) {
      const mappOrder = order.map((item) => {
        if (item.id === id && item.price.toString() === price.toString()) {
          return {
            ...item,
            qty: (+item.qty + quantity).toString(),
          };
        }

        return item;
      });

      setOrder(mappOrder);
    }

    if (!order.length) {
      const newOrder = [
        {
          id,
          price: price.toString(),
          qty: quantity.toString(),
        },
      ];

      setOrder(newOrder);
    }

    if (!hasSameItem) {
      const newOrder = [
        ...order,
        {
          id,
          price: price.toString(),
          qty: quantity.toString(),
        },
      ];

      setOrder(newOrder);
    }

    modal?.close();
    setQuantity(1);
  };

  const removeFromOrder = () => {
    if (!id || !price || !order) return;

    const hasSameItem = order.find(
      (item) => item.id === id && item.price.toString() === price.toString()
    );

    if (hasSameItem) {
      const mappOrder = order.map((item) => {
        if (item.id === id && item.price.toString() === price.toString()) {
          return {
            ...item,
            qty: (+item.qty - 1).toString(),
          };
        }

        return item;
      });

      const filtered = mappOrder.filter((item) => +item.qty > 0);

      setOrder(filtered);
    }
  };

  return {
    quantity,
    setQuantity,
    addToOrder,
    price,
    removeFromOrder,
  };
};

export default useOrder;
