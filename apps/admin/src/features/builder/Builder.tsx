import React from "react";
import { toast } from "react-toastify";
import { Button, DropdownMenu, IconType, Loader } from "ui-components";
import { ButtonColor, ButtonSize } from "ui-components/src/button/enums";
import { colors } from "ui-components/src/config/tailwind-config";

import DefaultTheme from "~features/themes/default/DefaultTheme";

import BuilderSidebar from "./builder-sidebar/BuilderSidebar";
import useBuilderSidebar from "./builder-sidebar/useBuilderSidebar";
import { useThemeContext } from "../../app/context/theme-context/ThemeContext";
import {
  BUTTON_SIZE_MAPPER,
  BUTTON_TYPE_MAPPER,
} from "../../app/context/theme-context/types";
import { useSaveThemeConfigurationMutation } from "../../graphql-api";

const Builder = () => {
  const { sidebarOpen, setSidebarOpen, selected, setSelected } =
    useBuilderSidebar();

  const { theme, loading } = useThemeContext();

  const [saveTheme, { loading: saveThemeLoading }] =
    useSaveThemeConfigurationMutation();

  const handleSaveTheme = () => {
    if (!theme) return;

    saveTheme({
      onCompleted: () => {
        toast.success("Theme saved successfully");
      },
      variables: {
        args: {
          ...theme,
          logo: {
            url: theme.logo.url ?? "",
          },
          buttons: {
            ...theme.buttons,
            buttonSize: BUTTON_SIZE_MAPPER[theme.buttons.buttonSize],
            buttonType: BUTTON_TYPE_MAPPER[theme.buttons.buttonType],
          },
        },
      },
    });
  };

  return (
    <div className="flex items-start h-screen bg-white overflow-hidden w-full">
      <BuilderSidebar
        open={() => setSidebarOpen(true)}
        sidebarOpen={sidebarOpen}
        close={() => setSidebarOpen(false)}
        selected={selected}
        setSelected={setSelected}
      />
      <div className="flex flex-col flex-1 h-screen overflow-y-auto w-full">
        <div className="flex items-center justify-between space-x-3 px-5 py-2">
          <div className="flex items-center space-x-2 w-[500px]">
            <DropdownMenu
              label="Languages"
              iconType={IconType.GLOBE}
              iconColor={colors.primary[500]}
              items={[
                { key: "en", label: "English language", onClick: () => {} },
                { key: "sr", label: "Serbian language", onClick: () => {} },
              ]}
            />
            <DropdownMenu
              label="Pages"
              iconType={IconType.FILE_DOCUMENT}
              iconColor={colors.primary[500]}
              items={[
                { key: "home", label: "Home page", onClick: () => {} },
                { key: "about", label: "About page", onClick: () => {} },
                { key: "contact", label: "Contact page", onClick: () => {} },
                { key: "galery", label: "Galery page", onClick: () => {} },
              ]}
            />
          </div>
          <div className="flex items-center space-x-2">
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
              loading={saveThemeLoading}
              onClick={handleSaveTheme}
              leftIcon={{
                type: IconType.CONTENT,
                fill: "none",
                stroke: "white",
              }}
              size={ButtonSize.SMALL}
            >
              Save & Publish
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-center flex-1 overflow-y-auto gap-5  w-full shadow  no-scrollbar shadow shadow-grey-300">
          {loading && <Loader centered />}
          {!loading && theme && <DefaultTheme theme={theme} />}
        </div>
      </div>
    </div>
  );
};

export default Builder;
