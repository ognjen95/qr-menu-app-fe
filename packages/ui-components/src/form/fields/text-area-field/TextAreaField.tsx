import { ForwardedRef, forwardRef } from "react";
import { FieldValues } from "react-hook-form";

import TextArea, { TextAreaProps } from "../../../text-area";
import useFormController, {
  UseFormControllerOptions,
} from "../../use-form-controller";

export type TextAreaFieldProps<TFormValues extends FieldValues = FieldValues> =
  Omit<TextAreaProps, "onChange"> & UseFormControllerOptions<TFormValues>;

const TextAreaField = <TFormValues extends FieldValues = FieldValues>(
  {
    fieldName,
    control,
    defaultValue,
    ...textareaProps
  }: TextAreaFieldProps<TFormValues>,
  ref?: ForwardedRef<HTMLTextAreaElement>
) => {
  const {
    field,
    fieldState: { error },
  } = useFormController<TFormValues>({ fieldName, control, defaultValue });

  return (
    <TextArea
      {...field}
      {...textareaProps}
      ref={ref}
      errorMessage={error?.message}
    />
  );
};

export default forwardRef(TextAreaField) as <
  TFormValues extends FieldValues = FieldValues
>(
  props: TextAreaFieldProps<TFormValues> & {
    ref?: ForwardedRef<HTMLTextAreaElement>;
  }
) => ReturnType<typeof TextAreaField>;
