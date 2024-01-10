import { useState } from "react";

import { REGEX_ALLOW_ONLY_UPPER_CASE_NUMBERS_SPACE_AND_DASH } from "./constants";
import { UseContentCreateValidationReturn } from "./types";

const useContentCreateValidation = (): UseContentCreateValidationReturn => {
  const [errorMessage, setErrorMessage] = useState("");

  const validate = (str: string) => {
    const upperCasedString = str.trim().toUpperCase();
    const validateRegex =
      REGEX_ALLOW_ONLY_UPPER_CASE_NUMBERS_SPACE_AND_DASH.test(upperCasedString);

    if (!validateRegex) {
      setErrorMessage('Only special character allowed is dash “-"');
      return false;
    }
    setErrorMessage("");
    return upperCasedString;
  };

  return { validate, errorMessage };
};

export default useContentCreateValidation;
