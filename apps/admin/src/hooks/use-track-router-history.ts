import { useSetAtom } from "jotai";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

import { routerHistoryAtom } from "./atoms";
import { UseTrackRouterHistory } from "./types";

const useTrackRouterHistory: UseTrackRouterHistory = () => {
  const pathname = usePathname();
  const setRouterHistory = useSetAtom(routerHistoryAtom);

  useEffect(() => {
    setRouterHistory((prevRouterHistory) => {
      if (prevRouterHistory[prevRouterHistory.length - 1] === pathname) {
        return [...prevRouterHistory];
      }
      return [...prevRouterHistory, pathname];
    });
  }, [pathname, setRouterHistory]);
};

export default useTrackRouterHistory;
