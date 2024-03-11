import { forwardRef, ForwardedRef } from "react";
import { FieldValues, SelectFieldProps, SelectField } from "ui-components";

import { useGetMenusQuery } from "../../../graphql-api";

export type MenuSelectFieldProps<
  TFormValues extends FieldValues = FieldValues
> = Omit<SelectFieldProps<TFormValues>, "options">;

const MenuSelect = <TFormValues extends FieldValues = FieldValues>(
  { fieldName, control }: MenuSelectFieldProps<TFormValues>,
  ref?: ForwardedRef<HTMLInputElement>
) => {
  const { data } = useGetMenusQuery();

  const options =
    data?.menus.edges.map((menu) => ({
      label: menu.node.name,
      value: menu.node.id,
    })) ?? [];

  return (
    <SelectField
      control={control}
      fieldName={fieldName}
      label="Menus"
      options={options}
      ref={ref}
    />
  );
};

export default forwardRef(MenuSelect) as <
  TFormValues extends FieldValues = FieldValues
>(
  props: MenuSelectFieldProps<TFormValues> & {
    ref?: ForwardedRef<HTMLDivElement>;
  }
) => ReturnType<typeof MenuSelect>;
