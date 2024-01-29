import axios from "axios";

import { UseUploadFile, UseUploadFileReturn } from "./types";


const useUploadFile: UseUploadFile = (): UseUploadFileReturn => {
  const handlePublicUpload = async (file: File, url: string) => {
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


  return {
    upload: handlePublicUpload,
  };
};

export default useUploadFile;

