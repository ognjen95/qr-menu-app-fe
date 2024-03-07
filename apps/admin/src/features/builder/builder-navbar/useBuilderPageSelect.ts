import capitalize from "lodash.capitalize";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { SectionPage } from "../../../app/context/theme-context/enums";
import { useThemeContext } from "../../../app/context/theme-context/ThemeContext";

export type PageOptions = {
  key: SectionPage;
  label: string;
  onClick: () => void;
};

const useBuilderPageSelect = (selectedPage = SectionPage.HOME) => {
  const { push } = useRouter();
  const [pages, setPages] = useState<PageOptions[]>([]);

  const { theme } = useThemeContext();

  useEffect(() => {
    const activePages = theme?.activePages ?? [];
    const pageOptions = Object.values(SectionPage)
      .map((page) => ({
        key: page,
        label: `${capitalize(page)} page`,
        onClick: () => {
          push(`?page=${page}`);
        },
      }))
      .filter((page) => activePages.includes(page.key))
      .sort((a, b) => {
        if (a.key === selectedPage) return -1;
        if (b.key === selectedPage) return 1;
        return 0;
      });

    setPages(pageOptions);
  }, [push, selectedPage, theme?.activePages]);

  return {
    pageOptions: pages,
  };
};

export default useBuilderPageSelect;
