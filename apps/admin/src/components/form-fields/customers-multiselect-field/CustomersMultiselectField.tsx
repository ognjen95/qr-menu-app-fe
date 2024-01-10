import { SelectField, SelectFieldProps, FieldValues } from "ui-components";

import useSelectCreateValidation from "~hooks/use-content-create-validation";

import useCustomersMultiselectField from "./use-customers-multiselect-field";

export type TagsMultiselectFieldProps<
  TFormValues extends FieldValues = FieldValues
> = Omit<SelectFieldProps<TFormValues>, "options"> & {
  onAddNewOption?: (value: string, tagId?: string) => void;
};

const CustomersMultiselectField = <
  TFormValues extends FieldValues = FieldValues
>({
  onAddNewOption,
  ...props
}: TagsMultiselectFieldProps<TFormValues>) => {
  const { options, fetchMoreCustomers, searchCustomers } =
    useCustomersMultiselectField();
  const { errorMessage } = useSelectCreateValidation();

  return (
    <SelectField<TFormValues>
      isMultiSelect
      {...props}
      {...(errorMessage && {
        errorMessage,
      })}
      options={options}
      onMenuScrollToBottom={fetchMoreCustomers}
      onInputChange={searchCustomers}
    />
  );
};

export default CustomersMultiselectField;
