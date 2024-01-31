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
} from "ui-components";
import { ButtonSize, ButtonColor } from "ui-components/src/button/enums";
import { ChipSize, ChipVariant } from "ui-components/src/chip/enums";
import { colors } from "ui-components/src/config/tailwind-config";

import SimpleTable from "../../../../components/tables/SimpleTable";
import { MenuSectionItem } from "../types";

const useMenuSectionColumns = ({
  onMenuItemClick,
  onDeleteMenuItemClick,
}: {
  onMenuItemClick: (item: MenuSectionItem) => void;
  onDeleteMenuItemClick: (item: MenuSectionItem) => void;
}) => {
  const columnHelper = createColumnHelper<MenuSectionItem>();

  const colummns = [
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
};

const MenuSection: FC<MenuSectionProps> = ({
  name,
  description,
  items,
  addNewItem,
  addNewSection,
  onMenuItemClick,
  onDeleteMenuItemClick,
}) => {
  const columns = useMenuSectionColumns({
    onMenuItemClick,
    onDeleteMenuItemClick,
  });

  return (
    <div className="flex flex-col h-full space-y-5">
      <Paper>
        <div className="flex items-start justify-between">
          <div className="flex flex-col h-full mb-5">
            <Text variant={TextVariant.HEADING5}>{name}</Text>
            <Text>{description}</Text>
          </div>
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
        </div>
        <SimpleTable<MenuSectionItem> columns={columns} data={items} />
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
      </Paper>
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
    </div>
  );
};

export default memo(MenuSection);
