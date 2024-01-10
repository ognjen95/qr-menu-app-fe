import { useState, useRef, ChangeEvent } from "react";

import { readFile } from "./image-crop/helpers";
import { UseImageUploadInputReturn } from "./types";

export const useImageUploadInput = (): UseImageUploadInputReturn => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [error, setError] = useState("");

  const handleImageUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    if (!(file.type === "image/jpeg" || file.type === "image/png")) {
      setError("Please select a JPEG or PNG image.");

      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setError("Image size exceeds 5MB limit.");
      return;
    }

    setError("");
    const imageDataUrl = await readFile(file);
    setSelectedImage(imageDataUrl);
  };

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const openEditMenu = () => {
    setIsEditOpen(true);
  };

  const deleteImage = () => {
    setSelectedImage(null);

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return {
    deleteImage,
    openEditMenu,
    handleClick,
    handleImageUpload,
    error,
    isEditOpen,
    selectedImage,
    inputRef,
    setSelectedImage,
    setIsEditOpen,
  };
};
