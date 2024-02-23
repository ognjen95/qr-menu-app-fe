import clsx from "clsx";
import { ReactNode, forwardRef } from "react";

import { PaperColor, PaperRounded } from "./enums";
import { FCWithChildren } from "../common/types";
import Text from "../text";
import { TextVariant } from "../text/enums";

export type PaperProps = {
  fullHeight?: boolean;
  fullWidth?: boolean;
  allowHover?: boolean;
  showShadow?: boolean;
  color?: PaperColor;
  title?: string;
  titleClassName?: string;
  noPadding?: boolean;
  textWrapperClassName?: string;
  action?: ReactNode;
  titleSize?: TextVariant;
  allowShadowHover?: boolean;
  rounded?: PaperRounded;
  hideTitlePadding?: boolean;
  titleTruncate?: boolean;
  animateUp?: boolean;
  container?: boolean;
  actionEnd?: ReactNode;
  onClick?: () => void;
  children: ReactNode;
};

const Paper = forwardRef<HTMLDivElement, PaperProps>(
  (
    {
      animateUp = false,
      children,
      fullHeight = false,
      fullWidth = false,
      allowHover = false,
      showShadow = true,
      color = PaperColor.WHITE,
      title,
      titleClassName,
      noPadding = false,
      textWrapperClassName,
      titleSize = TextVariant.HEADING6,
      action,
      allowShadowHover = false,
      rounded = PaperRounded.XXL,
      hideTitlePadding = false,
      titleTruncate = false,
      container,
      actionEnd = true,
      onClick,
    },
    ref
  ) => (
    <div
      ref={ref}
      onClick={onClick}
      className={clsx(
        "flex flex-col transition-all ease-in-out duration-300 z-10 border",
        rounded,
        !container && color,
        {
          "shadow-xs shadow-primary-100":
            !container && showShadow && !allowShadowHover,
          "shadow-xs shadow-primary-100 hover:shadow-sm hover:shadow-primary-300 transition-all ease-in-out duration-300":
            !container && allowShadowHover && showShadow,
          "w-full": fullWidth,
          "h-full": fullHeight,
          "hover:bg-gray-100": allowHover,
          "py-4 px-6": !container && !noPadding,
          "p-6": container && !noPadding,
          "p-0": noPadding,
          "border-gray-50": color !== PaperColor.TRANSPARENT && !container,
          "border-transparent": color === PaperColor.TRANSPARENT || container,
          "animate-slideUpAndFade": animateUp,
          "cursor-pointer": onClick,
        }
      )}
    >
      {(title || action) && (
        <div
          className={clsx(
            {
              "mb-5": !hideTitlePadding,
              "justify-between": actionEnd,
            },
            "flex items-center w-full",
            textWrapperClassName
          )}
        >
          <div>
            {title && (
              <Text
                truncate={titleTruncate}
                variant={titleSize ?? TextVariant.HEADING6}
                customClasses={titleClassName}
              >
                {title}
              </Text>
            )}
          </div>
          <div>{action}</div>
        </div>
      )}
      {children}
    </div>
  )
);

export default Paper;
