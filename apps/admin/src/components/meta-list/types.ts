import { Dispatch, SetStateAction } from "react";

export type OnSubmitMetadata = (name: string, onCompleted?: () => void) => void;

export type OnEditMetadata = (
  id: string,
  value: string,
  onCompleted?: () => void
) => void;

export type MetaListItem = { id: string; name: string };

export type UseMetaListInputReturn = {
  showAddInput: boolean;
  setShowAddInput: Dispatch<SetStateAction<boolean>>;
  metadataId: string;
  setMetadataId: Dispatch<SetStateAction<string>>;
  metadataValue: string;
  setMetadataValue: Dispatch<SetStateAction<string>>;
};

export type DeleteMetadataModalProps = {
  title: string;
  name: string;
  type: string;
  isOpen: boolean;
  close: () => void;
  onConfirm: () => void;
  loading: boolean;
  list: MetaListItem[];
  bulkDeleteIds: string[] | undefined;
};
