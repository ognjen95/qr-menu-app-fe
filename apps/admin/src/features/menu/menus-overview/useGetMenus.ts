import { useGetMenusQuery, useGetRestaurantsQuery } from '../../../graphql-api';
import { MenuTableModel } from './types';

const useGetMenus = () => {
  const { data, loading } = useGetMenusQuery();

  const menus: MenuTableModel[] =
    data?.menus.edges.map(({ node }) => ({
      id: node.id ?? "",
      name: node.name ?? "",
      isVisible: node.isVisible,
      restaurantId: node.restaurantId ?? "",
      description: node.description ?? "",
      createdAt: node.createdAt ?? null,
    })) ?? [];

  return {
    menus,
    loading,
  }
}

export default useGetMenus