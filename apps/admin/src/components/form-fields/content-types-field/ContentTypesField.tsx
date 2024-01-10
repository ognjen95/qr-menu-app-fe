import { SelectField, SelectFieldProps, FieldValues } from "ui-components";

import useSelectCreateValidation from "~hooks/use-content-create-validation";

import useContentTypes from "./use-content-types";

export type ContentTypesFieldProps<
  TFormValues extends FieldValues = FieldValues
> = Omit<SelectFieldProps<TFormValues>, "options"> & {
  onAddNewOption?: (value: string, typeId?: string) => void;
};

const ContentTypesField = <TFormValues extends FieldValues = FieldValues>({
  onAddNewOption,
  isMultiSelect,
  ...props
}: ContentTypesFieldProps<TFormValues>) => {
  const { options, createType, fetchMoreTypes, searchTypes } =
    useContentTypes();
  const { errorMessage, validate } = useSelectCreateValidation();

  return (
    <SelectField<TFormValues>
      addNewOption={(value) => {
        const validatedString = validate(value);
        if (!validatedString) return;

        createType(validatedString, (typeId) => {
          if (!onAddNewOption) return;

          onAddNewOption(validatedString, typeId);

          if (props.control.getFieldState(props.fieldName)?.error)
            props.control.setError(props.fieldName, { message: "" });
        });
      }}
      isMultiSelect={isMultiSelect}
      {...props}
      // TODO: Check why we are late 1 render if we don't spread like this
      {...(errorMessage && {
        errorMessage,
      })}
      onMenuScrollToBottom={fetchMoreTypes}
      options={options}
      onInputChange={searchTypes}
    />
  );
};

export default ContentTypesField;
