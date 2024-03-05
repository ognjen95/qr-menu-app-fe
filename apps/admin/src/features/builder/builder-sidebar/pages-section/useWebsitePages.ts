import { useEffect, useState } from "react";

import { useThemeContext } from "../../../../app/context/theme-context/ThemeContext";
import { PAGES } from "../../../themes/pages/constants";

const useWebsitePages = () => {
  const { theme, setTheme } = useThemeContext();
  const [activePagesState, setActivePagesState] = useState(PAGES);

  useEffect(() => {
    const activePages = PAGES.map((page) =>
      theme?.activePages.includes(page.value)
        ? { ...page, isVisible: true }
        : { ...page, isVisible: false }
    );

    setActivePagesState(activePages);
  }, [theme?.activePages]);

  const onCheckedChange = (checked: boolean, page: string) => {
    const updatedPages = activePagesState.map((p) =>
      p.name === page ? { ...p, isVisible: checked } : p
    );

    const updatedTheme = {
      ...theme!,
      activePages: updatedPages
        .filter((currPage) => currPage.isVisible)
        .map((currPage) => currPage.value),
    };

    setTheme(updatedTheme);
  };

  return {
    activePagesState,
    onCheckedChange,
  };
};

export default useWebsitePages;
