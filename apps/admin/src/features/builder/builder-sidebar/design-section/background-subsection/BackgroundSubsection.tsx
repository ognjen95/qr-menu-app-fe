import React, { useState } from "react";
import { TextVariant, Text, FileUploadInput } from "ui-components";
import CheckBox from "ui-components/src/checkbox";
import { FileType } from "ui-components/src/file-upload-input/enums";

const BackgroundSubsection = () => {
  const [background, setBackground] = useState<File | undefined>(undefined);
  const [isStrech, setIsStrech] = useState(true);

  return (
    <div className="flex flex-col">
      <Text variant={TextVariant.HEADING6}>Background image</Text>
      <Text>Select background image for your website</Text>
      <div className="mt-3">
        <FileUploadInput
          value={background}
          type={FileType.IMAGE}
          onChange={(file) => {
            setBackground(file[0]);
          }}
        />
      </div>
      <div className="flex py-3">
        <CheckBox
          checked={isStrech}
          label="Strech image full size"
          onChange={() => {
            setIsStrech(!isStrech);
          }}
        />
      </div>
    </div>
  );
};

export default BackgroundSubsection;
