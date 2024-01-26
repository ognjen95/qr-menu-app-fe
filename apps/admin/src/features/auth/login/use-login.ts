import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import { useForm, InputType, SubmitHandler } from "ui-components";

import { UserRoles, useLoginMutation } from "~graphql-api";

import { DEFAULT_VALUES, VALIDATION_SCHEMA } from "./constants";
import { LoginFormModel, UseLogin, UseLoginReturn } from "./types";
import { DecodedToken } from "../../../components/auth-guard/AuthGuard";

const useLogin: UseLogin = (): UseLoginReturn => {
  const { push } = useRouter();

  const form = useForm<LoginFormModel>({
    defaultValues: DEFAULT_VALUES,
    validationSchema: VALIDATION_SCHEMA,
  });
  const [passwordHidden, setPasswordHidden] = useState<InputType>(
    InputType.PASSWORD
  );
  const [login, { loading }] = useLoginMutation();

  const togglePasswordHidden = () => {
    setPasswordHidden((prev) => {
      if (prev === InputType.PASSWORD) return InputType.TEXT;
      return InputType.PASSWORD;
    });
  };

  const onSubmit: SubmitHandler<LoginFormModel> = ({ email, password }) => {
    login({
      onCompleted: ({ login: loginData }) => {
        const { accessToken, refreshToken, idToken } = loginData || {};

        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        localStorage.setItem("idToken", idToken);

        const decodedIdToken = jwtDecode<DecodedToken>(idToken);

        if (
          decodedIdToken.userRole === UserRoles.CustomerEmployee ||
          decodedIdToken.userRole === UserRoles.CustomerOwner
        ) {
          push("/admin/menus");
        }
      },
      onError: () => {
        toast.error("Unable to login. Please try again.");
      },
      variables: {
        email,
        password,
      },
    });
  };

  const redirectToForgotPassword = () => push("/forgot-password");

  return {
    form,
    onSubmit,
    loading,
    togglePasswordHidden,
    passwordHidden,
    redirectToForgotPassword,
  };
};

export default useLogin;
