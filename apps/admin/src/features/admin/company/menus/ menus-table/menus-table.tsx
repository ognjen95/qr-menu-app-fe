import { FC } from "react";
import { Pagination, Paper, useModal } from "ui-components";

import MetaList from "~components/meta-list/MetaList";
import { menuDummyData } from "~features/menu/menu-section/constants";

import CreateMenuFeature from "../create-menu/CreateMenu";

const MenusTable: FC = () => {
  const modal = useModal();

  return (
    <Paper fullHeight noPadding>
      <div className="flex flex-col justify-between flex-1">
        <div className="flex flex-col">
          <div className="self-end px-5 pt-3 pb-0">
            <CreateMenuFeature />
          </div>
          <MetaList
            title="List"
            onAdd={() => {}}
            onEdit={() => {}}
            onCancel={() => {}}
            list={menuDummyData[0].items}
            setMetadataId={() => {}}
            setMetadataValue={() => {}}
            onDelete={() => {}}
            deleteLoading={false}
            modal={modal}
            handleCheckbox={() => {}}
            handleBulkCheckbox={() => {}}
            bulkDeleteIds={[]}
            entityNames={{
              single: "",
              plural: "",
            }}
          />
        </div>
        <div className="px-5 pb-3 pt-0">
          <Pagination
            title="Rows"
            hasNextPage={false}
            hasPreviousPage={false}
            currentPage={1}
            itemsPerPage={{
              label: "10",
              value: 10,
            }}
            options={[
              {
                label: "10",
                value: 10,
              },
            ]}
            onPageChange={() => {}}
            onItemsPerPageChange={() => {}}
          />
        </div>
      </div>
    </Paper>
  );
};

export default MenusTable;
