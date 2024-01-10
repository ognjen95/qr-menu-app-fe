import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { Breadcrumb } from "ui-components/src/breadcrumbs/types";

export const useBreadcrumbs = (currentPageName?: string): Array<Breadcrumb> => {
  const pathName = usePathname();

  return useMemo(() => {
    const crumbs = pathName.split("/");
    const trimmedCrumbs = crumbs.filter(Boolean);

    return trimmedCrumbs.map((breadcrumb, index) => {
      if (index === trimmedCrumbs.length - 1 && currentPageName !== undefined) {
        return {
          text: currentPageName,
          link: `/${trimmedCrumbs.slice(0, index + 1).join("/")}`,
          isActive: index === trimmedCrumbs.length - 1,
        };
      }

      return {
        text: breadcrumb.replaceAll("-", " "),
        link: `/${trimmedCrumbs.slice(0, index + 1).join("/")}`,
        isActive: index === trimmedCrumbs.length - 1,
      };
    });
  }, [pathName, currentPageName]);
};
