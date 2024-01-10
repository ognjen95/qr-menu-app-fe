import { Option } from "ui-components/src/select/types";

export type UseTagsMultiselectFieldReturn = {
  options: Array<Option>;
  createTagOption: (
    name: string,
    onComplete?: (tagId?: string) => void
  ) => void;
  fetchMoreTags: () => void;
  searchTags: (value: string) => void;
};
