import { ObjectSchema, object, string, array } from "ui-components";

import { MenuSectionItemModel } from "../menu-overview/types";

export const DEFAULT_VALUES: MenuSectionItemModel = {
  name: "",
  description: "",
  image: "",
  variants: [{ name: "", price: "" }],
  tags: [],
  alergens: [],
};

export const VALIDATION_SCHEMA: ObjectSchema<MenuSectionItemModel> =
  object().shape({
    name: string()
      .max(50, "Name must be 50 characters or less")
      .required("Name is required"),
    description: string(),
    variants: array()
      .of(
        object().shape({
          name: string(),
          price: string()
            .required("Price is required")
            .test({
              name: "is-price",
              message: "Price must be a number",
              test: (value) => !Number.isNaN(Number(value)),
            }),
        })
      )
      .test({
        name: "is-variant",
        message: "You need to provide at least one variant",
        test: (value) => !((value?.length ?? 0) > 1 && !value?.[0].name),
      })
      .required("You need to provide at least one variant")
      .min(1, "You need to provide at least one variant"),
    image: string(),
    tags: array().of(string().required()).required(),
    alergens: array().of(string().required()).required(),
  });
