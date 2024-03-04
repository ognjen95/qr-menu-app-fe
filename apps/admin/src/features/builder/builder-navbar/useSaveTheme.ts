import { toast } from "react-toastify";

import { handleUploadChangedImages } from "./utils";
import { DefaultThemeType } from "../../../app/context/theme-context/types";
import {
  FindThemeByTenantIdDocument,
  useSaveThemeConfigurationMutation,
} from "../../../graphql-api";
import useUploadFile from "../../../hooks/use-upload-file";

const useSaveTheme = (theme: DefaultThemeType | null, setTheme: (theme: DefaultThemeType) => void) => {
  const [saveTheme, { loading }] =
    useSaveThemeConfigurationMutation();
  const { upload } = useUploadFile();

  const handleSaveTheme = async () => {
    if (!theme) return;

    const themeCopy = await handleUploadChangedImages(theme, upload);

    saveTheme({
      refetchQueries: [FindThemeByTenantIdDocument],
      onCompleted: () => {
        toast.success("Theme saved successfully");
        setTheme(themeCopy)
      },
      variables: {
        args: {
          ...themeCopy,
          logo: {
            url: themeCopy.logo.url ?? "",
          },
        },
      },
    });
  };

  return {
    saveThemeLoading: loading,
    handleSaveTheme,
  };
};

export default useSaveTheme;
