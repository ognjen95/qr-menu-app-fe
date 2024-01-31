import { MenuTableModel } from "./types";
import { useGetMenusQuery } from "../../../graphql-api";

const useGetMenus = () => {
  const { data, loading } = useGetMenusQuery();

  const menus: MenuTableModel[] =
    data?.menus.edges.map(({ node }) => ({
      id: node.id ?? "",
      name: node.name ?? "",
      isVisible: node.isVisible,
      description: node.description ?? "",
      createdAt: node.createdAt ?? null,
    })) ?? [];

  return {
    menus,
    loading,
  };
};

export default useGetMenus;
