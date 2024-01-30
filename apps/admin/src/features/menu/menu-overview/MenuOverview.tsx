"use client";

import { useParams } from "next/navigation";
import { Loader, useModal } from "ui-components";

import MenuOverviewLayout from "./components/MenuOverviewLayout";
import MenuSection from "./components/MenuSection";
import { MenuSectionItem } from "./types";
import useGetMenu from "./useMenu";
import CreateAndEditMenuItemFeature from "../create-and-edit-menu-item/CreateAndEditMenuItem";
import CreateMenuSectionFeature from "../create-menu-section/CreateMenuSection";
import DeleteMenuItemModalFeature from "../delete-menu-item/DeleteMenuItemModal";

const MenuOverview = () => {
  const { menuId } = useParams();

  const { sectionModal, itemModal, menuSections, loading, menuName } =
    useGetMenu(menuId as string);

  const editModal = useModal<MenuSectionItem>();
  const deleteModal = useModal<MenuSectionItem>();

  if (loading) return <Loader centered />;

  return (
    <MenuOverviewLayout menuName={menuName}>
      <div className="p-5 flex flex-col h-full space-y-5">
        {menuSections.map((section) => (
          <MenuSection
            addNewItem={() =>
              itemModal.open({
                sectionId: section.id,
                sectionName: section.name,
              })
            }
            addNewSection={() =>
              sectionModal.open({ id: section.id, name: section.name })
            }
            onMenuItemClick={(item: MenuSectionItem) =>
              editModal.open({
                ...item,
                sectionId: section.id,
              })
            }
            onDeleteMenuItemClick={(item: MenuSectionItem) =>
              deleteModal.open({
                ...item,
                sectionId: section.id,
              })
            }
            key={section.id}
            name={section.name}
            description={section.description}
            items={section.items}
          />
        ))}
      </div>
      <DeleteMenuItemModalFeature modal={deleteModal} />
      <CreateAndEditMenuItemFeature
        editModal={editModal}
        menuId={menuId as string}
        modal={itemModal}
      />
      <CreateMenuSectionFeature
        menuId={menuId as string}
        modal={sectionModal}
      />
    </MenuOverviewLayout>
  );
};

export default MenuOverview;
