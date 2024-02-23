import { useState } from "react";

import { MainNav } from "./enums";
import { SelectedEnumType } from "./types";

const useBuilderSidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selected, setSelected] = useState<SelectedEnumType | null>(
    MainNav.EDITOR
  );

  return {
    sidebarOpen,
    setSidebarOpen,
    selected,
    setSelected,
  };
};

export default useBuilderSidebar;
