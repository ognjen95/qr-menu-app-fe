import React from "react";
import { Checkbox, Switch, Text, TextVariant } from "ui-components";

const LANGUAGES = [
  { name: "English", isVisible: true, url: "en", value: "en", isMain: true },
  { name: "Spanish", isVisible: false, url: "es", value: "es", isMain: false },
  { name: "French", isVisible: false, url: "fr", value: "fr", isMain: false },
  { name: "German", isVisible: false, url: "de", value: "de", isMain: false },
  { name: "Serbian", isVisible: false, url: "sr", value: "sr", isMain: false },
];

const LanguagesSection = () => (
  <div className="flex flex-col space-y-5">
    {LANGUAGES.map((lang) => (
      <div
        key={lang.name}
        className="flex items-center space-x-3 justify-between"
      >
        <Text customClasses="font-semibold" variant={TextVariant.BODY2}>
          {lang.name}
        </Text>
        <div className="flex items-center space-x-5">
          <Checkbox
            label="Default"
            checked={lang.isMain}
            onChange={(checked) => {}}
          />
          <Switch checked={lang.isVisible} onCheckedChange={(checked) => {}} />
        </div>
      </div>
    ))}
  </div>
);

export default LanguagesSection;
