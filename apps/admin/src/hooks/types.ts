import { PrimitiveAtom } from "jotai";
import { ContentPreviewModel } from "ui-components";
import { UseModalReturn } from "ui-components/src/modal/useModal";

export type UseContentCreateValidationReturn = {
  validate: (str: string) => string | false;
  errorMessage?: string;
};

export type UseDebounceReturn = [string, (value: string) => void];

export type WithInitialValue<Value> = {
  init: Value;
};

export type UseDebounceAtomReturn = {
  value: string;
  setValue: (searchTerm: string) => void;
  debouncedValue: string;
};

export type UseDebounceAtom = (
  atom: PrimitiveAtom<string> & WithInitialValue<string>,
  delay?: number
) => UseDebounceAtomReturn;

export type UseUploadFileReturn = {
  // getPresignedUrlAndUpload: (file: File) => Promise<string>;
  upload: (file: File, url: string) => Promise<boolean>;
  // getPresignedUrl: (file: File) => Promise<{ url: string; fileName: string }>;
}

export type UseUploadFile = () => UseUploadFileReturn;

export type UseContentPreviewReturn = {
  modal: UseModalReturn<ContentPreviewModel> & {
    open: (contentItem: ContentPreviewModel) => void;
  };
  content: Partial<ContentPreviewModel | null>;
};

export type UseTrackRouterHistory = () => void;

export type UseBackNavigationReturn = {
  back: (defaultNavigationPath: string) => void;
};

export type UseBackNavigation = () => UseBackNavigationReturn;
