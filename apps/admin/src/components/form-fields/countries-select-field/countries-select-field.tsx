import { FieldValues, SelectField, SelectFieldProps } from "ui-components";

import useCountriesSelectField from "./use-countries-select-field";

type BusinessIndustriesSelectFieldProps<
  TFormValues extends FieldValues = FieldValues
> = Omit<SelectFieldProps<TFormValues>, "options">;

const CountriesSelectField = <TFormValues extends FieldValues = FieldValues>({
  ...props
}: BusinessIndustriesSelectFieldProps<TFormValues>) => {
  const options = useCountriesSelectField();

  return <SelectField<TFormValues> {...props} options={options} />;
};

export type { BusinessIndustriesSelectFieldProps };

export default CountriesSelectField;
