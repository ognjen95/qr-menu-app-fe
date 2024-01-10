import clsx from "clsx";
import { FC } from "react";
import ReactDatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import Label from "../label";
import Text from "../text";

export type DatePickerProps = {
  label?: string;
  disabled?: boolean;
  errorMessage?: string;
  value?: Date | null | undefined;
  minDate?: Date;
  maxDate?: Date;
  onChange: (date: Date | null) => void;
};

const DatePicker: FC<DatePickerProps> = ({
  label,
  disabled = false,
  errorMessage,
  value,
  minDate,
  maxDate,
  onChange,
}) => (
  <div className={clsx("w-full")}>
    {label && <Label text={label} />}

    <ReactDatePicker
      minDate={minDate}
      maxDate={maxDate}
      onChange={onChange}
      selected={value}
      wrapperClassName="w-full"
      className={clsx(
        "w-full border text-sm px-2 text-gray-700 h-[42px] rounded-[3px] outline-none",
        {
          "border-error": !!errorMessage,
          "border-gray-300": !errorMessage,
          "focus:border-primary": !errorMessage,
        }
      )}
      disabled={disabled}
    />
    {errorMessage && (
      <div className="field-error">
        <Text>{errorMessage}</Text>
      </div>
    )}
  </div>
);

export default DatePicker;
