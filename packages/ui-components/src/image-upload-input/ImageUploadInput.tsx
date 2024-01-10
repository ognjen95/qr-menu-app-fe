import ImageCropper from "./image-crop/ImageCrop";
import { useImageUploadInput } from "./use-image-upload-input";
import Avatar from "../avatar";
import Button from "../button";
import { ButtonType, ButtonColor, ButtonSize } from "../button/enums";
import { colors } from "../config/tailwind-config";
import { IconType, IconSize } from "../icon/enums";
import IconButton from "../icon-button";
import Text from "../text";
import { TextVariant } from "../text/enums";

const ImageUploader = () => {
  const {
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
  } = useImageUploadInput();

  return (
    <div>
      <input
        ref={inputRef}
        type="file"
        accept=".jpg, .jpeg, .png"
        onChange={handleImageUpload}
        style={{ display: "none" }}
        id="imageInput"
      />
      {isEditOpen && (
        <ImageCropper
          setSelectedImage={setSelectedImage}
          setIsEditOpen={setIsEditOpen}
          src={selectedImage!}
        />
      )}
      <div className="flex gap-4">
        <div>
          <Avatar
            size="LARGE"
            noImage={!selectedImage}
            imageSrc={selectedImage || undefined}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Text variant={TextVariant.BODY4} color="text-grey-600">
            Image (Optional)
          </Text>
          <Text variant={TextVariant.BODY3} color="text-grey-600">
            Supported formats are .png and .jpg up to 5mb in size.
          </Text>
          <div>
            {selectedImage ? (
              <div className="flex items-center">
                <IconButton
                  iconProps={{
                    type: IconType.EDIT_PENCIL_1,
                    fill: "transparent",
                    onClick: openEditMenu,
                    size: IconSize.MEDIUM,
                  }}
                />
                <IconButton
                  iconProps={{
                    type: IconType.TRASH_FULL,
                    stroke: colors.red[500],
                    onClick: deleteImage,
                    size: IconSize.MEDIUM,
                  }}
                />
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Button
                  onClick={handleClick}
                  type={ButtonType.BUTTON}
                  color={ButtonColor.PRIMARY}
                  size={ButtonSize.SMALL}
                >
                  <div className="px-2">Upload</div>
                </Button>
                <div>
                  {error && (
                    <Text variant={TextVariant.BODY4} color="text-red-500">
                      {error}
                    </Text>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageUploader;
