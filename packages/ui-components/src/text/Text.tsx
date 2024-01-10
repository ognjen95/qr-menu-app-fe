import clsx from "clsx";
import { memo, MouseEventHandler } from "react";
import { twMerge } from "tailwind-merge";

import {
  FONT_WEIGHT_CLASS_MAPPER,
  H1_VARIANTS,
  H2_VARIANTS,
  H3_VARIANTS,
  H4_VARIANTS,
  H5_VARIANTS,
  H6_VARIANTS,
  TEXT_SIZE_CLASS_MAPPER,
} from "./constants";
import { TextVariant } from "./enums";
import { FCWithChildren } from "../common/types";

export type TextProps = {
  variant?: TextVariant;
  color?: string;
  customClasses?: string;
  truncate?: boolean;
  onMouseEnter?: MouseEventHandler<HTMLSpanElement>;
  onMouseLeave?: () => void;
};

const Text: FCWithChildren<TextProps> = ({
  variant = TextVariant.BODY3,
  children,
  color,
  customClasses = "",
  truncate = false,
  onMouseEnter,
  onMouseLeave,
}) => {
  const classes = twMerge(
    clsx(
      TEXT_SIZE_CLASS_MAPPER[variant],
      FONT_WEIGHT_CLASS_MAPPER[variant],
      color,
      {
        "tracking-[0.02em]": [
          TextVariant.BODY1,
          TextVariant.BODY2,
          TextVariant.BODY3,
          TextVariant.BODY4,
          TextVariant.BUTTON1,
          TextVariant.BUTTON2,
          TextVariant.OVERLINE,
        ].includes(variant),
        "text-gray-900": !color,
        "text-ellipsis overflow-hidden whitespace-nowrap": truncate,
      },
      customClasses
    )
  );

  if (H1_VARIANTS.includes(variant)) {
    return (
      <h1
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className={classes}
      >
        {children}
      </h1>
    );
  }

  if (H2_VARIANTS.includes(variant)) {
    return (
      <h2
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className={classes}
      >
        {children}
      </h2>
    );
  }

  if (H3_VARIANTS.includes(variant)) {
    return (
      <h3
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className={classes}
      >
        {children}
      </h3>
    );
  }

  if (H4_VARIANTS.includes(variant)) {
    return (
      <h4
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className={classes}
      >
        {children}
      </h4>
    );
  }

  if (H5_VARIANTS.includes(variant)) {
    <h5
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={classes}
    >
      {children}
    </h5>;
  }

  if (H6_VARIANTS.includes(variant)) {
    <h6
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={classes}
    >
      {children}
    </h6>;
  }

  return (
    <span
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={classes}
    >
      {children}
    </span>
  );
};

export default memo(Text);
