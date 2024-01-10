import { useState } from "react";
import { ContentPreviewModel, useModal } from "ui-components";

import { UseContentPreviewReturn } from "./types";

const useContentPreview = (): UseContentPreviewReturn => {
  const modal = useModal<ContentPreviewModel>();
  const [content, setContent] =
    useState<Partial<ContentPreviewModel | null>>(null);

  const openModal = (contentItem: ContentPreviewModel) => {
    setContent(contentItem);
    modal.open();
  };

  return {
    modal: {
      ...modal,
      open: openModal,
    },
    content,
  };
};

export default useContentPreview;
