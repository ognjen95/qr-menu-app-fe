import { useAtomValue } from "jotai";
import { useRouter } from "next/navigation";

import { routerHistoryAtom } from "./atoms";
import { UseBackNavigation, UseBackNavigationReturn } from "./types";

const useBackNavigation: UseBackNavigation = (): UseBackNavigationReturn => {
  const routerHistory = useAtomValue(routerHistoryAtom);
  const { back: routerBack, push } = useRouter();

  /**
   * Navigate back in the router history or push a default path if the user entered via link.
   * @param defaultNavigationPath - The default path to navigate to if the the user entered via link.
   */
  const back = (defaultNavigationPath: string) => {
    if (routerHistory.length !== 1) {
      routerBack();
    } else {
      push(defaultNavigationPath);
    }
  };

  return { back };
};

export default useBackNavigation;
