import clsx from "clsx";
import { FC, forwardRef, useCallback, useMemo, useState } from "react";
import Select, {
  ActionMeta,
  MenuPlacement,
  MultiValue,
  PropsValue,
  SingleValue,
  components,
  OptionProps,
  SingleValueProps,
} from "react-select";

import { SIZE_CLASS_MAPPER } from "./constants";
import { MenuPlacementOptions, SelectSize } from "./enums";
import SelectPrefixImage from "./SelectPrefixImage";
import { Option } from "./types";
import { colors } from "../config/tailwind-config";
import { IconSize, IconType } from "../icon/enums";
import Icon from "../icon/Icon";
import Label from "../label";
import Text from "../text";

export type SelectProps = {
  options: Array<Option>;
  value?: PropsValue<Option>;
  defaultValue?: PropsValue<Option>;
  label?: string;
  menuPlacement?: MenuPlacement | undefined;
  selectColor?: string;
  disabled?: boolean;
  errorMessage?: string;
  onChange?: (
    newValue: MultiValue<Option> | SingleValue<Option>,
    actionMeta: ActionMeta<Option>
  ) => void;
  size?: SelectSize;
  placeholder?: string;
  isMultiSelect?: boolean;
  addNewOption?: (value: string) => void;
  largeIndicator?: boolean;
  onMenuScrollToBottom?: () => void;
  onInputChange?: (value: string) => void;
};

const SelectInput: FC<SelectProps> = forwardRef<HTMLDivElement, SelectProps>(
  (
    {
      options,
      size = SelectSize.RESPONSIVE,
      errorMessage = "",
      label,
      placeholder = "",
      menuPlacement = MenuPlacementOptions.Bottom,
      selectColor = colors.grey[50],
      disabled = false,
      value,
      isMultiSelect = false,
      largeIndicator = false,
      defaultValue,
      onChange,
      addNewOption,
      onMenuScrollToBottom,
      onInputChange,
    },
    ref
  ) => {
    const [isOpened, setIsOpened] = useState(false);
    const [inputValue, setInputValue] = useState("");

    const handleSetInputValue = useCallback((searchValue: string) => {
      setInputValue(searchValue);
    }, []);

    const inputBgColor = useMemo(() => {
      if (disabled) return "white";

      return errorMessage ? colors.red[50] : selectColor;
    }, [disabled, errorMessage, selectColor]);

    return (
      <div className="relative w-full" ref={ref}>
        {label && <Label text={label} htmlFor="select" />}
        <Select
          onKeyDown={(e) => {
            e.stopPropagation();
            if (e.key === "Enter" && addNewOption) {
              e.preventDefault();
              if (
                options.find(
                  (option) =>
                    option.label.toUpperCase() === inputValue.toUpperCase()
                )
              )
                return;
              addNewOption?.(inputValue);
              setIsOpened(false);
              setInputValue("");
            }
          }}
          noOptionsMessage={() => ""}
          name="select"
          inputValue={inputValue}
          onInputChange={(searchValue) => {
            onInputChange?.(searchValue);
            handleSetInputValue(searchValue);
          }}
          menuIsOpen={isOpened}
          closeMenuOnSelect={!isMultiSelect}
          defaultValue={defaultValue}
          value={value}
          onChange={onChange}
          isDisabled={disabled}
          isMulti={isMultiSelect}
          options={options}
          placeholder={placeholder}
          menuPlacement={menuPlacement}
          menuPortalTarget={document.body}
          menuPosition="fixed"
          unstyled
          onMenuScrollToBottom={() => {
            onMenuScrollToBottom?.();
          }}
          onMenuOpen={() => setIsOpened(true)}
          onMenuClose={() => setIsOpened(false)}
          isClearable={false}
          styles={{
            control: () => ({
              backgroundColor: inputBgColor,
              border: "1px solid",
              borderColor: disabled ? colors.grey[200] : "transparent",
            }),
          }}
          components={{
            Option: ({ children, ...props }) => {
              const prefixImgUrl =
                (props.data as SingleValue<Option>)?.prefixImgUrl ?? "";
              return (
                <components.Option {...(props as OptionProps)}>
                  {prefixImgUrl && <SelectPrefixImage src={prefixImgUrl} />}
                  {children}
                </components.Option>
              );
            },
            SingleValue: ({ children, ...props }) => {
              const prefixImgUrl =
                (props.data as SingleValue<Option>)?.prefixImgUrl ?? "";
              return (
                <components.SingleValue
                  className="flex flex-wrap items-center"
                  {...(props as SingleValueProps)}
                >
                  {prefixImgUrl && <SelectPrefixImage src={prefixImgUrl} />}
                  {children}
                </components.SingleValue>
              );
            },
          }}
          classNames={{
            placeholder: () => "text-grey-600 px-2 text-sm",
            container: () =>
              clsx(
                "rounded-lg w-full flex items-center justify-between text-left text-sm",
                {
                  "border border-red-500": !!errorMessage,
                  "border border-grey-800": !errorMessage && isOpened,
                  "border border-transparent hover:border-grey-300":
                    !errorMessage && !isOpened && selectColor !== "white",
                  "border border-grey-50": selectColor === "white",
                }
              ),
            singleValue: () => "flex items-center",
            valueContainer: () => "flex flex-wrap",
            multiValue: () =>
              "bg-primary-500 rounded-full text-gray-900 px-3 text-xs py-2 m-1 font-semibold uppercase",
            multiValueRemove: () => "ml-2 text-primary-800 scale-[150%]",
            input: (props) => (props.value ? "w-fit p-2" : ""),
            dropdownIndicator: () =>
              clsx(
                "flex items-center justify-center text-grey-600 mr-1",
                largeIndicator ? "w-4 h-4 ml-1" : "w-3 h-3"
              ),
            option: () =>
              "p-2 cursor-pointer hover:bg-primary-50 !flex items-center flex-wrap",
            menuList: () =>
              clsx(
                "overflow-hidden z-[99999] bg-white rounded-[5px] shadow w-full",
                menuPlacement === MenuPlacementOptions.Top ? "mb-2" : "mt-1"
              ),
            control: () =>
              clsx(
                "px-2 rounded-lg w-full flex items-center justify-between",
                SIZE_CLASS_MAPPER[size]
              ),
          }}
        />
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
  }
);

export default SelectInput;
