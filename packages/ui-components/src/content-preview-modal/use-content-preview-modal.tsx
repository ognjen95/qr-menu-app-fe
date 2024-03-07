import { useEffect, useState } from "react";

import { UseContentPreviewModal, UseContentPreviewModalReturn } from "./types";

const useContentPreviewModal: UseContentPreviewModal = (
  content
): UseContentPreviewModalReturn => {
  const isTemplate = Array.isArray(content);

  const [selectedContentId, setSelectedContentId] = useState<string>();

  useEffect(() => {
    if (isTemplate && content.length) {
      setSelectedContentId(content[0].id);
    }

    if (!isTemplate) {
      setSelectedContentId(content.id);
    }
  }, [content, isTemplate]);

  const selectedContent = isTemplate
    ? content.find((c) => c.id === selectedContentId)!
    : content;

  const [ref, setRef] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const html = document.querySelector("html");
    setRef(html);

    return () => {
      setRef(null);
    };
  }, []);

  return {
    ref,
    selectedContent,
    setSelectedContentId,
  };
};

export default useContentPreviewModal;
