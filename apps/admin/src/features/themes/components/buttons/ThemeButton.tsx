import clsx from "clsx";
import React, { FC } from "react";

import {
  ButtonSize,
  ButtonType,
} from "../../../../app/context/theme-context/enums";
import { useThemeContext } from "../../../../app/context/theme-context/ThemeContext";
import {
  ComponentProps,
  CSSStyle,
} from "../../../../app/context/theme-context/types";
import { removeEmptyFields } from "../../../../common/helpers";

export type ThemeButtonProps = {
  style?: CSSStyle;
  props?: ComponentProps;
};

const ThemeButton: FC<ThemeButtonProps> = ({ style, props }) => {
  const { theme } = useThemeContext();

  if (!theme?.buttons) {
    return null;
  }

  return (
    <button
      type="button"
      className={clsx(
        {
          "hover:opacity-90": theme.buttons?.buttonHover,
          "h-10 px-4": theme.buttons.buttonSize === ButtonSize.SMALL,
          "h-12 px-5": theme.buttons.buttonSize === ButtonSize.MEDIUM,
          "h-14 px-6": theme.buttons.buttonSize === ButtonSize.LARGE,
        },
        "active:scale-95 transition-all duration-300 ease-in-out self-center"
      )}
      style={{
        backgroundColor:
          theme.buttons.buttonType === ButtonType.OUTLINED
            ? "transparent"
            : theme.colorPallete?.primary,
        border:
          theme.buttons.buttonType === ButtonType.OUTLINED
            ? `2px solid ${theme.colorPallete?.primary ?? "black"}`
            : "2px solid transparent",
        borderRadius: theme.buttons?.borderRadius,
        ...removeEmptyFields(style),
        color:
          theme.buttons.buttonType === ButtonType.OUTLINED
            ? theme.colorPallete?.primary
            : ((style?.color || theme.colorPallete?.text) as string),
      }}
    >
      {props?.value}
    </button>
  );
};

export default ThemeButton;
