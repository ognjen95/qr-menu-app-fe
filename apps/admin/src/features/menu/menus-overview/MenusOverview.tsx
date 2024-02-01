import React from "react";
import { Paper, TextVariant, Loader, Text, DeleteModal } from "ui-components";

import MenuTable from "./menus-table/MenussTable";
import useGetMenus from "./useGetMenus";
import ManageMenuModal from "../common/ManageMenuModal";
import CreateMenuFeature from "../create-menu/CreateMenu";
import useDeleteMenu from "../delete-menu/use-delete-menu";
import useUpdateMenu from "../update-menu/use-update-menu";

const MenusOverview = () => {
  const { menus, loading } = useGetMenus();

  const { deleteMenu, loading: loadingDelete, modal } = useDeleteMenu();

  const {
    form,
    loading: loadingUpdate,
    modal: updateModal,
    onSubmit,
    onUpdate,
  } = useUpdateMenu(menus);

  return (
    <Paper fullHeight fullWidth noPadding>
      <div className="flex flex-col w-full pt-3">
        <div className="flex items-center justify-between w-full px-5 pb-5">
          <Text variant={TextVariant.HEADING6}>Menus</Text>
          <CreateMenuFeature />
        </div>
        {loading && !menus.length && <Loader centered />}
        {!!menus.length && (
          <MenuTable
            menus={menus}
            onDelete={(id: string) => modal.open({ id })}
            onUpdate={onUpdate}
          />
        )}
        {!menus.length && !loading && (
          <div className="flex items-center justify-center h-full">
            <CreateMenuFeature />
          </div>
        )}
      </div>
      <DeleteModal
        title="Delete menu"
        close={modal.close}
        isOpen={modal.isOpen}
        onConfirm={deleteMenu}
        description="Are you sure you want to delete this restaurant?"
        loading={loadingDelete}
      />
      <ManageMenuModal
        close={updateModal.close}
        form={form}
        formName="update-menu"
        isOpen={updateModal.isOpen}
        loading={loadingUpdate}
        onSubmit={onSubmit}
      />
    </Paper>
  );
};

export default MenusOverview;
