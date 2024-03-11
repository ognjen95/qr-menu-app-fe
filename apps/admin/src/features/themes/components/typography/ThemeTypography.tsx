import clsx from "clsx";
import React, { FC } from "react";

import { TYPOGRAPHY_MAPPER } from "./constants";
import { ComponentTypeUnion } from "./types";
import { ComponentType } from "../../../../app/context/theme-context/enums";
import { useThemeContext } from "../../../../app/context/theme-context/ThemeContext";
import { removeEmptyFields } from "../../../../common/helpers";
import { ThemeComponentProps } from "../types";

const ThemeTypography: FC<ThemeComponentProps<ComponentTypeUnion>> = ({
  type,
  className,
  style,
  props,
}) => {
  const { theme } = useThemeContext();
  const { typography } = theme || {};

  if (!typography) {
    return null;
  }

  const fontSize =
    TYPOGRAPHY_MAPPER[typography.fontSize][type ?? ComponentType.P];

  if (type === ComponentType.H1) {
    return (
      <h1
        className={clsx(className, "leading-[1.2]")}
        style={{
          fontFamily: typography.headers.fontFamily,
          fontWeight: typography.headers.weight,
          color: theme!.colorPallete?.primary,
          fontSize,
          ...removeEmptyFields(style),
        }}
      >
        {props?.value ?? ""}
      </h1>
    );
  }

  if (type === ComponentType.H2) {
    return (
      <h2
        style={{
          fontFamily: typography.headers.fontFamily,
          fontWeight: typography.headers.weight,
          color: theme!.colorPallete?.headers,
          fontSize,
          ...removeEmptyFields(style),
        }}
        className={clsx(className, {})}
      >
        {props?.value ?? ""}
      </h2>
    );
  }

  if (type === ComponentType.H3) {
    return (
      <h3
        style={{
          fontFamily: typography.headers.fontFamily,
          fontWeight: typography.headers.weight,
          color: theme!.colorPallete?.headers,
          fontSize,
          ...removeEmptyFields(style),
        }}
        className={clsx(className, {})}
      >
        {props?.value ?? ""}
      </h3>
    );
  }

  if (type === ComponentType.H4) {
    return (
      <h4
        style={{
          fontFamily: typography.headers.fontFamily,
          fontWeight: typography.headers.weight,
          color: theme!.colorPallete?.primary,
          fontSize,
          ...removeEmptyFields(style),
        }}
        className={clsx(className, {})}
      >
        {props?.value ?? ""}
      </h4>
    );
  }

  if (type === ComponentType.H5) {
    return (
      <h5
        style={{
          fontFamily: typography.headers.fontFamily,
          fontWeight: typography.headers.weight,
          color: theme!.colorPallete?.headers,
          fontSize,
          ...removeEmptyFields(style),
        }}
        className={clsx(className, {})}
      >
        {props?.value ?? ""}
      </h5>
    );
  }

  if (type === ComponentType.H6) {
    return (
      <h6
        style={{
          fontFamily: typography.headers.fontFamily,
          fontWeight: typography.headers.weight,
          color: theme!.colorPallete?.headers,
          fontSize,
          ...removeEmptyFields(style),
        }}
        className={clsx(className, {})}
      >
        {props?.value ?? ""}
      </h6>
    );
  }

  if (type === ComponentType.P) {
    return (
      <p
        style={{
          fontFamily: typography.text.fontFamily,
          fontWeight: typography.text.weight,
          color: theme!.colorPallete?.text,
          fontSize,
          ...removeEmptyFields(style),
        }}
        className={clsx(className, {})}
      >
        {props?.value ?? ""}
      </p>
    );
  }

  return null;
};
export default ThemeTypography;
