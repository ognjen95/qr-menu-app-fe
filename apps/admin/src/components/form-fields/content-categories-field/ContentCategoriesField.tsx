import { SelectField, SelectFieldProps, FieldValues } from "ui-components";

import useSelectCreateValidation from "~hooks/use-content-create-validation";

import useContentCategories from "./use-content-categories";

export type ContentCategoriesFieldProps<
  TFormValues extends FieldValues = FieldValues
> = Omit<SelectFieldProps<TFormValues>, "options"> & {
  onAddNewOption?: (value: string, categoryId?: string) => void;
};

const ContentCategoriesField = <TFormValues extends FieldValues = FieldValues>({
  onAddNewOption,
  ...props
}: ContentCategoriesFieldProps<TFormValues>) => {
  const { options, createCategory, fetchMoreCategories, searchCategories } =
    useContentCategories();
  const { errorMessage, validate } = useSelectCreateValidation();

  return (
    <SelectField<TFormValues>
      addNewOption={(value) => {
        const validatedString = validate(value);
        if (!validatedString) return;

        createCategory(validatedString, (categoryId: string) => {
          if (!onAddNewOption) return;
          onAddNewOption(validatedString, categoryId);

          if (props.control.getFieldState(props.fieldName)?.error)
            props.control.setError(props.fieldName, { message: "" });
        });
      }}
      isMultiSelect
      {...props}
      {...(errorMessage && {
        errorMessage,
      })}
      options={options}
      onMenuScrollToBottom={fetchMoreCategories}
      onInputChange={searchCategories}
    />
  );
};

export default ContentCategoriesField;
