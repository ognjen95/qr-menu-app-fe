import { PrimitiveAtom, useAtom } from "jotai";
import { useEffect, useState } from "react";

import {
  UseDebounceAtom,
  UseDebounceAtomReturn,
  WithInitialValue,
} from "./types";

const useDebounceAtom: UseDebounceAtom = (
  atom: PrimitiveAtom<string> & WithInitialValue<string>,
  delay = 300
): UseDebounceAtomReturn => {
  const [debouncedValue, setDebouncedValue] = useState("");
  const [value, setValue] = useAtom(atom);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [delay, value]);

  const handleSetValue = (DValue: string) => {
    setValue(DValue);
  };

  return { value, setValue: handleSetValue, debouncedValue };
};

export default useDebounceAtom;
