import { Option } from "ui-components/src/select/types";

export type RestaurantFormModel = {
  name: string;
  description?: string;
  address: string;
  country: string;
  city: string;
  state: string;
  menuId: Option | null;
};
