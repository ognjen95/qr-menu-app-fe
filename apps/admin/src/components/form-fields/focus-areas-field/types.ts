import { Option } from "ui-components/src/select/types";

export type UseFocusAreasReturn = {
  options: Array<Option>;
  createFocusArea: (name: string, onComplete?: () => void) => void;
  fetchMoreFocusAreas: () => void;
  searchFocusAreas: (value: string) => void;
};
