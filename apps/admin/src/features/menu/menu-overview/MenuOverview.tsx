"use client";

import { useParams } from "next/navigation";
import { Button, Loader, useModal } from "ui-components";

import MenuOverviewLayout from "./components/MenuOverviewLayout";
import MenuSection from "./components/MenuSection";
import {
  EditModalModel,
  MenuSection as MenuSectionModel,
  MenuSectionItem,
  ItemModalModel,
  SectionModalModel,
} from "./types";
import useGetMenu from "./useMenu";
import { useReorderSectionsAndItems } from "./useReorderMenuSectionsAndItems";
import CreateAndEditMenuItemFeature from "../create-and-edit-menu-item/CreateAndEditMenuItem";
import CreateMenuSectionFeature from "../create-menu-section/CreateMenuSection";
import DeleteMenuItemModalFeature from "../delete-menu-item/DeleteMenuItemModal";
import DeleteMenuSectionModalFeature from "../delete-menu-section/DeleteMenuSectionModal";

const MenuOverview = () => {
  const { menuId } = useParams();

  const { menuSections, loading, menuName } = useGetMenu(menuId as string);

  const { reorderSectionItem, reorderSections, collapsed, setCollapsed } =
    useReorderSectionsAndItems(menuSections, menuId as string);

  const sectionModal = useModal<SectionModalModel>();
  const itemModal = useModal<ItemModalModel>();
  const editModal = useModal<EditModalModel>();
  const deleteModal = useModal<MenuSectionItem>();
  const deleteSectionModal = useModal<MenuSectionModel>();
  const editSectionModal = useModal<MenuSectionModel>();

  if (loading) return <Loader centered />;

  return (
    <MenuOverviewLayout
      menuName={menuName}
      menuId={menuId as string}
      isCollapsed={collapsed}
      toggleCollapse={() => setCollapsed((prev) => !prev)}
    >
      <div className="p-5 flex flex-col h-full space-y-5">
        {menuSections.length === 0 && (
          <Button
            onClick={() =>
              sectionModal.open({
                id: "",
                name: "",
                positionIndex: 0,
                menuSectionsIds: [],
              })
            }
          >
            Create Menu Section
          </Button>
        )}
        {menuSections.map((section, sectionIndex) => (
          <MenuSection
            isCollapsed={collapsed}
            moveSectionUp={() => reorderSections(section, sectionIndex - 1)}
            moveSectionDown={() => reorderSections(section, sectionIndex + 1)}
            moveItemDown={(id, index) => reorderSectionItem(section, id, index)}
            moveItemUp={(id, index) => reorderSectionItem(section, id, index)}
            onDeleteSectionClick={() => deleteSectionModal.open(section)}
            onEditSectionClick={() => editSectionModal.open(section)}
            addNewItem={() =>
              itemModal.open({
                sectionId: section.id,
                sectionName: section.name,
                menuSectionsIds: menuSections[sectionIndex].items.map(
                  (secItem) => secItem.id
                ),
              })
            }
            addNewSection={() =>
              sectionModal.open({
                id: section.id,
                name: section.name,
                positionIndex: sectionIndex + 1,
                menuSectionsIds: menuSections.map((sect) => sect.id),
              })
            }
            onMenuItemClick={(item: MenuSectionItem) =>
              editModal.open({
                ...item,
                sectionId: section.id,
                menuSectionsIds: menuSections[sectionIndex].items.map(
                  (secItem) => secItem.id
                ),
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
      <DeleteMenuSectionModalFeature deleteSectionModal={deleteSectionModal} />
      <CreateAndEditMenuItemFeature
        editModal={editModal}
        menuId={menuId as string}
        modal={itemModal}
      />
      <CreateMenuSectionFeature
        menuId={menuId as string}
        modal={sectionModal}
        editSectionModal={editSectionModal}
      />
    </MenuOverviewLayout>
  );
};

export default MenuOverview;
