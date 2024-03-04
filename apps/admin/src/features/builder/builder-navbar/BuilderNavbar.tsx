import React, { FC } from "react";
import { DropdownMenu, IconType, Button } from "ui-components";
import { ButtonColor, ButtonSize } from "ui-components/src/button/enums";
import { colors } from "ui-components/src/config/tailwind-config";

export type BuilderNavbarProps = {
  saveThemeLoading: boolean;
  handleSaveTheme: () => void;
};

const BuilderNavbar: FC<BuilderNavbarProps> = ({
  saveThemeLoading,
  handleSaveTheme,
}) => (
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
);

export default BuilderNavbar;
