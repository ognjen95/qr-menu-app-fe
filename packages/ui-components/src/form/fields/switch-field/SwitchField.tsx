import { forwardRef } from "react";
import { FieldValues } from "react-hook-form";

import Switch, { SwitchProps } from "../../../switch";
import useFormController, {
  UseFormControllerOptions,
} from "../../use-form-controller";

export type SwitchFieldProps<TFormValues extends FieldValues = FieldValues> =
  Omit<SwitchProps, "onChange"> & UseFormControllerOptions<TFormValues>;
const SwitchField = <TFormValues extends FieldValues = FieldValues>({
  fieldName,
  control,
  defaultValue,
  ...switchProps
}: SwitchFieldProps<TFormValues>) => {
  const { field } = useFormController<TFormValues>({
    fieldName,
    control,
    defaultValue,
  });

  return (
    <Switch
      checked={field.value}
      onCheckedChange={(value) => field.onChange(value)}
      {...switchProps}
    />
  );
};
export default forwardRef(SwitchField) as <
  TFormValues extends FieldValues = FieldValues
>(
  props: SwitchFieldProps<TFormValues>
) => ReturnType<typeof SwitchField>;
