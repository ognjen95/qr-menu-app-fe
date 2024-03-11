import clsx from "clsx";
import { FC, useState } from "react";
import { Loader } from "ui-components";

import ThemeRenderer from "~features/themes/theme-renderer/ThemeRederer";

import BuilderNavbar from "./builder-navbar/BuilderNavbar";
import BuilderSidebar from "./builder-sidebar/BuilderSidebar";
import useFetchAndSetTheme from "./useFetchAndSetTheme";
import MenuFeature from "../menu/visitor-menu-view/MenuFeature";

const Builder: FC = () => {
  const [isWebsiteBuilder, setIsWebsiteBuilder] = useState(true);

  const { theme, loading } = useFetchAndSetTheme();

  const menuId = "65ef19002496ffaa19b7fd93"; // TODO: get from router

  return (
    <div className="flex items-start h-screen bg-white overflow-hidden w-full">
      <BuilderSidebar />
      <div className="flex flex-col flex-1 h-full overflow-y-auto w-full">
        <BuilderNavbar
          isWebsiteEditor={isWebsiteBuilder}
          toogleWebsiteEditor={() => setIsWebsiteBuilder((prev) => !prev)}
        />
        <div
          className={clsx(
            "flex flex-col items-center flex-1 overflow-y-auto w-full shadow no-scrollbar shadow shadow-grey-300",
            {
              "bg-black bg-[url(/images/pub-food.png)] bg-no-repeat bg-cover bg-center":
                !isWebsiteBuilder,
            }
          )}
        >
          {loading && <Loader centered />}
          {!loading && theme && !isWebsiteBuilder && (
            <div className="w-[450px]">
              <MenuFeature isBuilder id={menuId} />
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
