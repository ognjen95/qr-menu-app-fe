import { SelectField, SelectFieldProps, FieldValues } from "ui-components";

import useSelectCreateValidation from "~hooks/use-content-create-validation";

import useTagsMultiselectField from "./use-tags-multiselect-field";

export type TagsMultiselectFieldProps<
  TFormValues extends FieldValues = FieldValues
> = Omit<SelectFieldProps<TFormValues>, "options"> & {
  onAddNewOption?: (value: string, tagId?: string) => void;
};

const TagsMultiselectField = <TFormValues extends FieldValues = FieldValues>({
  onAddNewOption,
  ...props
}: TagsMultiselectFieldProps<TFormValues>) => {
  const { options, createTagOption, fetchMoreTags, searchTags } =
    useTagsMultiselectField();
  const { errorMessage, validate } = useSelectCreateValidation();

  return (
    <SelectField<TFormValues>
      addNewOption={(value) => {
        const validatedString = validate(value);
        if (!validatedString) return;

        createTagOption(validatedString, (tagId: string) => {
          if (!onAddNewOption) return;
          onAddNewOption(validatedString, tagId);

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
      onMenuScrollToBottom={fetchMoreTags}
      onInputChange={searchTags}
    />
  );
};

export default TagsMultiselectField;
