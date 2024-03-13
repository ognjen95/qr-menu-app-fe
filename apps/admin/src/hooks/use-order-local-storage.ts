import { OrderUrlItem } from "../features/menu/visitor-menu-view/types";

const useOrderLocalStorage = () => {
  const get = () =>
    (JSON.parse(localStorage.getItem("order") || "[]") as OrderUrlItem[]) || [];

  const set = (value: OrderUrlItem[]) =>
    localStorage.setItem("order", JSON.stringify(value));

  const reset = () => localStorage.removeItem("order");

  return {
    getOrder: get,
    setOrder: set,
    resetOrder: reset,
  } as const;
};

export default useOrderLocalStorage;
