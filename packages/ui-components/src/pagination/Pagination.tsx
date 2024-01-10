import clsx from "clsx";
import { SingleValue } from "react-select";

import { colors } from "../config/tailwind-config";
import { IconSize, IconType } from "../icon/enums";
import Icon from "../icon/Icon";
import Select from "../select";
import { SelectSize } from "../select/enums";
import { Option } from "../select/types";
import Text from "../text";
import { TextVariant } from "../text/enums";

interface PaginationProps {
  itemsPerPage: Option;
  options: Array<Option>;
  currentPage: number;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  title?: string;
  onPageChange: (newPage: number, nextPage: boolean) => void;
  onItemsPerPageChange: (itemsPerPage: Option) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  itemsPerPage,
  currentPage,
  hasNextPage,
  hasPreviousPage,
  options,
  title = "Rows",
  onPageChange,
  onItemsPerPageChange,
}) => {
  const handlePageChange = (newPage: number, nextPage: boolean) => {
    onPageChange(newPage, nextPage);
  };

  return (
    <div className="flex justify-between items-center text-gray-600">
      <div className="flex items-center justify-center gap-2">
        <div className="flex justify-center items-center  whitespace-nowrap">
          <Text variant={TextVariant.BODY4} color="text-gray-600">
            {`${title} per page`}
          </Text>
        </div>
        <Select
          size={SelectSize.SMALL}
          menuPlacement="top"
          selectColor={colors.grey[50]}
          largeIndicator
          placeholder="20"
          value={itemsPerPage}
          onChange={(option) => {
            onItemsPerPageChange((option as SingleValue<Option>)!);
          }}
          options={options}
        />
      </div>
      <div className="flex items-center">
        <Text variant={TextVariant.BODY4} color="text-gray-600">
          {`${
            (currentPage - 1) * (itemsPerPage.value as number) + 1
          }-${Math.min(currentPage * (itemsPerPage.value as number))}`}
        </Text>
        <div
          className={clsx("cursor-pointer p-2", {
            "pointer-events-none": !hasPreviousPage,
          })}
          onClick={() => handlePageChange(currentPage - 1, false)}
        >
          <Icon
            type={IconType.CHEVRON_LEFT}
            size={IconSize.MEDIUM}
            fill="transparent"
            stroke={hasPreviousPage ? "currentColor" : "#C9CDD5"}
          />
        </div>
        <div
          className={clsx("cursor-pointer p-2", {
            "pointer-events-none": !hasNextPage,
          })}
          onClick={() => onPageChange(currentPage + 1, true)}
        >
          <Icon
            type={IconType.CHEVRON_RIGHT}
            size={IconSize.MEDIUM}
            fill="transparent"
            stroke={hasNextPage ? "currentColor" : "#C9CDD5"}
          />
        </div>
      </div>
    </div>
  );
};

export default Pagination;
