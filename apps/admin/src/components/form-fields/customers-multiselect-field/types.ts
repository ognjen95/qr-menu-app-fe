import { Option } from "ui-components/src/select/types";

export type UseCustomersMultiselectFieldReturn = {
  options: Array<Option>;
  fetchMoreCustomers: () => void;
  searchCustomers: (value: string) => void;
};
