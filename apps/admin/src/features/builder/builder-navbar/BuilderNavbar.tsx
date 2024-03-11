import clsx from "clsx";
import { useSearchParams } from "next/navigation";
import React, { FC } from "react";
import { DropdownMenu, IconType, Text, Button, Switch } from "ui-components";
import { ButtonColor, ButtonSize } from "ui-components/src/button/enums";
import { colors } from "ui-components/src/config/tailwind-config";

import useBuilderPageSelect from "./useBuilderPageSelect";
import useSaveTheme from "./useSaveTheme";
import { SectionPage } from "../../../app/context/theme-context/enums";

export type BuilderNavbarProps = {
  toogleWebsiteEditor: () => void;
  isWebsiteEditor: boolean;
};

const BuilderNavbar: FC<BuilderNavbarProps> = ({
  toogleWebsiteEditor,
  isWebsiteEditor,
}) => {
  const { get } = useSearchParams();
  const selectedPage = (get("page") as SectionPage) || SectionPage.HOME;
  const { pageOptions } = useBuilderPageSelect(selectedPage);
  const { saveThemeLoading, handleSaveTheme } = useSaveTheme();

  return (
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
          label="Website pages"
          iconType={IconType.FILE_DOCUMENT}
          iconColor={colors.primary[500]}
          items={pageOptions}
        />
      </div>
      <div className="flex items-center space-x-2">
        <Text
          color={clsx("font-semibold", {
            "text-primary-500 font-semibold": isWebsiteEditor,
            "text-grey-500": !isWebsiteEditor,
          })}
        >
          Website
        </Text>
        <Switch
          checked={!isWebsiteEditor}
          onCheckedChange={() => toogleWebsiteEditor()}
        />
        <Text
          color={clsx("font-semibold", {
            "text-primary-500": !isWebsiteEditor,
            "text-grey-500": isWebsiteEditor,
          })}
        >
          QR menu
        </Text>
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
  );
};

export default BuilderNavbar;
