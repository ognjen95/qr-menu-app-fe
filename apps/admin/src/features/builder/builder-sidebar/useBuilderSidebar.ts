import { useState } from "react";

import { SelectedEnumType } from "./types";

const useBuilderSidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selected, setSelected] = useState<SelectedEnumType | null>(null);

  return {
    sidebarOpen,
    setSidebarOpen,
    selected,
    setSelected,
  };
};

export default useBuilderSidebar;
