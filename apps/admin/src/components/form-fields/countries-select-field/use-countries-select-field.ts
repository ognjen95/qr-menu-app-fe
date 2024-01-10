import { useMemo } from "react";
import { COUNTRIES } from "ui-components";
import { Option } from "ui-components/src/select/types";

import { UseCountriesSelectField } from "./types";

const useCountriesSelectField: UseCountriesSelectField = (): Array<Option> => {
  const countries = useMemo(
    () =>
      COUNTRIES.map<Option>((option) => ({
        ...option,
        prefixImgUrl: `https://purecatamphetamine.github.io/country-flag-icons/1x1/${option.value}.svg`,
      })),
    []
  );

  return countries;
};

export default useCountriesSelectField;
