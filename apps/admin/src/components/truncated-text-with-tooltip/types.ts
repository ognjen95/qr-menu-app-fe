import { MouseEventHandler } from "react";

export type UseTruncatedTextWithTooltipReturn = {
  isTooltipVisible: boolean;
  onMouseEnter: MouseEventHandler<HTMLSpanElement>;
  onMouseLeave: () => void;
};

export type UseTruncatedTextWithTooltip =
  () => UseTruncatedTextWithTooltipReturn;
