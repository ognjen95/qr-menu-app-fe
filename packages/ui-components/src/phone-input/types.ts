import { CustomFlagImage } from "react-international-phone/build/types";

export type UsePhoneInputReturn = {
  countries: CustomFlagImage[];
};

export type UsePhoneInput = () => UsePhoneInputReturn;
