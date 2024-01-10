import { useState } from "react";

import { getCroppedImg } from "./helpers";
import {
  CroppedAreaType,
  UseImageCropProps,
  UseImageCropReturn,
} from "../types";

export const useImageCrop = ({
  src,
  setIsEditOpen,
  setSelectedImage,
}: UseImageCropProps): UseImageCropReturn => {
  const [crop, setCrop] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [zoom, setZoom] = useState<number>(1);
  const [isModalOpen, handleIsModalOpen] = useState(true);
  const [caPixels, setCaPixels] = useState<{
    width: number;
    height: number;
  } | null>(null);

  const onCropChange = (cropChange: { x: number; y: number }) => {
    setCrop(cropChange);
  };

  const onCropComplete = (
    croppedArea: CroppedAreaType,
    croppedAreaPixels: CroppedAreaType
  ) => {
    setCaPixels(croppedAreaPixels);
  };

  const handleZoomChange = (value: number | number[]) => {
    setZoom(value as number);
  };

  const handleMinusZoom = () => {
    setZoom((prev) => {
      if (prev > 1) return prev - 1;

      return prev;
    });
  };

  const handlePlusZoom = () => {
    setZoom((prev) => {
      if (prev < 10) return prev + 1;

      return prev;
    });
  };

  const onCancelClick = () => {
    setIsEditOpen(false);
    handleIsModalOpen(false);
  };

  const onApplyClick = async () => {
    const croppedImage = await getCroppedImg(
      src,
      caPixels as CroppedAreaType,
      0
    );
    setSelectedImage(croppedImage as string);

    setIsEditOpen(false);
    handleIsModalOpen(false);
  };

  return {
    crop,
    zoom,
    isModalOpen,
    handleIsModalOpen,
    onApplyClick,
    onCancelClick,
    handlePlusZoom,
    handleMinusZoom,
    handleZoomChange,
    onCropComplete,
    onCropChange,
  };
};
