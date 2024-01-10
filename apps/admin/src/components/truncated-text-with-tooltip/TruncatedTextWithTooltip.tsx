import clsx from "clsx";
import { FC, memo } from "react";
import { Text, TextProps, TextVariant, Tooltip } from "ui-components";

import useTruncatedTextWithTooltip from "./use-truncated-text-with-tooltip";

export type TruncatedTextWithTooltipProps = Omit<
  TextProps,
  "onMouseEnter" | "onMouseLeave"
> & {
  text: string;
};

const TruncatedTextWithTooltip: FC<TruncatedTextWithTooltipProps> = ({
  text,
  customClasses,
  ...defaultTextProps
}) => {
  const { isTooltipVisible, onMouseEnter, onMouseLeave } =
    useTruncatedTextWithTooltip();

  if (isTooltipVisible) {
    return (
      <Tooltip
        triggerEl={
          <Text
            {...defaultTextProps}
            customClasses={clsx("truncate", customClasses)}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            {text}
          </Text>
        }
        contentEl={
          <Text
            variant={TextVariant.BUTTON2}
            customClasses="font-semibold text-white"
          >
            {text}
          </Text>
        }
      />
    );
  }

  return (
    <Text
      {...defaultTextProps}
      customClasses={clsx("truncate", customClasses)}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {text}
    </Text>
  );
};

export default memo(TruncatedTextWithTooltip);
