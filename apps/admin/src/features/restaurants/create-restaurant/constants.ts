import { ObjectSchema, mixed, object, string } from "ui-components";
import { Option } from "ui-components/src/select/types";

import { RestaurantFormModel } from "./types";

export const VALIDATION_SCHEMA: ObjectSchema<RestaurantFormModel> =
  object().shape({
    name: string().required("Name is required"),
    description: string(),
    address: string().required("Address is required"),
    city: string().required("City is required"),
    state: string().required("State is required"),
    country: string().required("Country is required"),
    menuId: mixed<Option>().required("Menu is required").nullable(),
  });

export const DEFAULT_VALUES: RestaurantFormModel = {
  name: "",
  description: "",
  address: "",
  city: "",
  state: "",
  country: "",
  menuId: null,
};
