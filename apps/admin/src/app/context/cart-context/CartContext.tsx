import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { FCWithChildren } from "ui-components";

import { OrderUrlItem } from "../../../features/menu/visitor-menu-view/types";
import useOrderLocalStorage from "../../../hooks/use-order-local-storage";

const OrderContext = createContext<{
  order?: OrderUrlItem[];
  setOrder: (newOrder: OrderUrlItem[]) => void;
  resetOrder: () => void;
  total: number;
}>({
  order: [],
  setOrder: () => {},
  resetOrder: () => {},
  total: 0,
});

const OrderContextProvider: FCWithChildren = ({ children }) => {
  const [order, setOrder] = useState<OrderUrlItem[]>();
  const { getOrder, setOrder: setOrderLocalStorage } = useOrderLocalStorage();
  const total =
    order?.reduce((acc, item) => acc + +item.price * +item.qty, 0) ?? 0;

  useEffect(() => {
    if (!order) {
      setOrder(getOrder());
    }
  }, [getOrder, order]);

  const contextValue = useMemo(
    () => ({
      order,
      total,
      setOrder: (newOrder: OrderUrlItem[]) => {
        setOrder(newOrder);
        setOrderLocalStorage(newOrder);
      },
      resetOrder: () => {
        setOrder([]);
        setOrderLocalStorage([]);
      },
    }),
    [order, setOrderLocalStorage, total]
  );

  return (
    <OrderContext.Provider value={contextValue}>
      {children}
    </OrderContext.Provider>
  );
};

export function useOrderContext() {
  return useContext(OrderContext);
}

export default OrderContextProvider;