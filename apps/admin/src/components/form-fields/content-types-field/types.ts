import { Option } from "ui-components/src/select/types";

export type UseContentTypeReturn = {
  options: Array<Option>;
  createType: (name: string, onComplete?: (typeId?: string) => void) => void;
  fetchMoreTypes: () => void;
  searchTypes: (value: string) => void;
};
