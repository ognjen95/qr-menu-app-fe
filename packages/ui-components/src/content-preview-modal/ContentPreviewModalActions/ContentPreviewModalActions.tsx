import { FC } from "react";

import { colors } from "../../config/tailwind-config";
import { IconSize, IconType } from "../../icon/enums";
import Icon from "../../icon/Icon";
import Text from "../../text";
import { TextVariant } from "../../text/enums";
import Tooltip from "../../tooltip";

export type ContentPreviewModalActionsProps = {
  onEdit?: () => void;
  onDelete?: () => void;
  isDeleteDisabled: boolean;
  deleteTooltipMessage?: string;
};

const ContentPreviewModalActions: FC<ContentPreviewModalActionsProps> = ({
  onDelete,
  onEdit,
  isDeleteDisabled,
  deleteTooltipMessage,
}) => (
  <div className="flex gap-2">
    {onEdit && (
      <Icon
        onClick={(e) => {
          e.stopPropagation();
          onEdit();
        }}
        type={IconType.EDIT_PENCIL_1}
        size={IconSize.EXTRA_LARGE}
        stroke="white"
      />
    )}
    {onDelete &&
      (deleteTooltipMessage ? (
        <Tooltip
          triggerEl={
            <Icon
              onClick={(e) => {
                e.stopPropagation();
                if (!isDeleteDisabled) {
                  onDelete();
                }
              }}
              type={IconType.TRASH_FULL}
              size={IconSize.EXTRA_LARGE}
              stroke={!isDeleteDisabled ? colors.red[500] : colors.red[200]}
            />
          }
          contentEl={
            <Text
              variant={TextVariant.BODY4}
              customClasses="font-semibold text-white"
            >
              {deleteTooltipMessage}
            </Text>
          }
        />
      ) : (
        <Icon
          onClick={(e) => {
            e.stopPropagation();
            if (!isDeleteDisabled) {
              onDelete();
            }
          }}
          type={IconType.TRASH_FULL}
          size={IconSize.EXTRA_LARGE}
          stroke={!isDeleteDisabled ? colors.red[500] : colors.red[200]}
        />
      ))}
  </div>
);

export default ContentPreviewModalActions;
