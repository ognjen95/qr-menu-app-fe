import React from "react";
import { Input, Text, TextVariant } from "ui-components";

const FooterSubsection = () => (
  <div className="flex flex-col space-y-5">
    <div className="flex flex-col space-y-3">
      <Text variant={TextVariant.HEADING6}>Social media</Text>
      <Input placeholder="Facebook link" />
      <Input placeholder="Instagram link" />
      <Input placeholder="Twitter link" />
      <Input placeholder="LinkedIn link" />
      <Input placeholder="Youtube" />
    </div>
    <div className="flex flex-col space-y-3">
      <Text variant={TextVariant.HEADING6}>Contact</Text>
      <Input placeholder="Restaurant address" />
      <Input placeholder="Restaurant phone" />
      <Input placeholder="Restaurant email" />
    </div>
  </div>
);

export default FooterSubsection;
