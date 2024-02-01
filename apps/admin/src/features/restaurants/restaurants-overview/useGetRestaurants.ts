import { RestaurantTableModel } from "./types";
import { useGetRestaurantsQuery } from "../../../graphql-api";

const useGetRestaurants = () => {
  const { data, loading } = useGetRestaurantsQuery();

  const restaurants: RestaurantTableModel[] =
    data?.restaurants.edges.map(({ node }) => ({
      id: node.id ?? "",
      name: node.name ?? "",
      location: {
        address: node.location?.address ?? "",
        city: node.location?.city ?? "",
        country: node.location?.country ?? "",
        state: node.location?.state ?? "",
      },
      menuId: node.menuId ?? "",
      description: node.description ?? "",
    })) ?? [];

  return {
    restaurants,
    loading,
  };
};

export default useGetRestaurants;
