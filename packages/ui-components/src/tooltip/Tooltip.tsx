import * as RadixTooltip from "@radix-ui/react-tooltip";
import { FC, ReactElement } from "react";

import { TooltipPlacement } from "./enums";

export type TooltipProps = {
  placement?: TooltipPlacement;
  triggerEl: ReactElement;
  contentEl: ReactElement;
  showArrow?: boolean;
};

const Tooltip: FC<TooltipProps> = ({
  placement = TooltipPlacement.RIGHT,
  triggerEl,
  contentEl,
  showArrow = false,
}: TooltipProps) => (
  <RadixTooltip.Provider>
    <RadixTooltip.Root>
      <RadixTooltip.Trigger asChild className="flex min-w-0">
        <div>{triggerEl}</div>
      </RadixTooltip.Trigger>
      <RadixTooltip.Portal>
        <RadixTooltip.Content
          side={placement}
          className="inline-flex p-4 justify-center items-center rounded-lg bg-secondary-800 shadow-md z-50 data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade select-none px-[15px] py-[10px] text-[15px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity]"
          sideOffset={5}
        >
          {contentEl}
          {showArrow && <RadixTooltip.TooltipArrow />}
        </RadixTooltip.Content>
      </RadixTooltip.Portal>
    </RadixTooltip.Root>
  </RadixTooltip.Provider>
);

export default Tooltip;
