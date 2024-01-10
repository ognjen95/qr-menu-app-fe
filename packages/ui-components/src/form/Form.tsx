import clsx from "clsx";
import { ReactElement } from "react";
import { FieldValues, SubmitHandler, UseFormReturn } from "react-hook-form";

export type FormProps<TFormValues extends FieldValues = FieldValues> = {
  form: UseFormReturn<TFormValues>;
  children: (methods: UseFormReturn<TFormValues>) => ReactElement;
  formName?: string;
  onSubmit?: SubmitHandler<TFormValues>;
  fullHeight?: boolean;
  fullWidth?: boolean;
};

const Form = <TFormValues extends FieldValues = FieldValues>({
  formName,
  form,
  onSubmit = () => {},
  children,
  fullHeight = true,
  fullWidth = false,
}: FormProps<TFormValues>) => (
  <form
    id={formName}
    onSubmit={form.handleSubmit(onSubmit)}
    className={clsx("flex flex-col", {
      "full-height": fullHeight,
      "w-full": fullWidth,
    })}
  >
    {children(form)}
  </form>
);

export default Form;
