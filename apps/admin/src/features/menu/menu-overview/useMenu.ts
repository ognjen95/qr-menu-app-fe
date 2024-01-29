import { useModal } from "ui-components";

import { ItemModalModel, MenuSection } from "./types";
import { useGetMenuQuery } from "../../../graphql-api";

const useMenu = (menuId: string) => {
  const sectionModal = useModal<Partial<MenuSection>>();

  const itemModal = useModal<ItemModalModel>();

  const { data, loading } = useGetMenuQuery({
    variables: {
      options: {
        where: {
          id: {
            equals: menuId as string,
          },
        },
      },
    },
  });

  const menuSections: MenuSection[] =
    data?.menu.menuSections.edges.map(({ node: section }) => ({
      menuId: section.menuId ?? "",
      id: section.id ?? "",
      name: section.name ?? "",
      description: section.description ?? "",
      items:
        section.menuItems.edges.map(({ node: item }) => ({
          sectionId: item.sectionId ?? "",
          id: item.id ?? "",
          description: item.description ?? "",
          name: item.name ?? "",
          variants: item.variants,
          tags: item.tags ?? [],
          alergens: item.alergens ?? [],
        })) ?? [],
    })) ?? [];

  return {
    sectionModal,
    itemModal,
    menuSections,
    loading,
    menuName: data?.menu.name ?? "",
  };
};

export default useMenu;
