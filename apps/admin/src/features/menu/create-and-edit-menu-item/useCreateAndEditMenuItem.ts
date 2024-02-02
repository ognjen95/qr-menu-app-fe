import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import {
  useForm,
  useFieldArray,
  SubmitHandler,
  UseFormReturn,
  UseFieldArrayReturn,
} from "ui-components";
import { UseModalReturn } from "ui-components/src/modal/useModal";

import { DEFAULT_VALUES, VALIDATION_SCHEMA } from "./constants";
import {
  useCreateMenuItemMutation,
  GetMenuDocument,
  useUpdateMenuItemMutation,
} from "../../../graphql-api";
import useUploadFile from "../../../hooks/use-upload-file";
import {
  EditModalModel,
  ItemModalModel,
  MenuSectionItem,
  MenuSectionItemModel,
} from "../menu-overview/types";

export type UseCreateMenuItemReturn = {
  sectionItemForm: UseFormReturn<MenuSectionItemModel>;
  formFields: UseFieldArrayReturn<MenuSectionItemModel, "variants">;
  addVariant: () => void;
  removeVariant: (index: number) => void;
  onSubmit: SubmitHandler<MenuSectionItemModel>;
  loading: boolean;
  image: string | null;
  setImage: React.Dispatch<React.SetStateAction<string | null>>;
  imageRef: React.RefObject<HTMLInputElement>;
  onAlergenClick: (alergen: string) => void;
  onTagClick: (tag: string) => void;
};

export const useCreateMenuItem = (
  menuId: string,
  modal: UseModalReturn<ItemModalModel>,
  editModal?: UseModalReturn<EditModalModel>
): UseCreateMenuItemReturn => {
  const isEditMode = !!editModal?.isOpen;

  const [craete, { loading }] = useCreateMenuItemMutation();
  const [update, { loading: updateLoading }] = useUpdateMenuItemMutation();
  const { upload, loading: imageUploadLoading } = useUploadFile();

  const [image, setImage] = useState<string | null>(null);

  const imageRef = useRef<HTMLInputElement>(null);

  const sectionItemForm = useForm<MenuSectionItemModel>({
    defaultValues: DEFAULT_VALUES,
    validationSchema: VALIDATION_SCHEMA,
  });

  const formFields = useFieldArray({
    control: sectionItemForm.control,
    name: "variants",
  });

  useEffect(() => {
    if (isEditMode && editModal.params) {
      const item = editModal.params!;

      sectionItemForm.reset({
        name: item.name,
        description: item.description,
        alergens: item.alergens ?? [],
        tags: item.tags ?? [],
        variants:
          item.variants?.map((variant) => ({
            name: variant.name,
            price: variant.price,
          })) ?? [],
      });

      setImage(item.image ?? "");
    }
  }, [editModal?.params, isEditMode, sectionItemForm]);

  const addVariant = () => {
    formFields.append({ name: "", price: "" });
  };

  const removeVariant = (index: number) => {
    formFields.remove(index);
  };

  const onSubmit: SubmitHandler<MenuSectionItemModel> = async (data) => {
    let imageId =
      image?.replace(process.env.NEXT_PUBLIC_IMG_URL ?? "", "") ?? "";

    if (imageRef.current?.files?.length) {
      imageId = await upload(imageRef.current.files[0]);
    }

    const commonArgs = {
      name: data.name,
      description: data.description,
      menuId,
      image: imageId,
      alergens: data.alergens,
      tags: data.tags,
      menuSectionId:
        (editModal?.params?.sectionId || modal.params?.sectionId) ?? "",
      variants: data.variants.map((variant) => ({
        name: variant.name ?? "",
        price: Number(variant.price),
      })),
    };

    if (isEditMode && editModal.params) {
      console.log("UPDATE");
      update({
        refetchQueries: [GetMenuDocument],
        onCompleted: () => {
          toast.success("Item updated");
        },
        variables: {
          args: {
            ...commonArgs,
            id: editModal.params.id,
            menuItemsIds: editModal.params?.menuSectionsIds ?? [],
          },
        },
      });
    } else {
      craete({
        refetchQueries: [GetMenuDocument],
        onCompleted: () => {
          sectionItemForm.reset(DEFAULT_VALUES);
          setImage(null);
          toast.success("Item created");
          modal.close();
        },
        variables: {
          args: {
            ...commonArgs,
            menuItemsIds: modal.params?.menuSectionsIds ?? [],
          },
        },
      });
    }
  };

  const onAlergenClick = (alergen: string) => {
    const find = sectionItemForm
      .getValues("alergens")
      .find((item) => item === alergen);

    if (find) {
      sectionItemForm.setValue(
        "alergens",
        sectionItemForm.getValues("alergens").filter((item) => item !== alergen)
      );
    } else {
      sectionItemForm.setValue(
        "alergens",
        sectionItemForm.getValues("alergens").concat(alergen)
      );
    }
  };

  const onTagClick = (tag: string) => {
    const find = sectionItemForm
      .getValues("tags")
      .find((item) => item.toLowerCase().trim() === tag.toLowerCase().trim());

    if (find) {
      sectionItemForm.setValue(
        "tags",
        sectionItemForm.getValues("tags").filter((item) => item !== tag)
      );
    } else {
      sectionItemForm.setValue(
        "tags",
        sectionItemForm.getValues("tags").concat(tag)
      );
    }
  };

  return {
    sectionItemForm,
    formFields,
    addVariant,
    removeVariant,
    onSubmit,
    loading: imageUploadLoading || loading || updateLoading,
    image,
    setImage,
    imageRef,
    onAlergenClick,
    onTagClick,
  };
};
