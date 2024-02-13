import React, { useState } from "react";
import { TextVariant, Text, FileUploadInput } from "ui-components";
import { FileType } from "ui-components/src/file-upload-input/enums";

const LogoSubsection = () => {
  const [background, setBackground] = useState<File | undefined>(undefined);

  return (
    <div className="flex flex-col">
      <Text variant={TextVariant.HEADING6}>Logo</Text>
      <Text>Select logo image for your website</Text>
      <div className="mt-3">
        <FileUploadInput
          value={background}
          type={FileType.IMAGE}
          onChange={(file) => {
            setBackground(file[0]);
          }}
        />
      </div>
    </div>
  );
};

export default LogoSubsection;
