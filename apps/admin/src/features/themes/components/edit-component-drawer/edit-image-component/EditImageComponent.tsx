import { FC } from "react";
import { FileUploadInput } from "ui-components";
import { FileType } from "ui-components/src/file-upload-input/enums";

import useEditImageComponent from "./useEditImageComponent";
import { SectionComponent } from "../../../../../app/context/theme-context/types";

export type EditImageComponentProps = {
  defaultComponent: SectionComponent;
  sectionIndex: number;
  componentIndex: number;
};

const EditImageComponent: FC<EditImageComponentProps> = ({
  defaultComponent,
  sectionIndex,
  componentIndex,
}) => {
  const { file, handleEdit, handleRemoveFile } = useEditImageComponent(
    defaultComponent,
    sectionIndex,
    componentIndex
  );

  return (
    <FileUploadInput
      type={FileType.IMAGE}
      value={file}
      removeFile={handleRemoveFile}
      onChange={(files) => {
        handleEdit(files[0]);
      }}
    />
  );
};

export default EditImageComponent;
