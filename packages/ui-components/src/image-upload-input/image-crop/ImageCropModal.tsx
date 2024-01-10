import { Dispatch, SetStateAction } from "react";
import { Portal } from "react-portal";

import { useImageCropModal } from "./use-image-crop-modal";
import { FCWithChildren } from "../../common/types";
import { IconType, IconSize } from "../../icon/enums";
import IconButton from "../../icon-button";
import Text from "../../text";
import { TextVariant } from "../../text/enums";

export type ImageCropModalProps = {
  isOpen: boolean;
  close: () => void;
  setIsEditOpen: Dispatch<SetStateAction<boolean>>;
  closeOnOverlayClick?: boolean;
};

const ImageCropModal: FCWithChildren<ImageCropModalProps> = ({
  isOpen = false,
  children,
  close,
  setIsEditOpen,
  closeOnOverlayClick = false,
}) => {
  const { closeModal, ref } = useImageCropModal({
    close,
    setIsEditOpen,
  });

  return (
    <div>
      {isOpen && (
        <Portal node={ref}>
          <div
            {...(closeOnOverlayClick && { onClick: closeModal })}
            className="absolute w-screen h-screen top-0 flex flex-col items-center justify-center z-50 bg-white/80 backdrop-blur"
          >
            <div className="p-4 rounded-xl bg-white shadow-lg">
              <div className="flex flex-col space-y-2 items-center justify-center">
                <div className="flex justify-between items-center w-full mb-4">
                  <div className="text-center">
                    <Text variant={TextVariant.HEADING6} color="text-grey-900">
                      Edit Photo
                    </Text>
                  </div>
                  <div>
                    <IconButton
                      iconProps={{
                        type: IconType.CLOSE,
                        fill: "transparent",
                        onClick: closeModal,
                        size: IconSize.MEDIUM,
                      }}
                    />
                  </div>
                </div>
                {children}
              </div>
            </div>
          </div>
        </Portal>
      )}
    </div>
  );
};

export default ImageCropModal;
