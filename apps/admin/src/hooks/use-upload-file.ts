import axios from "axios";
import { getExtensionFromFileType } from "src/common/helpers";

import { usePresignedUrlLazyQuery } from "~graphql-api";

import { UseUploadFile, UseUploadFileReturn } from "./types";

const useUploadFile: UseUploadFile = (): UseUploadFileReturn => {
  const [presignedUrl] = usePresignedUrlLazyQuery();

  const handleUpload = async (file: File, url: string) => {
    try {
      await axios.put(url, file, {
        headers: {
          "Content-Type": "*/*",
        },
      });

      return true;
    } catch (e) {
      return false;
    }
  };

  const getPresignedUrl = async (
    file: File
  ): Promise<{ url: string; fileName: string }> => {
    const { data } = await presignedUrl({
      fetchPolicy: "no-cache",
      variables: {
        request: {
          fileExtension: getExtensionFromFileType(file.type),
        },
      },
    });

    return data?.presignedUrl ?? { url: "", fileName: "" };
  };

  const getPresignedUrlAndUpload = async (file: File): Promise<string> => {
    const { url, fileName } = await getPresignedUrl(file);

    await handleUpload(file, url);

    return fileName ?? "";
  };

  return getPresignedUrlAndUpload;
};

export default useUploadFile;
