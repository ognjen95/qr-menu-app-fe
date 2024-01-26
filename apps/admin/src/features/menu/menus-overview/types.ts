export type MenuTableModel = {
  id: string;
  name: string;
  description?: string;
  restaurantId: string;
  createdAt: Date | null;
  isVisible: boolean;
};