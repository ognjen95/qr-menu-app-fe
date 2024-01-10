import { Option } from "ui-components/src/select/types";

export type UseContentCategoriesReturn = {
  options: Array<Option>;
  createCategory: (
    name: string,
    onComplete?: (categoryId?: string) => void
  ) => void;
  fetchMoreCategories: () => void;
  searchCategories: (value: string) => void;
};
