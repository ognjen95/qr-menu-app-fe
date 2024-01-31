import { Dispatch, FC, SetStateAction } from "react";
import {
  IconButton,
  IconType,
  IconSize,
  Input,
  IconPlacement,
  InputSize,
  InputColor,
  DropdownMenu,
  Button,
} from "ui-components";
import { colors } from "ui-components/src/config/tailwind-config";

import FilterDropdown from "../../filter-dropdown/FilterDropdown";

export enum SortBy {
  NAME = "name",
  LAST_MODIFIED = "lastModified",
}

export type ListHeaderProps = {
  showAddInput: () => void;
  isVisible?: boolean;
  handleSearch: (searchTerm: string) => void;
  onSortByChange: Dispatch<SetStateAction<SortBy>>;
  bulkDeleteIds: string[];
  onBulkDelete: () => void;
};

const ListHeader: FC<ListHeaderProps> = ({
  showAddInput,
  isVisible,
  handleSearch,
  onSortByChange,
  bulkDeleteIds,
  onBulkDelete,
}) => (
  <div className="flex justify-between">
    <div className="flex items-center space-x-2">
      <div className="flex min-w-[320px]">
        <Input
          placeholder="Search"
          iconType={IconType.SEARCH}
          strokeColor={colors.gray[900]}
          iconColor="transparent"
          iconPlacement={IconPlacement.LEFT}
          size={InputSize.SMALL}
          color={InputColor.PRIMARY}
          onChange={(event) => {
            handleSearch(event.target.value);
          }}
        />
      </div>
      <FilterDropdown
        onClearButtonClick={() => {}}
        items={[]}
        onCancelClick={() => {}}
        onApplyClick={() => {}}
      />
      <DropdownMenu
        iconType={IconType.UP_AND_DOWN_ARROWS}
        iconSize={IconSize.MEDIUM}
        label="Sort By"
        items={[
          {
            key: "alphabetical",
            label: "Alphabetical",
            onClick: () => onSortByChange?.(SortBy.NAME),
          },
          {
            key: "lastModified",
            label: "Last Modified",
            onClick: () => onSortByChange?.(SortBy.LAST_MODIFIED),
          },
        ]}
      />
    </div>
    <div className="flex">
      <Button
        leftIcon={{
          type: IconType.PLUS,
          fill: "transparent",
          onClick: showAddInput,
          size: IconSize.MEDIUM,
        }}
      >
        New Menu
      </Button>
    </div>
  </div>
);

export default ListHeader;
