import * as RadixDropdownMenu from "@radix-ui/react-dropdown-menu";
import clsx from "clsx";
import { FC, ReactNode, useEffect, useState } from "react";

import DropDownMenuContent from "./DropdownMenuContent";
import { CustomDropdownMenuItem, DropdownMenuItem } from "./types";
import Badge from "../badge";
import Button from "../button";
import { ButtonColor, ButtonSize } from "../button/enums";
import { colors } from "../config/tailwind-config";
import { IconSize, IconType } from "../icon/enums";
import IconButton from "../icon-button";
import LoaderWrapper from "../loader-wrapper/LoaderWrapper";
import Text from "../text";
import { TextVariant } from "../text/enums";

export type DropdownMenuProps = {
  items: Array<DropdownMenuItem | CustomDropdownMenuItem>;
  iconType?: IconType;
  iconSize?: IconSize;
  iconColor?: string;
  label?: string;
  triggerButtonColor?: ButtonColor;
  triggerButtonSize?: ButtonSize;
  actionButtons?: ReactNode;
  showSelectedLabel?: boolean;
  isIconButton?: boolean;
  triggerClassNames?: string;
  badgeNumber?: number;
  onClearButtonClick?: () => void;
  onOpen?: () => void;
  isScrollable?: boolean;
  isLoading?: boolean;
};

const DropdownMenu: FC<DropdownMenuProps> = ({
  iconType = IconType.CARET_DOWN,
  iconColor = colors.grey[900],
  triggerButtonColor = ButtonColor.TRANSPARENT,
  triggerButtonSize = ButtonSize.SMALL,
  iconSize,
  items,
  label,
  actionButtons,
  badgeNumber,
  isIconButton = false,
  showSelectedLabel = true,
  triggerClassNames,
  onClearButtonClick,
  onOpen,
  isScrollable = false,
  isLoading = false,
}) => {
  const [selectedItemLabel, setSelectedItemLabel] = useState<string>(
    items.length > 0 ? items[0].label : ""
  );
  const [isOpen, setIsOpen] = useState(false);

  const handleOnMenuItemClick = (shouldClose: boolean, itemLabel?: string) => {
    if (shouldClose) setIsOpen(false);
    if (itemLabel) setSelectedItemLabel(itemLabel);
  };

  useEffect(() => {
    if (onOpen && isOpen) {
      onOpen?.();
    }
  }, [onOpen, isOpen]);

  return (
    <RadixDropdownMenu.Root open={isOpen}>
      <RadixDropdownMenu.Trigger
        asChild
        className="outline-0 rounded-2xl"
        onClick={(event) => {
          event.stopPropagation();
          setIsOpen(true);
        }}
      >
        <div className="flex gap-3 cursor-pointer">
          <RadixDropdownMenu.DropdownMenuLabel>
            <div className="w-max">
              {isIconButton ? (
                <IconButton
                  iconProps={{
                    type: iconType,
                    stroke: iconColor,
                    size: iconSize,
                  }}
                  isActive={isOpen}
                />
              ) : (
                <Button
                  size={triggerButtonSize}
                  color={triggerButtonColor}
                  leftIcon={{
                    type: iconType,
                    size: iconSize,
                    fill: iconColor,
                    stroke: iconColor,
                  }}
                  isActive={isOpen}
                  fullWidth
                >
                  <div className="flex items-center space-x-2">
                    <Text
                      variant={TextVariant.BUTTON1}
                      customClasses={triggerClassNames || ""}
                    >
                      {showSelectedLabel ? selectedItemLabel : label}
                    </Text>
                    {!!badgeNumber && <Badge number={badgeNumber} />}
                  </div>
                </Button>
              )}
            </div>
          </RadixDropdownMenu.DropdownMenuLabel>
        </div>
      </RadixDropdownMenu.Trigger>
      <RadixDropdownMenu.Portal>
        <RadixDropdownMenu.Content
          onPointerDownOutside={() => setIsOpen(false)}
          sideOffset={5}
          className={clsx(
            "bg-white rounded-2xl shadow relative z-10 w-fit p-2",
            {
              "pb-2": label || onClearButtonClick || actionButtons,
            }
          )}
        >
          {!isLoading && (
            <DropDownMenuContent
              items={items}
              handleOnMenuItemClick={handleOnMenuItemClick}
              selectedItemLabel={selectedItemLabel}
              isScrollable={isScrollable}
              label={label}
              onClearButtonClick={onClearButtonClick}
              showSelectedLabel={showSelectedLabel}
            />
          )}
          {isLoading && (
            <LoaderWrapper>
              <div className="h-14 bg-grey-200 w-[100px] rounded-md mb-2" />
              <div className="h-14 bg-grey-200 w-[100px] rounded-md mb-2" />
              <div className="h-14 bg-grey-200 w-[100px] rounded-md" />
            </LoaderWrapper>
          )}
          {actionButtons && (
            <div className="p-6 pb-4" onClick={() => setIsOpen(false)}>
              {actionButtons}
            </div>
          )}
        </RadixDropdownMenu.Content>
      </RadixDropdownMenu.Portal>
    </RadixDropdownMenu.Root>
  );
};

export default DropdownMenu;
