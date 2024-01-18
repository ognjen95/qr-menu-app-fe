"use client";

import {
  Pagination,
  Paper,
  useModal,
  ButtonTabs,
  IconType,
} from "ui-components";

import RestaurantsOverviewFeature from "~features/restaurants/restaurants-overview/RestaurantsOverview";

import ListHeader from "../../../components/meta-list/list-header/ListHeader";
import MetaList from "../../../components/meta-list/MetaList";
import TopNavbar from "../../../components/top-navbar/TopNavbar";
import { menuDummyData } from "../../../features/menu/menu-section/constants";

const MenusPage = () => {
  const modal = useModal();

  return (
    <div className="h-screen flex flex-col">
      <TopNavbar title="Menus & Restaurants" />
      <div className="p-5 flex flex-col h-full">
        <ButtonTabs
          tabs={[
            {
              id: 1,
              text: "Menus",
              icon: IconType.FILE_DOCUMENT,
              feature: (
                <Paper fullHeight noPadding>
                  <div className="flex flex-col justify-between flex-1">
                    <div>
                      <div className="px-5 pt-3 pb-0">
                        <ListHeader
                          onSortByChange={() => {}}
                          showAddInput={() => {}}
                          isVisible
                          handleSearch={() => {}}
                          bulkDeleteIds={[]}
                          onBulkDelete={() => {}}
                        />
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
              ),
            },
            {
              id: 2,
              text: "Restaurants",
              icon: IconType.CUSTOMERS,
              feature: <RestaurantsOverviewFeature />,
            },
          ]}
          defaultTab="Menus"
        />
      </div>
    </div>
  );
};

export default MenusPage;
