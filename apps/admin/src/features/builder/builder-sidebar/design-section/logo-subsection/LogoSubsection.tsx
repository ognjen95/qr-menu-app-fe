import React, { useEffect, useState } from "react";
import { TextVariant, Text, FileUploadInput } from "ui-components";
import { FileType } from "ui-components/src/file-upload-input/enums";

import { useThemeContext } from "../../../../../app/context/theme-context/ThemeContext";
import { downloadFile } from "../../../../../common/helpers";

const LogoSubsection = () => {
  const { theme, setTheme } = useThemeContext();
  const currentLogo = theme?.logo?.url;
  const [logo, setLogo] = useState<File | undefined>(undefined);

  useEffect(() => {
    if (theme?.logo.file) {
      setLogo(theme?.logo.file);
    } else {
      downloadFile(currentLogo || "", (newFile) => {
        setLogo(newFile);
      });
    }
  }, [currentLogo, theme?.logo.file]);

  return (
    <div className="flex flex-col">
      <Text variant={TextVariant.HEADING6}>Logo</Text>
      <Text>Select logo image for your website</Text>
      <div className="mt-3">
        <FileUploadInput
          value={logo}
          type={FileType.IMAGE}
          onChange={(file) => {
            setLogo(file[0]);
            setTheme({
              ...theme!,
              logo: {
                file: file[0],
              },
            });
          }}
        />
      </div>
    </div>
  );
};

export default LogoSubsection;
