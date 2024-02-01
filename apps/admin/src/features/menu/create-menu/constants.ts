import { ObjectSchema, object, string } from "ui-components";

import { MenuFormModel } from "./types";

export const VALIDATION_SCHEMA: ObjectSchema<MenuFormModel> = object().shape({
  name: string().required("Name is required"),
  description: string(),
});

export const DEFAULT_VALUES: MenuFormModel = {
  name: "",
  description: "",
};
