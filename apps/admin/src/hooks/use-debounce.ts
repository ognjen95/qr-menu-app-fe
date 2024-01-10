import { useEffect, useState } from "react";

import { UseDebounceReturn } from "./types";

const useDebounce = (delay = 300): UseDebounceReturn => {
  const [debouncedValue, setDebouncedValue] = useState("");
  const [value, setValue] = useState("");

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

  return [debouncedValue, handleSetValue];
};

export default useDebounce;
