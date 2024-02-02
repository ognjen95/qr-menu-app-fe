import React, { FC, memo } from "react";
import {
  Paper,
  TextVariant,
  Button,
  IconType,
  Text,
  IconButton,
  IconSize,
  DropdownMenu,
} from "ui-components";
import { ButtonSize, ButtonColor } from "ui-components/src/button/enums";
import { colors } from "ui-components/src/config/tailwind-config";

import useMenuSectionItemsColumns from "./useMenuSectionItemsColumns";
import SimpleTable from "../../../../components/tables/SimpleTable";
import { MenuSectionItem } from "../types";

export type MenuSectionProps = {
  name: string;
  description?: string;
  items: MenuSectionItem[];
  addNewSection: () => void;
  addNewItem: () => void;
  onMenuItemClick: (item: MenuSectionItem) => void;
  onDeleteMenuItemClick: (item: MenuSectionItem) => void;
  moveItemDown: (itemId: string, itemIndex: number) => void;
  moveItemUp: (itemId: string, itemIndex: number) => void;
  onDeleteSectionClick: () => void;
  onEditSectionClick: () => void;
  isCollapsed?: boolean;
  moveSectionUp: () => void;
  moveSectionDown: () => void;
};

const MenuSection: FC<MenuSectionProps> = ({
  name,
  description,
  items,
  addNewItem,
  addNewSection,
  onMenuItemClick,
  onDeleteMenuItemClick,
  moveItemDown,
  moveItemUp,
  onDeleteSectionClick,
  onEditSectionClick,
  isCollapsed,
  moveSectionUp,
  moveSectionDown,
}) => {
  const columns = useMenuSectionItemsColumns({
    onMenuItemClick,
    onDeleteMenuItemClick,
    moveItemDown,
    moveItemUp,
  });

  return (
    <div className="flex flex-col h-full space-y-5">
      <Paper noPadding>
        <div className="flex items-start justify-between px-6 pt-3">
          <div className="flex flex-col h-full mb-5">
            <Text variant={TextVariant.HEADING5}>{name}</Text>
            {!isCollapsed && <Text>{description}</Text>}
          </div>
          <div className="flex items-center space-x-2">
            {!isCollapsed && (
              <Button
                onClick={addNewItem}
                size={ButtonSize.SMALL}
                leftIcon={{
                  type: IconType.PLUS,
                  stroke: "white",
                }}
              >
                Add item
              </Button>
            )}
            {isCollapsed && (
              <div className="w-fit flex items-center bg-primary-100 animate-pulse rounded-xl">
                <IconButton
                  className="rotate-90"
                  iconProps={{
                    onClick: moveSectionUp,
                    type: IconType.ARROW_LEFT_LG,
                    size: IconSize.SMALL,
                  }}
                />
                <IconButton
                  className="rotate-90"
                  iconProps={{
                    onClick: moveSectionDown,
                    type: IconType.ARROW_RIGHT,
                    size: IconSize.SMALL,
                  }}
                />
              </div>
            )}
            <DropdownMenu
              showSelectedLabel={false}
              isIconButton
              iconType={IconType.MORE_VERTICAL}
              items={[
                {
                  iconType: IconType.EDIT_PENCIL_1,
                  key: "Edit",
                  label: "Edit",
                  onClick: onEditSectionClick,
                },
                {
                  iconType: IconType.TRASH_FULL,
                  iconStroke: colors.red[500],
                  key: "Delete",
                  label: "Delete",
                  onClick: onDeleteSectionClick,
                },
              ]}
            />
          </div>
        </div>
        {!isCollapsed && (
          <SimpleTable<MenuSectionItem> columns={columns} data={items} />
        )}
        {!isCollapsed && (
          <div className="flex items-center justify-center">
            <Button
              onClick={addNewItem}
              color={ButtonColor.TRANSPARENT}
              size={ButtonSize.SMALL}
              leftIcon={{
                type: IconType.PLUS,
                stroke: colors.gray[600],
              }}
            >
              Add item
            </Button>
          </div>
        )}
      </Paper>
      {!isCollapsed && (
        <div className="flex items-center justify-center">
          <Button
            onClick={addNewSection}
            color={ButtonColor.GREY}
            size={ButtonSize.SMALL}
            leftIcon={{
              type: IconType.PLUS,
              stroke: colors.gray[500],
            }}
          >
            Add section
          </Button>
        </div>
      )}
    </div>
  );
};

export default memo(MenuSection);
