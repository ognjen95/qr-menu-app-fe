import { createColumnHelper } from "@tanstack/react-table";
import Image from "next/image";
import { Dispatch, FC, SetStateAction } from "react";
import { Text } from "ui-components";
import CheckBox from "ui-components/src/checkbox";
import { UseModalReturn } from "ui-components/src/modal/useModal";

import { OnSubmitMetadata } from "./types";
import { MenuItem } from "../../features/menu/menu-section/types";
import SimpleTable from "../tables/SimpleTable";

const columnHelper = createColumnHelper<MenuItem>();

const colummns = [
  columnHelper.accessor("id", {
    cell: () => <CheckBox onChange={() => {}} />,
    header: () => <CheckBox onChange={() => {}} />,
    size: 0,
  }),
  columnHelper.accessor("name", {
    cell: (cell) => <Text>{cell.getValue()}</Text>,
    header: () => "Name",
    size: 0,
  }),
  columnHelper.accessor("description", {
    cell: (cell) => <Text>{cell.getValue()}</Text>,
    header: () => "Description",
    size: 0,
  }),
  columnHelper.accessor("price", {
    cell: (cell) => <Text>{cell.getValue()}$</Text>,
    header: () => "Price",
    size: 0,
  }),
  columnHelper.accessor("image", {
    cell: (cell) => (
      <Image alt="image" src={cell.getValue()} width={50} height={50} />
    ),
    header: () => "Image",
    size: 0,
  }),
];

export type MetaListProps = {
  title: string;
  showAddInput?: boolean;
  onAdd: OnSubmitMetadata;
  onEdit: OnSubmitMetadata;
  onCancel: () => void;
  list: MenuItem[];
  loading?: boolean;
  errMessage?: string | null;
  metadataId?: string;
  setMetadataId: Dispatch<SetStateAction<string>>;
  setMetadataValue: Dispatch<SetStateAction<string>>;
  metadataValue?: string;
  onDelete: () => void;
  deleteLoading: boolean;
  modal: UseModalReturn;
  handleCheckbox: (id: string) => void;
  handleBulkCheckbox: () => void;
  bulkDeleteIds: string[];
  idsList?: string[];
  entityNames: { single: string; plural: string };
};

const MetaList: FC<MetaListProps> = ({
  title,
  list,
  onAdd,
  onCancel,
  showAddInput,
  onEdit,
  metadataId,
  loading,
  errMessage,
  setMetadataId,
  setMetadataValue,
  metadataValue,
  onDelete,
  deleteLoading,
  modal,
  handleBulkCheckbox,
  handleCheckbox,
  bulkDeleteIds,
  idsList,
  entityNames,
}) => {
  if (!list?.length) {
    return (
      <div className="h-full mt-5">
        <div className="flex justify-center items-center h-full">
          {/* <NoContent
            text="No results found"
            subText="Try adjusting your search or filter criteria to find what you're looking for."
            imageSrc="/images/no-results-found.png"
            displayNewButton={false}
          /> */}
        </div>
      </div>
    );
  }

  return (
    <div className="mt-5 flex flex-col min-h-0">
      <div className="overflow-y-auto flex flex-col">
        <SimpleTable data={list} columns={colummns} />
      </div>
      {/* <DeleteMetadataModal
        title="Delete metadata"
        name={modal.params?.name ?? ""}
        type={
          modal.params?.bulkDelete ? entityNames.plural : entityNames.single
        }
        isOpen={modal.isOpen}
        close={modal.close}
        onConfirm={onDelete}
        loading={deleteLoading}
        list={list}
        bulkDeleteIds={modal.params?.bulkDeleteIds || undefined}
      /> */}
    </div>
  );
};

export default MetaList;
