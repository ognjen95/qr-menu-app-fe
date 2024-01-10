import { FC } from "react";
import { DropdownMenu, Icon, IconType, Text, TextVariant } from "ui-components";
import { DropdownMenuItems } from "ui-components/src/dropdown-menu/types";

import TruncatedTextWithTooltip from "~components/truncated-text-with-tooltip/TruncatedTextWithTooltip";

export type SimpleCardProps = {
  name: string;
  description?: string;
  onOpen?: () => void;
  onDropdownMenuOpen?: () => void;
  iconType: IconType;
  dropDownMenuItems?: DropdownMenuItems;
  nameVariant?: TextVariant;
};

const SimpleCard: FC<SimpleCardProps> = ({
  name,
  onOpen,
  onDropdownMenuOpen,
  iconType,
  dropDownMenuItems,
  description,
  nameVariant,
}) => (
  <div
    className="py-2 px-4 flex justify-between items-center bg-white rounded-lg h-[64px] cursor-pointer hover:shadow-[0_4px_8px_0_rgba(120,131,149,0.24)] "
    onClick={(event) => {
      onOpen?.();
      event.stopPropagation();
    }}
  >
    <div className="flex flex-row items-center min-w-0">
      <div className="mr-4">
        <Icon type={iconType} />
      </div>
      <div className="flex flex-col min-w-0">
        <TruncatedTextWithTooltip
          text={name.toLocaleLowerCase()}
          variant={nameVariant ?? TextVariant.BUTTON2}
          customClasses="capitalize"
        />
        {description && (
          <Text variant={TextVariant.BODY4} color="text-grey-500">
            {description}
          </Text>
        )}
      </div>
    </div>
    {!!dropDownMenuItems && (
      <DropdownMenu
        isIconButton
        iconType={IconType.MORE_VERTICAL}
        showSelectedLabel={false}
        items={dropDownMenuItems}
        onOpen={onDropdownMenuOpen}
      />
    )}
  </div>
);

export default SimpleCard;
