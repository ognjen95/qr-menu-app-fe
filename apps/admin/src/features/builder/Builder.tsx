import React, { useEffect } from "react";
import { Button, IconType } from "ui-components";
import { ButtonColor, ButtonSize } from "ui-components/src/button/enums";

import "aos/dist/aos.css";
import DefaultTheme from "~features/themes/default/DefaultTheme";

import BuilderSidebar from "./builder-sidebar/BuilderSidebar";
import useBuilderSidebar from "./builder-sidebar/useBuilderSidebar";
import { useThemeContext } from "../../app/context/theme-context/ThemeContext";

const Builder = () => {
  const { sidebarOpen, setSidebarOpen, selected, setSelected } =
    useBuilderSidebar();

  const { theme } = useThemeContext();

  return (
    <div className="flex items-start h-screen bg-white overflow-hidden w-full">
      <BuilderSidebar
        open={() => setSidebarOpen(true)}
        sidebarOpen={sidebarOpen}
        close={() => setSidebarOpen(false)}
        selected={selected}
        setSelected={setSelected}
      />
      <div className="flex flex-col flex-1 h-screen overflow-y-auto bg-gray w-full">
        <div className="flex items-center justify-end space-x-3 px-5 py-2">
          <Button
            leftIcon={{ type: IconType.ARROW_LEFT_LG }}
            color={ButtonColor.TRANSPARENT}
            size={ButtonSize.SMALL}
          >
            Undo
          </Button>
          <Button
            rightIcon={{ type: IconType.ARROW_RIGHT }}
            color={ButtonColor.TRANSPARENT}
            size={ButtonSize.SMALL}
          >
            Revert
          </Button>
          <Button
            leftIcon={{ type: IconType.SEARCH, fill: "none" }}
            color={ButtonColor.GREY}
            size={ButtonSize.SMALL}
          >
            Preview
          </Button>
          <Button
            leftIcon={{ type: IconType.CONTENT, fill: "none", stroke: "white" }}
            size={ButtonSize.SMALL}
          >
            Publish
          </Button>
        </div>
        <div className="flex flex-col items-center flex-1 overflow-y-auto gap-5  w-full shadow rounded-t-lg no-scrollbar">
          <DefaultTheme theme={theme} />
        </div>
      </div>
    </div>
  );
};

export default Builder;
