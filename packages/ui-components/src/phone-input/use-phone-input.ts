import { useMemo } from "react";

import { UsePhoneInput, UsePhoneInputReturn } from "./types";
import { COUNTRIES } from "../common/constants";

const usePhoneInput: UsePhoneInput = (): UsePhoneInputReturn => {
  const countries = useMemo(
    () =>
      COUNTRIES.map(({ value: iso2 }) => ({
        iso2: iso2.toLowerCase(),
        src: `https://purecatamphetamine.github.io/country-flag-icons/1x1/${iso2}.svg`,
      })),
    []
  );

  return { countries };
};

export default usePhoneInput;
