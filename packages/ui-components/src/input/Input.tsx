import clsx from "clsx";
import { ChangeEventHandler, forwardRef, KeyboardEventHandler } from "react";

import { COLORS_CLASS_MAPPER, SIZES_CLASS_MAPPER } from "./constants";
import { IconPlacement, InputColor, InputSize, InputType } from "./enums";
import { colors } from "../config/tailwind-config";
import { IconSize, IconType } from "../icon/enums";
import Icon from "../icon/Icon";
import Label from "../label";
import Text from "../text";

export type InputProps = {
  placeholder?: string;
  type?: InputType;
  size?: InputSize;
  color?: InputColor;
  errorMessage?: string;
  disabled?: boolean;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
  label?: string;
  iconType?: IconType;
  iconColor?: string;
  strokeColor?: string;
  onIconClick?: () => void;
  iconPlacement?: IconPlacement;
  autoFocus?: boolean;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      placeholder = "",
      type = InputType.TEXT,
      size = InputSize.RESPONSIVE,
      color = InputColor.PRIMARY,
      iconPlacement = IconPlacement.RIGHT,
      disabled = false,
      errorMessage,
      autoFocus = false,
      value,
      label,
      onChange,
      onKeyDown,
      iconType,
      iconColor,
      strokeColor,
      onIconClick,
      ...props
    },
    ref
  ) => (
    <div className="w-full">
      {label && <Label text={label} />}
      <div
        className={clsx(
          "w-full text-gray-900 rounded-2xl sm:text-md flex items-center justify-between border",
          {
            "border-grey-200 bg-transparent": disabled,
            "border-transparent focus:border-grey-800 hover:border-grey-300":
              !errorMessage && !disabled && color !== InputColor.TRANSPARENT,
            "border-red-500": !!errorMessage,
          },
          !errorMessage && !disabled
            ? COLORS_CLASS_MAPPER[color]
            : COLORS_CLASS_MAPPER[InputColor.ERROR],
          SIZES_CLASS_MAPPER[size]
        )}
      >
        {iconType && iconPlacement === IconPlacement.LEFT && (
          <div
            className={clsx("pl-3", {
              "cursor-pointer": !!onIconClick,
            })}
            onClick={onIconClick}
          >
            <Icon
              type={iconType}
              fill={iconColor}
              stroke={strokeColor || iconColor}
            />
          </div>
        )}
        <input
          ref={ref}
          className={clsx(
            "h-2/3 w-full px-4 border-0 focus:outline-none border-transparent bg-inherit rounded-2xl"
          )}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          onKeyDown={onKeyDown}
          value={value}
          disabled={disabled}
          {...props}
          // eslint-disable-next-line jsx-a11y/no-autofocus
          autoFocus={autoFocus}
        />
        {iconType && iconPlacement === IconPlacement.RIGHT && (
          <div
            className={clsx("pr-3", {
              "cursor-pointer": !!onIconClick,
            })}
            onClick={onIconClick}
          >
            <Icon
              type={iconType}
              fill={iconColor}
              stroke={strokeColor || iconColor}
            />
          </div>
        )}
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
  )
);

export default Input;
