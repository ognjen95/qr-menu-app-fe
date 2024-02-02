import { createColumnHelper } from "@tanstack/react-table";
import Image from "next/image";
import {
  IconButton,
  IconType,
  IconSize,
  Tooltip,
  Chip,
  Text,
} from "ui-components";
import { ChipVariant, ChipSize } from "ui-components/src/chip/enums";
import { colors } from "ui-components/src/config/tailwind-config";

import { MenuSectionItem } from "../types";

const useMenuSectionItemsColumns = ({
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

export default useMenuSectionItemsColumns;
