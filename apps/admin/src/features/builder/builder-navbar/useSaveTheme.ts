import { toast } from "react-toastify";

import handleUploadChangedImages from "./handleUploadChangedImages";
import { useThemeContext } from "../../../app/context/theme-context/ThemeContext";
import {
  FindThemeByTenantIdDocument,
  SectionPage,
  useSaveThemeConfigurationMutation,
} from "../../../graphql-api";
import useUploadFile from "../../../hooks/use-upload-file";

const useSaveTheme = () => {
  const { theme, setTheme } = useThemeContext();

  const [saveTheme, { loading }] = useSaveThemeConfigurationMutation();

  const { upload } = useUploadFile();

  const handleSaveTheme = async () => {
    if (!theme) return;

    const themeCopy = await handleUploadChangedImages(theme, upload);

    saveTheme({
      refetchQueries: [FindThemeByTenantIdDocument],
      onCompleted: () => {
        toast.success("Theme saved successfully");
        setTheme(themeCopy);
      },
      variables: {
        args: {
          ...themeCopy,
          activePages:
            (themeCopy.activePages.map((page) =>
              page.toUpperCase()
            ) as SectionPage[]) ?? [],
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
