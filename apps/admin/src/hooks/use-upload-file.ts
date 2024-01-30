import axios from "axios";
import { useState } from "react";

import { UseUploadFile, UseUploadFileReturn } from "./types";
import { usePresignedUrlLazyQuery } from "../graphql-api";

const useUploadFile: UseUploadFile = (): UseUploadFileReturn => {
  const [getPresignedUrl] = usePresignedUrlLazyQuery();
  const [isLoading, setIsLoading] = useState(false);

  const handlePublicUpload = async (file: File): Promise<string> => {
    setIsLoading(true);
    try {
      const { data } = await getPresignedUrl({
        fetchPolicy: "network-only",
        variables: {
          fileNames: [file.name],
        },
      });

      const url = data?.presignedUrl[0]?.link;
      const id = data?.presignedUrl[0]?.id;

      if (!url || !id) return "";

      await axios.put(url, file, {
        headers: {
          "Content-Type": "*/*",
        },
      });

      return id;
    } catch (error) {
      return "";
    } finally {
      setIsLoading(false);
    }
  };

  return {
    loading: isLoading,
    upload: handlePublicUpload,
  };
};

export default useUploadFile;
