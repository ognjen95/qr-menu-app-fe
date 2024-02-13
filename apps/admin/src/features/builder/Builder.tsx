import React from "react";
import { Button, IconType } from "ui-components";
import { ButtonColor, ButtonSize } from "ui-components/src/button/enums";

import BuilderSidebar from "./builder-sidebar/BuilderSidebar";
import useBuilderSidebar from "./builder-sidebar/useBuilderSidebar";
import { useThemeContext } from "../../app/context/theme-context/ThemeContext";

const Builder = () => {
  const { sidebarOpen, setSidebarOpen, selected, setSelected } =
    useBuilderSidebar();

  const { theme } = useThemeContext();

  return (
    <div className="flex items-start h-screen bg-grey-50 bg-white overflow-hidden w-full">
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
        <div className="flex flex-col items-center gap-5 justify-center h-screen w-full shadow rounded-tl-lg bg-[url(/images/pub-food.png)]">
          <h1
            style={{
              color: theme.colorPallete.headers,
              fontSize: theme.typography.headers.fontSize,
              fontFamily: theme.typography.headers.fontFamily,
              fontWeight: theme.typography.headers.weight,
            }}
          >
            Website & Menu Builder
          </h1>
          <p
            style={{
              color: theme.colorPallete.text,
              fontSize: theme.typography.text.fontSize,
              fontFamily: theme.typography.text.fontFamily,
              fontWeight: theme.typography.text.weight,
            }}
          >
            This is paragraph
          </p>
          <button
            style={{
              backgroundColor: theme.colorPallete.primary,
              color: theme.colorPallete.text,
              borderRadius: theme.buttons.borderRadius,
            }}
            type="button"
            className="px-6 h-10 bg-primary-500 flex items-center justify-center"
          >
            Square
          </button>
        </div>
      </div>
    </div>
  );
};

export default Builder;
