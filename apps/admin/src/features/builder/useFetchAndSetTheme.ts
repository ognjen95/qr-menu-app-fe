import { useThemeContext } from "../../app/context/theme-context/ThemeContext";
import { themeMapper } from "../../app/context/theme-context/utils";
import { useFindThemeByTenantIdQuery } from "../../graphql-api";

const useFetchAndSetTheme = () => {
  const { theme, setTheme } = useThemeContext();

  const { loading } = useFindThemeByTenantIdQuery({
    skip: !!theme,
    onCompleted: (fetchedTheme) => {
      setTheme(themeMapper(fetchedTheme.findThemeByTenantId));
    },
  });

  return {
    loading,
    theme,
  };
};

export default useFetchAndSetTheme;
