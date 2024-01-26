export type RestaurantTableModel = {
  id: string;
  name: string;
  description?: string;
  location: {
    address?: string;
    city?: string;
    country?: string;
    state?: string;
  };
  menuId: string;
};
