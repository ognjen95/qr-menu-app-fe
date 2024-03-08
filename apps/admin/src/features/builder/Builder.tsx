import { FC, useEffect, useState } from "react";
import { Loader } from "ui-components";

import ThemeRenderer from "~features/themes/theme-renderer/ThemeRederer";

import BuilderNavbar from "./builder-navbar/BuilderNavbar";
import useSaveTheme from "./builder-navbar/useSaveTheme";
import BuilderSidebar from "./builder-sidebar/BuilderSidebar";
import useBuilderSidebar from "./builder-sidebar/useBuilderSidebar";
import { useThemeContext } from "../../app/context/theme-context/ThemeContext";
import MenuFeature from "../menu/visitor-menu-view/MenuFeature";

const Builder: FC = () => {
  const [isWebsiteBuilder, setIsWebsiteBuilder] = useState(true);

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
          isWebsiteEditor={isWebsiteBuilder}
          toogleWebsiteEditor={() => setIsWebsiteBuilder((prev) => !prev)}
          saveThemeLoading={saveThemeLoading}
          handleSaveTheme={handleSaveTheme}
        />
        <div className="flex flex-col items-center flex-1 overflow-y-auto w-full shadow  no-scrollbar shadow shadow-grey-300">
          {loading && <Loader centered />}
          {!loading && theme && !isWebsiteBuilder && (
            <div className="w-[450px]">
              <MenuFeature isBuilder id="65bcd68784c0415100207b31" />
            </div>
          )}
          {!loading && theme && isWebsiteBuilder && (
            <ThemeRenderer theme={theme} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Builder;
