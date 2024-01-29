import React from "react";
import { toast } from "react-toastify";
import {
  useForm,
  useFieldArray,
  SubmitHandler,
  UseFormReturn,
  UseFieldArrayReturn,
} from "ui-components";
import { UseModalReturn } from "ui-components/src/modal/useModal";

import {
  useCreateMenuItemMutation,
  GetMenuDocument,
} from "../../../graphql-api";
import useUploadFile from "../../../hooks/use-upload-file";
import { ItemModalModel, MenuSectionItem } from "../menu-overview/types";

export type UseCreateMenuItemReturn = {
  sectionItemForm: UseFormReturn<MenuSectionItem>;
  formFields: UseFieldArrayReturn<MenuSectionItem, "variants">;
  addVariant: () => void;
  removeVariant: (index: number) => void;
  createMenuSectionItem: SubmitHandler<MenuSectionItem>;
  loading: boolean;
  image: string | null;
  setImage: React.Dispatch<React.SetStateAction<string | null>>;
  imageRef: React.RefObject<HTMLInputElement>;
  upload: ReturnType<typeof useUploadFile>;
  onAlergenClick: (alergen: string) => void;
  onTagClick: (tag: string) => void;
};

export const useCreateMenuItem = (
  menuId: string,
  modal: UseModalReturn<ItemModalModel>
): UseCreateMenuItemReturn => {
  const DEFAULT_VALUES: MenuSectionItem = {
    sectionId: "",
    id: "",
    name: "",
    description: "",
    variants: [{ name: "", price: "" }],
    tags: [],
    alergens: [],
  };

  const sectionItemForm = useForm<MenuSectionItem>({
    defaultValues: DEFAULT_VALUES,
  });

  const formFields = useFieldArray({
    control: sectionItemForm.control,
    name: "variants",
  });

  const addVariant = () => {
    formFields.append({ name: "", price: "" });
  };

  const removeVariant = (index: number) => {
    formFields.remove(index);
  };

  const [craete, { loading }] = useCreateMenuItemMutation();

  const createMenuSectionItem: SubmitHandler<MenuSectionItem> = (data) => {
    craete({
      refetchQueries: [GetMenuDocument],
      onCompleted: () => {
        sectionItemForm.reset(DEFAULT_VALUES);
        toast.success("Item created");
      },
      variables: {
        args: {
          name: data.name,
          description: data.description,
          menuId,
          image: data.image,
          menuSectionId: modal.params?.sectionId ?? "",
          variants: data.variants.map((variant) => ({
            ...variant,
            price: Number(variant.price),
          })),
        },
      },
    });
  };

  const upload = useUploadFile();

  const [image, setImage] = React.useState<string | null>(null);

  const imageRef = React.useRef<HTMLInputElement>(null);

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
    createMenuSectionItem,
    loading,
    image,
    setImage,
    imageRef,
    upload,
    onAlergenClick,
    onTagClick,
  };
};
