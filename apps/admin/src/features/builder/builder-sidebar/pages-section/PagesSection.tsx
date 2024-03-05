import React from "react";
import { Switch, Text, TextVariant } from "ui-components";

import useWebsitePages from "./useWebsitePages";

const PagesSection = () => {
  const { activePagesState, onCheckedChange } = useWebsitePages();

  return (
    <div className="flex flex-col space-y-5">
      {activePagesState.map((page) => (
        <div
          key={page.url}
          className="flex items-center space-x-3 justify-between"
        >
          <Text customClasses="font-semibold" variant={TextVariant.BODY2}>
            {page.name}
          </Text>
          <Switch
            checked={page.isVisible}
            onCheckedChange={(checked: boolean) =>
              onCheckedChange(checked, page.name)
            }
          />
        </div>
      ))}
    </div>
  );
};

export default PagesSection;
