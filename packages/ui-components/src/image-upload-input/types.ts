import { ChangeEvent, Dispatch, MutableRefObject, SetStateAction } from "react";

export type CroppedAreaType = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export type UseImageCropProps = {
  src: string;
  setIsEditOpen: Dispatch<SetStateAction<boolean>>;
  setSelectedImage: Dispatch<SetStateAction<string | null>>;
};

export type UseImageCropReturn = {
  onCropChange: (cropChange: { x: number; y: number }) => void;
  onCropComplete: (
    croppedArea: CroppedAreaType,
    croppedAreaPixels: CroppedAreaType
  ) => void;
  handleZoomChange: (value: number | number[]) => void;
  handleMinusZoom: () => void;
  handlePlusZoom: () => void;
  onCancelClick: () => void;
  onApplyClick: () => Promise<void>;
  handleIsModalOpen: Dispatch<SetStateAction<boolean>>;
  isModalOpen: boolean;
  crop: {
    x: number;
    y: number;
  };
  zoom: number;
};

export type UseImageCropModalProps = {
  close: () => void;
  setIsEditOpen: Dispatch<SetStateAction<boolean>>;
};

export type UseImageCropModalReturn = {
  ref: HTMLElement | null;
  setRef: Dispatch<SetStateAction<HTMLElement | null>>;
  closeModal: () => void;
};

export type UseImageUploadInputReturn = {
  deleteImage: () => void;
  openEditMenu: () => void;
  handleClick: () => void;
  handleImageUpload: (e: ChangeEvent<HTMLInputElement>) => Promise<void>;
  error: string;
  isEditOpen: boolean;
  setIsEditOpen: Dispatch<SetStateAction<boolean>>;
  selectedImage: string | null;
  inputRef: MutableRefObject<HTMLInputElement | null>;
  setSelectedImage: Dispatch<SetStateAction<string | null>>;
};
