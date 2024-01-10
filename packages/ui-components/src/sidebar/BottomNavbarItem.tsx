import Text from "../text";
import { TextVariant } from "../text/enums";
import Tooltip from "../tooltip";

export type BottomNavbarItemProps = {
  showTooltip?: boolean;
  text: string;
};

const BottomNavbarItem = ({ showTooltip, text }: BottomNavbarItemProps) => {
  if (showTooltip)
    return (
      <Tooltip
        triggerEl={
          <Text
            customClasses="truncate block"
            variant={TextVariant.BODY3}
            color="currentColor"
          >
            {text}
          </Text>
        }
        contentEl={
          <Text
            variant={TextVariant.BODY4}
            customClasses="font-semibold text-white"
          >
            {text}
          </Text>
        }
      />
    );

  return (
    <Text variant={TextVariant.BODY3} color="currentColor">
      {text}
    </Text>
  );
};

export default BottomNavbarItem;
