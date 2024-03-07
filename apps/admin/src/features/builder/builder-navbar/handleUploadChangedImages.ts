import { cloneDeep } from "@apollo/client/utilities";

import { DefaultThemeType } from "../../../app/context/theme-context/types";
import { addBucketPrefix } from "../../../common/helpers";
import { ComponentType } from "../../../graphql-api";

const handleUploadChangedImages = async (
  theme: DefaultThemeType,
  upload: (file: File) => Promise<string | undefined>
) => {
  const themeCopy = cloneDeep(theme);

  await Promise.all(
    themeCopy.sections.map(async (section) =>
      Promise.all(
        section.components.map(async (component) => {
          if (component.type !== ComponentType.IMAGE) return component;
          if (!component.props?.file) return component;

          const newImageForUpload = component.props.file;
          const newComponent = component;

          if (newComponent.props) newComponent.props.file = undefined;

          const uploadId = await upload(newImageForUpload);
          // TODO: Remove old image from bucket
          // TDOO: Add prop currentIdToBeRemoved to upload function, so it deletes it from the bucket

          if (!uploadId) return component;

          newComponent!.props!.src = addBucketPrefix(uploadId);
          return newComponent;
        })
      )
    )
  );

  if (theme.logo.file) {
    const uploadId = await upload(theme.logo.file);

    if (!uploadId) return themeCopy;

    themeCopy.logo.url = addBucketPrefix(uploadId);
    themeCopy.logo.file = undefined;
  }

  return themeCopy;
};

export default handleUploadChangedImages;
