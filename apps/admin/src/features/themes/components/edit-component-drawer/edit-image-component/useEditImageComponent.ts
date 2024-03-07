import { useCallback, useEffect, useState } from "react";

import { useThemeContext } from "../../../../../app/context/theme-context/ThemeContext";
import { SectionComponent } from "../../../../../app/context/theme-context/types";

const useEditImageComponent = (
  defaultComponent: SectionComponent,
  sectionIndex: number,
  componentIndex: number
) => {
  const [file, setFile] = useState<File>();
  const { theme, editSection } = useThemeContext();

  const section = theme!.sections[sectionIndex];
  const component = section.components[componentIndex];
  const componentSrc = component.props?.src;
  const defaultSrc = defaultComponent.props?.src;

  const handleEdit = useCallback(
    (newFile: File) => {
      const newComponent = {
        ...component,
        props: {
          ...component.props,
          file: newFile,
        },
      };

      section.components[componentIndex] = newComponent;

      editSection(section, sectionIndex);
      setFile(newFile);
    },
    [section, component, componentIndex, editSection, sectionIndex]
  );

  const handleRemoveFile = () => {
    setFile(undefined);
  };

  useEffect(() => {
    if (!component.props?.file) return;

    setFile(component.props?.file);
  }, [component.props?.file]);

  useEffect(() => {
    if ((!componentSrc && !defaultSrc) || component.props?.file) return;

    const urlToFile = async (url: string) => {
      if (!url) return;

      const response = await fetch(url);
      const data = await response.blob();
      const metadata = {
        type: `image/${componentSrc?.split(".").pop() ?? "jpg"}`,
      };

      setFile(new File([data], "image.jpg", metadata));
    };

    urlToFile(componentSrc || defaultSrc || "");
  }, [component.props?.file, componentSrc, defaultSrc]);

  return {
    file,
    handleEdit,
    handleRemoveFile,
  };
};

export default useEditImageComponent;
