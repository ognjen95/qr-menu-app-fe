import clsx from "clsx";
import { FC } from "react";

import DropdownItem from "./DropdownItem";
import { CustomDropdownMenuItem, DropdownMenuItem } from "./types";
import Button from "../button";
import { ButtonColor, ButtonSize, ButtonType } from "../button/enums";
import Text from "../text";
import { TextVariant } from "../text/enums";

export type DropDownMenuContentProps = {
  items: Array<DropdownMenuItem | CustomDropdownMenuItem>;
  label?: string;
  isScrollable?: boolean;
  showSelectedLabel?: boolean;
  selectedItemLabel: string;
  handleOnMenuItemClick: (shouldClose: boolean, itemLabel?: string) => void;
  onClearButtonClick?: () => void;
};

const DropDownMenuContent: FC<DropDownMenuContentProps> = ({
  items,
  label,
  selectedItemLabel,
  onClearButtonClick,
  handleOnMenuItemClick,
  isScrollable = false,
  showSelectedLabel = true,
}) => (
  <>
    {(label || onClearButtonClick) && (
      <div className="flex items-center justify-between p-4 pb-2">
        {label && (
          <div>
            <Text customClasses="font-semibold" variant={TextVariant.HEADING6}>
              {label}
            </Text>
          </div>
        )}
        {onClearButtonClick && (
          <Button
            size={ButtonSize.SMALL}
            type={ButtonType.LINK}
            color={ButtonColor.PRIMARY}
            onClick={onClearButtonClick}
          >
            Clear all
          </Button>
        )}
      </div>
    )}
    <div
      className={clsx("w-full ", {
        "max-h-[255px] flex flex-col flex-1 overflow-y-auto": isScrollable,
      })}
    >
      {items.map((menuItem) => (
        <DropdownItem
          menuItem={menuItem}
          key={menuItem.label}
          onClick={handleOnMenuItemClick}
          selectedItemLabel={showSelectedLabel ? selectedItemLabel : ""}
        />
      ))}
    </div>
  </>
);

export default DropDownMenuContent;
