import { useState } from "react";
import { toast } from "react-toastify";

import { MenuSection as MenuSectionModel } from "./types";
import {
  useUpdateMenuSectionMutation,
  GetMenuDocument,
  useUpdateMenuMutation,
} from "../../../graphql-api";

export const useReorderSectionsAndItems = (
  menuSections: MenuSectionModel[],
  menuId: string
) => {
  const [update, { loading: updateLoading }] = useUpdateMenuSectionMutation();

  const reorderSectionItem = (
    section: MenuSectionModel,
    sectionItemId: string,
    sectionItemIndex: number
  ) => {
    if (updateLoading) return;

    const menuSectionItemIds = section.items.map((item) => item.id);
    const newIndex = sectionItemIndex;
    const oldIndex = menuSectionItemIds.indexOf(sectionItemId);

    if (oldIndex === 0 && newIndex <= 0) {
      toast.warn("Cannot move item up, it's already at the top of the list");
      return;
    }

    if (
      oldIndex === section.items.length - 1 &&
      newIndex === section.items.length
    ) {
      toast.warn(
        "Cannot move item down, it's already at the bottom of the list"
      );
      return;
    }

    const item = menuSectionItemIds.splice(oldIndex, 1)[0];

    menuSectionItemIds.splice(newIndex, 0, item);

    update({
      refetchQueries: [GetMenuDocument],
      onCompleted: () => {
        toast.success("Menu section item reordered");
      },
      variables: {
        args: {
          id: section.id,
          name: section.name,
          description: section.description,
          menuItemIds: menuSectionItemIds,
        },
      },
    });
  };

  const [collapsed, setCollapsed] = useState(false);

  const [updateMenu, { loading: updateMenuLoading }] = useUpdateMenuMutation();

  const reorderSections = (section: MenuSectionModel, newIndex: number) => {
    if (updateMenuLoading) return;

    const menuSectionIds = menuSections.map((item) => item.id);
    const oldIndex = menuSectionIds.indexOf(section.id);

    if (oldIndex === 0 && newIndex <= 0) {
      toast.warn("Cannot move section up, it's already at the top of the list");
      return;
    }

    if (
      oldIndex === menuSections.length - 1 &&
      newIndex === menuSections.length
    ) {
      toast.warn(
        "Cannot move section down, it's already at the bottom of the list"
      );
      return;
    }

    const item = menuSectionIds.splice(oldIndex, 1)[0];

    menuSectionIds.splice(newIndex, 0, item);

    updateMenu({
      refetchQueries: [GetMenuDocument],
      onCompleted: () => {
        toast.success("Menu section item reordered");
      },
      variables: {
        args: {
          id: menuId as string,
          menuSectionIds,
        },
      },
    });
  };

  return {
    reorderSectionItem,
    reorderSections,
    collapsed,
    setCollapsed,
  };
};
