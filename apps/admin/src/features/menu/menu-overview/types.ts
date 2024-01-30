export type MenuSection = {
  menuId: string;
  id: string;
  name: string;
  description?: string;
  items: MenuSectionItem[];
};

export type ItemVariant = {
  name?: string;
  price: string | number;
};

export type MenuSectionItem = {
  sectionId: string;
  id: string;
  description?: string;
  name: string;
  image?: string;
  variants: ItemVariant[];
  tags: string[];
  alergens: string[];
};

export type MenuSectionItemModel = Omit<MenuSectionItem, "id" | "sectionId">;

export type MenuSectionModel = {
  name: string;
  description: string;
};

export type ItemModalModel = Partial<
  MenuSectionItem & { sectionName?: string }
>;
