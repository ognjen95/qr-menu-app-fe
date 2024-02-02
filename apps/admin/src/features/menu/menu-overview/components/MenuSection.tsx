import { createColumnHelper } from "@tanstack/react-table";
import Image from "next/image";
import React, { FC, memo } from "react";
import {
  Paper,
  TextVariant,
  Button,
  IconType,
  Text,
  Chip,
  Tooltip,
  IconButton,
  IconSize,
  DropdownMenu,
} from "ui-components";
import { ButtonSize, ButtonColor } from "ui-components/src/button/enums";
import { ChipSize, ChipVariant } from "ui-components/src/chip/enums";
import { colors } from "ui-components/src/config/tailwind-config";

import SimpleTable from "../../../../components/tables/SimpleTable";
import { MenuSectionItem } from "../types";

const useMenuSectionColumns = ({
  onMenuItemClick,
  onDeleteMenuItemClick,
  moveItemDown,
  moveItemUp,
}: {
  onMenuItemClick: (item: MenuSectionItem) => void;
  onDeleteMenuItemClick: (item: MenuSectionItem) => void;
  moveItemDown: (itemId: string, itemIndex: number) => void;
  moveItemUp: (itemId: string, itemIndex: number) => void;
}) => {
  const columnHelper = createColumnHelper<MenuSectionItem>();

  const colummns = [
    columnHelper.accessor("id", {
      cell: (cell) => (
        <div className="w-fit flex items-center">
          <IconButton
            className="rotate-90"
            iconProps={{
              onClick: () => {
                moveItemUp(cell.getValue(), cell.row.index - 1);
              },
              type: IconType.ARROW_LEFT_LG,
              size: IconSize.SMALL,
            }}
          />
          <IconButton
            className="rotate-90"
            iconProps={{
              onClick: () => {
                moveItemDown(cell.getValue(), cell.row.index + 1);
              },
              type: IconType.ARROW_RIGHT,
              size: IconSize.SMALL,
            }}
          />
        </div>
      ),
      header: () => "",
      size: 0,
    }),
    columnHelper.accessor("image", {
      cell: (cell) => (
        <div className="h-[50px] w-[50px] relative rounded-lg overflow-hidden border border-gray-200">
          <Image
            alt="menuimg"
            fill
            placeholder="blur"
            blurDataURL="/images/no-content.png"
            src={cell.getValue() || "/images/no-content.png"}
          />
        </div>
      ),
      header: () => "Image",
      size: 10,
    }),
    columnHelper.accessor("name", {
      cell: (cell) => <Text>{cell.getValue()}</Text>,
      header: () => "Name",
      size: 20,
    }),
    columnHelper.accessor("description", {
      cell: (cell) => <Text>{cell.getValue()}</Text>,
      header: () => "Description",
      size: 20,
    }),
    columnHelper.accessor("variants", {
      cell: (cell) => <Text>{cell.getValue().length}</Text>,
      header: () => "Variants",
      size: 20,
    }),
    columnHelper.accessor("variants", {
      cell: (cell) => {
        const variants = cell.getValue();

        return (
          <div className="flex gap-1">
            {variants.map((variant) => (
              <Tooltip
                key={variant.price}
                contentEl={<Text color="text-white">{variant.name}</Text>}
                triggerEl={
                  <Chip
                    variant={ChipVariant.OUTLINED}
                    size={ChipSize.SMALL}
                    text={`${(Math.round(+variant.price * 100) / 100).toFixed(
                      2
                    )} $`}
                  />
                }
              />
            ))}
          </div>
        );
      },
      header: () => "Prices",
      size: 20,
    }),
    columnHelper.accessor("id", {
      cell: (cell) => (
        <div className="flex space-x-2">
          <IconButton
            iconProps={{
              onClick: () => onMenuItemClick(cell.row.original),
              type: IconType.EDIT_PENCIL_1,
            }}
          />
          <IconButton
            iconProps={{
              onClick: () => onDeleteMenuItemClick(cell.row.original),
              type: IconType.TRASH_FULL,
              stroke: colors.red[500],
            }}
          />
        </div>
      ),
      header: undefined,
      size: 10,
    }),
  ];

  return colummns;
};

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
  const columns = useMenuSectionColumns({
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
            <Text>{description}</Text>
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
