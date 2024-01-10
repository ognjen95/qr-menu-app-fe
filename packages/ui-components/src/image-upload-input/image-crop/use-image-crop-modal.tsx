import { useState, useEffect } from "react";

import { UseImageCropModalProps, UseImageCropModalReturn } from "../types";

export const useImageCropModal = ({
  close,
  setIsEditOpen,
}: UseImageCropModalProps): UseImageCropModalReturn => {
  const [ref, setRef] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const body = document.querySelector("body");
    setRef(body);

    return () => {
      setRef(null);
    };
  }, []);

  const closeModal = () => {
    setIsEditOpen(false);
    close();
  };

  return {
    ref,
    setRef,
    closeModal,
  };
};
