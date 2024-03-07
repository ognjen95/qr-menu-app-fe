import { useCallback, useState } from "react";

type UseModalReturn<TParams = never> = {
  isOpen: boolean;
  open: (params?: TParams) => void;
  close: () => void;
  reset: () => void;
  params?: TParams;
};

const useModal = <TParams = never>(): UseModalReturn<TParams> => {
  const [isOpen, setIsOpen] = useState(false);
  const [params, setParams] = useState<TParams>();

  const open = (modalParams?: TParams) => {
    setIsOpen(true);
    if (modalParams) {
      setParams(modalParams);
    }
  };

  const close = () => {
    setIsOpen(false);
  };

  const reset = () => {
    close();
    setParams(undefined);
  };

  return { isOpen, open, close, reset, params };
};

export type { UseModalReturn };

export default useModal;
