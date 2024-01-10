import { FieldValues } from "react-hook-form";

import FileUploadInput, {
  FileUploadInputProps,
} from "../../../file-upload-input";
import useFormController, {
  UseFormControllerOptions,
} from "../../use-form-controller";

type NewType<TFormValues extends FieldValues> =
  UseFormControllerOptions<TFormValues>;

export type FileUploadInputFieldProps<
  TFormValues extends FieldValues = FieldValues
> = Omit<FileUploadInputProps, "onChange"> & NewType<TFormValues>;

const FileUploadInputField = <TFormValues extends FieldValues = FieldValues>({
  fieldName,
  control,
  ...fileUploadInputProps
}: FileUploadInputFieldProps<TFormValues>) => {
  const { field, fieldState } = useFormController<TFormValues>({
    fieldName,
    control,
  });

  return (
    <FileUploadInput
      {...fileUploadInputProps}
      {...field}
      errorMessage={fieldState.error?.message}
      onChange={(files) => field.onChange(files?.[0])}
      value={field.value}
    />
  );
};

export default FileUploadInputField;
