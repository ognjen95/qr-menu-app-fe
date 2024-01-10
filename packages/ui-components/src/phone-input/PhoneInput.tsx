import clsx from "clsx";
import { FC } from "react";
import { PhoneInput as ReactPhoneInput } from "react-international-phone";

import "react-international-phone/style.css";
import usePhoneInput from "./use-phone-input";
import { colors } from "../config/tailwind-config";
import { IconSize, IconType } from "../icon/enums";
import Icon from "../icon/Icon";
import Label from "../label";
import Text from "../text";

export type PhoneInputProps = {
  label?: string;
  value?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
  errorMessage?: string;
  placeholder?: string;
};

const PhoneInput: FC<PhoneInputProps> = ({
  value,
  label,
  disabled,
  errorMessage,
  placeholder,
  onChange,
}) => {
  const { countries } = usePhoneInput();

  return (
    <div className="w-full">
      {label && <Label text={label} />}
      <div className="flex w-full">
        <ReactPhoneInput
          placeholder={placeholder}
          value={value}
          disabled={disabled}
          onChange={onChange}
          flags={countries}
          inputClassName={clsx(
            "h-[48px] !bg-grey-50 !border-none !h-[48px] !rounded-r-lg !w-full !text-gray-900 !text-base"
          )}
          className="w-full"
          countrySelectorStyleProps={{
            className: "w-fit h-[48px] !bg-grey-50 !rounded-l-lg",
            buttonContentWrapperClassName:
              "h-[48px] border-0 bg-grey-50 !rounded-l-lg pl-2 py-4",
            buttonClassName:
              "!h-[48px] !border-0 !bg-grey-50 bg-transparent !rounded-l-lg !mr-2 after:px-3 after:h-6 after:border-r after:w-[1px] after:border-grey-500 after:flex after:justify-center after:items-center",
            flagClassName:
              "!w-[32px] !h-[32px] rounded-full !ml-4 !mr-2 border-[2px] border-grey-200",
            dropdownArrowClassName: "ml-2",
            dropdownStyleProps: {
              className: "w-full",
              listItemClassName:
                "!p-2 !cursor-pointer !hover:bg-primary-50 !h-9 ",
              listItemCountryNameClassName: "text-sm",
              listItemFlagClassName: "rounded-full",
            },
          }}
        />
      </div>
      {errorMessage && (
        <div className="flex items-center pt-1 gap-2">
          <Icon
            type={IconType.CIRCLE_WARNING}
            size={IconSize.SMALL}
            fill="white"
            stroke={colors.red[500]}
          />
          <Text color="text-red-500">{errorMessage}</Text>
        </div>
      )}
    </div>
  );
};

export default PhoneInput;
