import { useMemo } from "react";

import { menuMapper } from "./helpers";
import { MenuEntity, useGetMenuQuery } from "../../../graphql-api";

const useMenu = (menuId: string) => {
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

  const menuSections = useMemo(
    () => menuMapper(data?.menu as MenuEntity),
    [data?.menu]
  );

  return {
    menuSections,
    loading,
    menuName: data?.menu.name ?? "",
  };
};

export default useMenu;
