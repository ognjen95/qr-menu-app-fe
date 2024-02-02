import { MenuSection } from "./types";
import { addBucketPrefix } from "../../../common/helpers";
import { MenuEntity } from "../../../graphql-api";

export const menuMapper = (menu: Partial<MenuEntity>): MenuSection[] =>
  menu?.menuSectionIds?.map((id) => {
    const section = menu.menuSections?.edges.find(({ node }) => node.id === id);

    return {
      menuId: section?.node.menuId ?? "",
      id: section?.node.id ?? "",
      name: section?.node.name ?? "",
      description: section?.node.description ?? "",
      items:
        section?.node.menuItemIds.map((sectionItemId) => {
          const sectionItem = section.node.menuItems.edges.find(
            ({ node: menuItem }) => sectionItemId === menuItem.id
          );

          return {
            sectionId: sectionItem?.node?.sectionId ?? "",
            id: sectionItem?.node?.id ?? "",
            description: sectionItem?.node?.description ?? "",
            name: sectionItem?.node?.name ?? "",
            image: addBucketPrefix(sectionItem?.node?.image ?? ""),
            variants: sectionItem?.node?.variants ?? [],
            tags: sectionItem?.node?.tags ?? [],
            alergens: sectionItem?.node?.alergens ?? [],
          };
        }) ?? [],
    };
  }) ?? [];
