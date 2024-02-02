import clsx from "clsx";
import { forwardRef, memo, ReactNode } from "react";

import {
  COLOR_CLASS_MAPPER,
  LOADING_COLOR_CLASS_MAPPER,
  SIZE_CLASS_MAPPER,
} from "./constants";
import { ButtonColor, ButtonSize, ButtonType } from "./enums";
import { colors } from "../config/tailwind-config";
import Icon, { IconProps } from "../icon/Icon";
import Loader, { LoaderSize } from "../loader";

export type ButtonProps = {
  onClick?: () => void;
  formName?: string;
  type?: ButtonType;
  size?: ButtonSize;
  color?: ButtonColor;
  loading?: boolean;
  disabled?: boolean;
  children?: ReactNode;
  leftIcon?: IconProps;
  rightIcon?: IconProps;
  fullWidth?: boolean;
  isActive?: boolean;
  shadow?: boolean;
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      onClick,
      children,
      formName,
      rightIcon,
      leftIcon,
      size = ButtonSize.MEDIUM,
      color = ButtonColor.PRIMARY,
      type = ButtonType.BUTTON,
      loading = false,
      disabled = false,
      fullWidth = false,
      isActive = false,
      shadow,
    },
    ref
  ) => (
    <button
      type={formName ? "submit" : "button"}
      className={clsx(SIZE_CLASS_MAPPER[type][size], "rounded-full active", {
        shadow,
        [COLOR_CLASS_MAPPER[type][color]]: !loading,
        [LOADING_COLOR_CLASS_MAPPER[color]]: loading,
        "w-full": fullWidth,
        "w-fit": !fullWidth,
        "bg-[#0000001a]":
          isActive &&
          (color === ButtonColor.TRANSPARENT ||
            color === ButtonColor.TRANSPARENT_LIGHT),
      })}
      disabled={disabled || loading}
      form={formName}
      key={formName}
      ref={ref}
      onClick={onClick}
    >
      <div className="flex items-center justify-center">
        {leftIcon && (
          <div className="mr-3">
            <Icon {...leftIcon} />
          </div>
        )}
        {loading && (
          <div className="mr-3">
            <Loader
              customColor={
                [ButtonColor.GREY, ButtonColor.TRANSPARENT].includes(color)
                  ? colors.grey[900]
                  : colors.white
              }
              size={LoaderSize.SMALL}
            />
          </div>
        )}
        <span
          className={clsx("leading-4 font-medium tracking-[0.02em]", {
            "text-base": size !== ButtonSize.SMALL || type !== ButtonType.LINK,
            "text-sm": size === ButtonSize.SMALL || type === ButtonType.LINK,
          })}
        >
          {children}
        </span>
        {rightIcon && (
          <div className="ml-3">
            <Icon {...rightIcon} />
          </div>
        )}
      </div>
    </button>
  )
);

export default memo(Button);
