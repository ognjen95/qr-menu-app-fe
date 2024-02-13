import React, { FC } from "react";
import {
  IconButton,
  IconType,
  IconSize,
  TextVariant,
  Text,
} from "ui-components";

export type ExtendedSidebarProps = {
  close: () => void;
  title: string;
  children: React.ReactNode;
  onBack?: () => void;
};
const ExtendedSidebar: FC<ExtendedSidebarProps> = ({
  close,
  title,
  children,
  onBack,
}) => (
  <>
    <div className="flex items-center justify-between border-b pb-2 mb-2">
      <div className="flex items-center space-x-2">
        {onBack && (
          <IconButton
            iconProps={{
              type: IconType.ARROW_LEFT_LG,
              size: IconSize.LARGE,
              onClick: onBack,
            }}
          />
        )}
        <Text variant={TextVariant.HEADING5} color="text-primary-500">
          {title}
        </Text>
      </div>
      <IconButton
        iconProps={{
          type: IconType.CLOSE,
          size: IconSize.LARGE,
          onClick: close,
        }}
      />
    </div>
    {children}
  </>
);

export default ExtendedSidebar;
