import { IMAGE_EXTENSIONS, VIDEO_EXTENSIONS } from "./contants";
import { ContentType } from "../content-preview-modal";
import { IconType } from "../icon/enums";

export const getContentTypeFromFileType = (fileType: string): ContentType => {
  if (fileType.startsWith("video/")) {
    return ContentType.VIDEO;
  }

  if (fileType === "application/pdf") {
    return ContentType.PDF;
  }

  return ContentType.IMAGE;
};

export const getFileExtension = (fileName: string): string | undefined => {
  const parts = fileName.split(/[#?]/)[0].split(".");

  if (parts.length > 1) {
    return parts[parts.length - 1].toLowerCase();
  }
  return undefined;
};

export const getIcon = (fileName: string): IconType => {
  const extension = getFileExtension(fileName);

  if (!extension) {
    return IconType.IMAGE_1;
  }

  if (VIDEO_EXTENSIONS.includes(extension)) {
    return IconType.PLAY_VIDEO;
  }

  if (IMAGE_EXTENSIONS.includes(extension)) {
    return IconType.IMAGE_1;
  }

  if (extension === "pdf") {
    return IconType.PDF_FILE;
  }

  return IconType.IMAGE_1;
};

export const getContentTypeByFileName = (
  fileName: string
): ContentType | undefined => {
  const extension = getFileExtension(fileName);

  if (!extension) {
    return undefined;
  }

  if (VIDEO_EXTENSIONS.includes(extension)) {
    return ContentType.VIDEO;
  }

  if (extension === "pdf") {
    return ContentType.PDF;
  }

  return ContentType.IMAGE;
};

export const getAcceptedVideoFormats = (): string =>
  VIDEO_EXTENSIONS.map((extension) => `video/${extension}`).join(",");

export const getAcceptedImageFormats = (): string =>
  IMAGE_EXTENSIONS.map((extension) => `image/${extension.split(".")[1]}`).join(
    ","
  );

export const getVideoLengthInSeconds = async (
  videoFile: File
): Promise<number | null> =>
  new Promise((resolve, reject) => {
    if (!videoFile || !getAcceptedVideoFormats().includes(videoFile.type)) {
      resolve(null);
    }

    const video = document.createElement("video");
    video.preload = "metadata";

    video.onloadedmetadata = () => {
      const duration = Math.floor(video.duration);
      video.remove();
      resolve(duration);
    };

    video.onerror = () => {
      video.remove();
      reject(Error("Error loading video"));
    };

    video.src = URL.createObjectURL(videoFile);
  });
