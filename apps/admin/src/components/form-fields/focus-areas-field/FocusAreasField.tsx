import { FieldValues, SelectField, SelectFieldProps } from "ui-components";

import useSelectCreateValidation from "~hooks/use-content-create-validation";

import useFocusAreas from "./use-focus-areas";

export type ContentTypesFieldProps<
  TFormValues extends FieldValues = FieldValues
> = Omit<SelectFieldProps<TFormValues>, "options"> & {
  onAddNewOption?: (value: string, focusAreaId?: string) => void;
};

const FocusAreaField = <TFormValues extends FieldValues = FieldValues>({
  onAddNewOption,
  ...props
}: ContentTypesFieldProps<TFormValues>) => {
  const { options, createFocusArea, fetchMoreFocusAreas, searchFocusAreas } =
    useFocusAreas();
  const { errorMessage, validate } = useSelectCreateValidation();

  return (
    <SelectField<TFormValues>
      addNewOption={(value) => {
        const validatedString = validate(value);
        if (!validatedString) return;

        createFocusArea(validatedString, () => {
          if (!onAddNewOption) return;
          onAddNewOption(validatedString);

          if (props.control.getFieldState(props.fieldName)?.error)
            props.control.setError(props.fieldName, { message: "" });
        });
      }}
      {...props}
      {...(errorMessage && {
        errorMessage,
      })}
      onMenuScrollToBottom={fetchMoreFocusAreas}
      options={options}
      onInputChange={searchFocusAreas}
    />
  );
};

export default FocusAreaField;
