import { useState } from "react";

import { UseMetaListInputReturn } from "./types";

const useMetaListInput = (): UseMetaListInputReturn => {
  const [showAddInput, setShowAddInput] = useState<boolean>(false);
  const [metadataId, setMetadataId] = useState<string>("");
  const [metadataValue, setMetadataValue] = useState<string>("");

  return {
    showAddInput,
    setShowAddInput,
    metadataId,
    setMetadataId,
    metadataValue,
    setMetadataValue,
  };
};

export default useMetaListInput;
