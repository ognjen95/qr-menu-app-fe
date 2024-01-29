"use client";

import { useParams } from "next/navigation";
import { Loader } from "ui-components";

import MenuOverviewLayout from "./components/MenuOverviewLayout";
import MenuSection from "./components/MenuSection";
import useGetMenu from "./useMenu";
import CreateMenuItemFeature from "../create-menu-item/CreateMenuItem";
import CreateMenuSectionFeature from "../create-menu-section/CreateMenuSection";

const MenuOverview = () => {
  const { menuId } = useParams();

  const { sectionModal, itemModal, menuSections, loading, menuName } =
    useGetMenu(menuId as string);

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
            key={section.id}
            name={section.name}
            description={section.description}
            items={section.items}
          />
        ))}
      </div>
      <CreateMenuSectionFeature
        modal={sectionModal}
        menuId={menuId as string}
      />
      <CreateMenuItemFeature menuId={menuId as string} modal={itemModal} />
    </MenuOverviewLayout>
  );
};

export default MenuOverview;
