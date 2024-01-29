import { createColumnHelper } from "@tanstack/react-table";
import Image from "next/image";
import React, { FC } from "react";
import {
  Paper,
  TextVariant,
  Button,
  IconType,
  Text,
  Icon,
  Chip,
  Tooltip,
} from "ui-components";
import { ButtonSize, ButtonColor } from "ui-components/src/button/enums";
import { ChipSize, ChipVariant } from "ui-components/src/chip/enums";
import { colors } from "ui-components/src/config/tailwind-config";

import SimpleTable from "../../../../components/tables/SimpleTable";
import { MenuSectionItem } from "../types";

const columnHelper = createColumnHelper<MenuSectionItem>();

const colummns = [
  columnHelper.accessor("image", {
    cell: (cell) => (
      <Image
        alt="menuimg"
        height={40}
        width={40}
        src={cell.getValue() || "/images/no-content.png"}
      />
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
              key={variant.name}
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
    cell: () => (
      <div className="flex space-x-2">
        <Icon
          type={IconType.TRASH_FULL}
          stroke={colors.red[500]}
          onClick={() => {}}
        />
        <Icon type={IconType.EDIT_PENCIL_1} onClick={() => {}} />
      </div>
    ),
    header: undefined,
    size: 10,
  }),
];

export type MenuSectionProps = {
  name: string;
  description?: string;
  items: MenuSectionItem[];
  addNewSection: () => void;
  addNewItem: () => void;
};

const MenuSection: FC<MenuSectionProps> = ({
  name,
  description,
  items,
  addNewItem,
  addNewSection,
}) => (
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
          }}
        >
          Add Item
        </Button>
      </div>
      <SimpleTable<MenuSectionItem> columns={colummns} data={items} />
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
          Add Item
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
        Add New Section
      </Button>
    </div>
  </div>
);

export default MenuSection;
