import { FC } from "react";
import { Loader } from "ui-components";

import ThemeRenderer from "~features/themes/theme-renderer/ThemeRederer";

import BuilderNavbar from "./builder-navbar/BuilderNavbar";
import useSaveTheme from "./builder-navbar/useSaveTheme";
import BuilderSidebar from "./builder-sidebar/BuilderSidebar";
import useBuilderSidebar from "./builder-sidebar/useBuilderSidebar";
import { useThemeContext } from "../../app/context/theme-context/ThemeContext";

const Builder: FC = () => {
  const { sidebarOpen, setSidebarOpen, selected, setSelected } =
    useBuilderSidebar();

  const { theme, loading, setTheme } = useThemeContext();

  const { saveThemeLoading, handleSaveTheme } = useSaveTheme(theme, setTheme);

  return (
    <div className="flex items-start h-screen bg-white overflow-hidden w-full">
      <BuilderSidebar
        open={() => setSidebarOpen(true)}
        sidebarOpen={sidebarOpen}
        close={() => setSidebarOpen(false)}
        selected={selected}
        setSelected={setSelected}
      />
      <div className="flex flex-col flex-1 h-full overflow-y-auto w-full">
        <BuilderNavbar
          saveThemeLoading={saveThemeLoading}
          handleSaveTheme={handleSaveTheme}
        />
        <div className="flex flex-col items-center flex-1 overflow-y-auto gap-5 w-full shadow  no-scrollbar shadow shadow-grey-300">
          {loading && <Loader centered />}
          {!loading && theme && <ThemeRenderer theme={theme} />}
        </div>
      </div>
    </div>
  );
};

export default Builder;
