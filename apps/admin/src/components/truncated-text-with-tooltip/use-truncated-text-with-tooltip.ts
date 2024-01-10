import { MouseEventHandler, useState } from "react";

import {
  UseTruncatedTextWithTooltip,
  UseTruncatedTextWithTooltipReturn,
} from "./types";

const useTruncatedTextWithTooltip: UseTruncatedTextWithTooltip =
  (): UseTruncatedTextWithTooltipReturn => {
    const [isTooltipVisible, setIsTooltipVisible] = useState<boolean>(false);

    const onMouseEnter: MouseEventHandler<HTMLSpanElement> = (event) => {
      const element = event.currentTarget;

      if (element.offsetWidth < element.scrollWidth) {
        setIsTooltipVisible(true);
      }
    };

    const onMouseLeave = () => {
      setIsTooltipVisible(false);
    };

    return { isTooltipVisible, onMouseEnter, onMouseLeave };
  };

export default useTruncatedTextWithTooltip;
