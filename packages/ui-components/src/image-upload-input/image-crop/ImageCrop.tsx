import Slider from "rc-slider";
import React, { Dispatch, SetStateAction } from "react";
import Cropper from "react-easy-crop";
import "rc-slider/assets/index.css";

import ImageCropModal from "./ImageCropModal";
import { useImageCrop } from "./use-image-crop";
import Button from "../../button";
import { ButtonColor, ButtonSize } from "../../button/enums";
import { IconType, IconSize } from "../../icon/enums";
import IconButton from "../../icon-button";

type ImageCropperProps = {
  src: string;
  setIsEditOpen: Dispatch<SetStateAction<boolean>>;
  setSelectedImage: Dispatch<SetStateAction<string | null>>;
};

const ImageCropper: React.FC<ImageCropperProps> = ({
  src,
  setIsEditOpen,
  setSelectedImage,
}) => {
  const {
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
  } = useImageCrop({ src, setIsEditOpen, setSelectedImage });

  return (
    <ImageCropModal
      isOpen={isModalOpen}
      setIsEditOpen={setIsEditOpen}
      close={() => handleIsModalOpen(false)}
    >
      <div className="w-[480px] h-[480px] rounded-lg relative">
        <Cropper
          image={src}
          crop={crop}
          zoom={zoom}
          aspect={1}
          cropShape="round"
          cropSize={{
            width: 320,
            height: 320,
          }}
          showGrid={false}
          onCropChange={onCropChange}
          onCropComplete={onCropComplete}
        />
      </div>
      <div className="flex justify-between items-center w-full pt-4">
        <div className="flex-1 flex items-center gap-2 mx-2 mr-8">
          <IconButton
            iconProps={{
              type: IconType.REMOVE_MINUS_CIRCLE,
              fill: "transparent",
              onClick: handleMinusZoom,
              size: IconSize.MEDIUM,
            }}
          />
          <Slider min={1} max={10} value={zoom} onChange={handleZoomChange} />
          <IconButton
            iconProps={{
              type: IconType.ADD_PLUS_CIRCLE,
              fill: "transparent",
              onClick: handlePlusZoom,
              size: IconSize.MEDIUM,
            }}
          />
        </div>
        <div className="flex flex-1 space-x-2">
          <Button
            color={ButtonColor.GREY}
            size={ButtonSize.SMALL}
            onClick={onCancelClick}
            fullWidth
          >
            Cancel
          </Button>
          <Button
            fullWidth
            color={ButtonColor.PRIMARY}
            size={ButtonSize.SMALL}
            onClick={onApplyClick}
          >
            Save
          </Button>
        </div>
      </div>
    </ImageCropModal>
  );
};

export default ImageCropper;
