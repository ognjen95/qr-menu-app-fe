import Image from "next/image";
import React, { FC } from "react";
import {
  Modal,
  IconType,
  Form,
  Text,
  TextVariant,
  Button,
  Icon,
  InputField,
  Chip,
  IconButton,
} from "ui-components";
import { ButtonColor, ButtonSize } from "ui-components/src/button/enums";
import { ChipVariant } from "ui-components/src/chip/enums";
import { colors } from "ui-components/src/config/tailwind-config";
import { UseModalReturn } from "ui-components/src/modal/useModal";

import { DEFAULT_VALUES } from "./constants";
import { UseCreateMenuItemReturn } from "./useCreateAndEditMenuItem";
import { ItemModalModel, MenuSectionItem } from "../menu-overview/types";

export type CreateMenuItemFeatureProps = UseCreateMenuItemReturn & {
  modal: UseModalReturn<ItemModalModel>;
  disableConfirmButton?: boolean;
  editModal?: UseModalReturn<MenuSectionItem>;
};

const CreateMenuItemFormModal: FC<CreateMenuItemFeatureProps> = ({
  modal,
  loading,
  formFields,
  addVariant,
  removeVariant,
  onTagClick,
  onAlergenClick,
  sectionItemForm,
  onSubmit,
  image,
  setImage,
  imageRef,
  disableConfirmButton,
  editModal,
}) => {
  const isEdit = !!editModal?.isOpen;
  const title = isEdit
    ? `Edit ${editModal.params?.name ?? ""}`
    : `Add new item to "${modal?.params?.sectionName ?? ""}" section`;

  return (
    <Modal
      modalIcon={{
        type: IconType.ADD_PLUS_CIRCLE,
        stroke: colors.primary[600],
      }}
      fullWidth
      formName="sectionItemForm"
      title={title}
      description="Provide detailed information and image to make it apealing to customers."
      isOpen={modal.isOpen || editModal?.isOpen || false}
      close={() => {
        sectionItemForm.reset(DEFAULT_VALUES);
        setImage(null);

        if (isEdit) {
          editModal.close();
          editModal.reset();
        } else {
          modal.reset();
          modal.close();
        }
      }}
      loading={loading}
      hideCloseButton
      disableConfirmButton={disableConfirmButton}
    >
      <Form
        form={sectionItemForm}
        formName="sectionItemForm"
        fullWidth
        fullHeight
        onSubmit={onSubmit}
      >
        {({ control }) => (
          <div className="grid grid-cols-3 w-full gap-10 h-full">
            <div className="flex flex-col space-y-5 w-full py-5 col-span-1 items-center">
              <Text variant={TextVariant.HEADING6}>1. Image</Text>
              <div
                onClick={() => imageRef.current?.click()}
                className="hover:shadow-primary-300 cursor-pointer shadow rounded-xl overflow-hidden h-[200px] w-[200px] relative"
              >
                <Image
                  alt="image"
                  src={image || "/images/no-content.png"}
                  fill
                  objectPosition="center"
                />
                <input
                  ref={imageRef}
                  type="file"
                  onChange={(e) => {
                    const file = e?.target?.files?.[0];

                    if (!file) return;

                    const reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onload = (ev) => {
                      setImage(ev?.target?.result as string);
                    };
                  }}
                  className="absolute top-0 left-0 w-0 h-0 opacity-0"
                />
              </div>
              <Button
                onClick={() => imageRef.current?.click()}
                color={ButtonColor.GREY}
              >
                Upload item image
              </Button>
              <div className="rounded-xl bg-primary-50 p-10 relative shadow shadow-primary-50 border border-primary-200">
                <div className="absolute top-2 right-2">
                  <Icon
                    type={IconType.INFO}
                    fill="none"
                    stroke={colors.primary[700]}
                  />
                </div>
                <Text color={colors.primary[700]}>
                  Uploading image is optional but highly recommended.
                </Text>
                <Text color={colors.primary[700]} customClasses="block">
                  It will make your menu more apealing to customers.
                </Text>
              </div>
            </div>
            <div className="flex flex-col space-y-5 w-full py-5 col-span-1">
              <Text variant={TextVariant.HEADING6}>2. Basic information</Text>
              <InputField
                placeholder="Item name"
                fieldName="name"
                control={control}
                autoFocus
              />
              <InputField
                placeholder="Item description (optional)"
                fieldName="description"
                control={control}
              />
              <div className="flex flex-col w-full justify-between space-y-3">
                <Text variant={TextVariant.HEADING6}>3. Alergens</Text>
                <div className="flex items-center flex-wrap gap-3">
                  {sectionItemForm.watch().alergens.map((alergen) => (
                    <Chip
                      key={alergen}
                      text={alergen}
                      onClick={() => onAlergenClick(alergen)}
                      variant={
                        sectionItemForm.watch("alergens").includes(alergen)
                          ? ChipVariant.DARK
                          : ChipVariant.OUTLINED
                      }
                    />
                  ))}
                </div>
              </div>
              <div className="flex flex-col w-full justify-between space-y-3">
                <Text variant={TextVariant.HEADING6}>4. Tags</Text>
                <div className="flex items-center flex-wrap gap-3">
                  {["Vegan", "Vegetarian", "Gluten free", "Lactose free"].map(
                    (tag) => (
                      <Chip
                        onClick={() => onTagClick(tag)}
                        variant={
                          sectionItemForm.watch("tags").includes(tag)
                            ? ChipVariant.DARK
                            : ChipVariant.OUTLINED
                        }
                        key={tag}
                        text={tag}
                      />
                    )
                  )}
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-5 w-full py-5 col-span-1">
              <Text variant={TextVariant.HEADING6}>5. Price</Text>
              {formFields.fields.map((field, index) => (
                <div className="flex items-center space-x-5" key={field.id}>
                  {formFields.fields.length > 1 && (
                    <InputField
                      placeholder="Beer 0.33 l"
                      fieldName={`variants.${index}.name`}
                      control={control}
                    />
                  )}
                  <InputField
                    placeholder="2.00 €"
                    fieldName={`variants.${index}.price`}
                    control={control}
                  />
                  <div className="w-12">
                    {formFields.fields.length > 1 && (
                      <IconButton
                        iconProps={{
                          onClick: () => removeVariant(index),
                          type: IconType.TRASH_FULL,
                          fill: "none",
                          stroke: colors.red[500],
                        }}
                      />
                    )}
                  </div>
                </div>
              ))}
              <div className="self-end pr-16">
                <Button
                  size={ButtonSize.SMALL}
                  color={ButtonColor.OUTLINED}
                  onClick={addVariant}
                >
                  + Add variant
                </Button>
              </div>
            </div>
          </div>
        )}
      </Form>
    </Modal>
  );
};

export default CreateMenuItemFormModal;
