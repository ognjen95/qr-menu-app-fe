import { Item as RadixDropdownItem } from "@radix-ui/react-dropdown-menu";
import clsx from "clsx";
import { FC, SyntheticEvent } from "react";

import DropDownMenuItemText from "./DropdownItemText";
import { CustomDropdownMenuItem, DropdownMenuItem } from "./types";
import { colors } from "../config/tailwind-config";
import Icon from "../icon/Icon";
import { TextVariant } from "../text/enums";
import Text from "../text/Text";
import Tooltip from "../tooltip";

type DropdownItemProps = {
  menuItem: DropdownMenuItem | CustomDropdownMenuItem;
  onClick: (shouldClose: boolean, label?: string) => void;
  selectedItemLabel?: string;
};

const DropdownItem: FC<DropdownItemProps> = ({
  menuItem,
  onClick,
  selectedItemLabel,
}) => {
  const {
    label: itemLabel,
    onClick: onItemClick,
    key,
    disabled,
    tooltipMessage,
    iconType,
    iconFill,
    iconSize,
    iconStroke,
  } = (menuItem as DropdownMenuItem) ?? {};
  const { label: customComponentLabel, component: customComponent } =
    (menuItem as CustomDropdownMenuItem) ?? {};
  const isCustomComponent = !!customComponent;

  return (
    <RadixDropdownItem
      key={key}
      className={clsx("outline-0 group flex  p-4 rounded", {
        "flex-col justify-start": isCustomComponent,
        "items-center justify-start": !isCustomComponent,
        "cursor-not-allowed": disabled,
        "cursor-pointer": !disabled && !isCustomComponent,
        "hover:bg-grey-50": !disabled,
      })}
      onClick={(event: SyntheticEvent<HTMLDivElement, Event>) => {
        event.stopPropagation();
        if (disabled) {
          return;
        }

        if (isCustomComponent) {
          onClick(false);
          return;
        }
        onClick(true, itemLabel);
        onItemClick();
      }}
    >
      {iconType && !isCustomComponent && (
        <div className="mr-4">
          <Icon
            type={iconType}
            stroke={
              selectedItemLabel === itemLabel ? colors.primary[500] : iconStroke
            }
            fill={iconFill}
            size={iconSize}
          />
        </div>
      )}
      {tooltipMessage && (
        <Tooltip
          triggerEl={
            <DropDownMenuItemText
              disabled={disabled}
              customComponentLabel={customComponentLabel}
              isCustomComponent={!!customComponent}
              itemLabel={itemLabel}
              selectedItemLabel={selectedItemLabel}
            />
          }
          contentEl={
            <Text
              variant={TextVariant.BODY4}
              customClasses="font-semibold text-white"
            >
              {tooltipMessage}
            </Text>
          }
        />
      )}
      {!tooltipMessage && (
        <DropDownMenuItemText
          disabled={disabled}
          customComponentLabel={customComponentLabel}
          isCustomComponent={!!customComponent}
          itemLabel={itemLabel}
          selectedItemLabel={selectedItemLabel}
        />
      )}
      {customComponent && (
        <div className="block cursor-pointer">{customComponent}</div>
      )}
    </RadixDropdownItem>
  );
};

export default DropdownItem;
