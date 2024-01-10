import { useMemo } from "react";

import { FCWithChildren } from "../common/types";
import Text from "../text";
import { TextVariant } from "../text/enums";

export type DropDownMenuItemTextProps = {
  disabled?: boolean;
  itemLabel: string;
  isCustomComponent: boolean;
  customComponentLabel: string;
  selectedItemLabel?: string;
};

const DropDownMenuItemText: FCWithChildren<DropDownMenuItemTextProps> = ({
  disabled,
  itemLabel,
  isCustomComponent,
  customComponentLabel,
  selectedItemLabel,
}) => {
  const textColor = useMemo(() => {
    let color = "text-grey-600";
    if (disabled) {
      color = "text-grey-200";
    } else if (selectedItemLabel === itemLabel && !isCustomComponent) {
      color = "text-primary-500";
    }
    return color;
  }, [disabled, selectedItemLabel, itemLabel, isCustomComponent]);

  return (
    <Text
      variant={isCustomComponent ? TextVariant.OVERLINE : TextVariant.BUTTON2}
      color={textColor}
    >
      {itemLabel || customComponentLabel}
    </Text>
  );
};

export default DropDownMenuItemText;
