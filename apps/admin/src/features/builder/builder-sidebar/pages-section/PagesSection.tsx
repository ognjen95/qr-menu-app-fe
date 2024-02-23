import React from "react";
import { Switch, Text, TextVariant } from "ui-components";

import { PAGES } from "../../../themes/pages/constants";

const PagesSection = () => (
  <div className="flex flex-col space-y-5">
    {PAGES.map((page) => (
      <div
        key={page.url}
        className="flex items-center space-x-3 justify-between"
      >
        <Text customClasses="font-semibold" variant={TextVariant.BODY2}>
          {page.name}
        </Text>
        <Switch checked={page.isVisible} onCheckedChange={(checked) => {}} />
      </div>
    ))}
  </div>
);

export default PagesSection;
