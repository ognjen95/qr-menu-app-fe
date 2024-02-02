import { useEffect } from "react";
import { toast } from "react-toastify";
import { useForm, SubmitHandler } from "ui-components";
import { UseModalReturn } from "ui-components/src/modal/useModal";

import {
  useCreateMenuSectionMutation,
  GetMenuDocument,
  useUpdateMenuSectionMutation,
} from "../../../graphql-api";
import { MenuSectionModel, SectionModalModel } from "../menu-overview/types";

const useCreateMenuSection = (
  menuId: string,
  modal: UseModalReturn<SectionModalModel>,
  editSectionModal?: UseModalReturn<SectionModalModel>
) => {
  const sectionForm = useForm<MenuSectionModel>({
    defaultValues: {
      name: "",
      description: "",
    },
  });

  const [createSection, { loading: createSectionLoading }] =
    useCreateMenuSectionMutation();

  const [update, { loading: updateLoading }] = useUpdateMenuSectionMutation();

  useEffect(() => {
    if (editSectionModal?.isOpen) {
      sectionForm.reset({
        name: editSectionModal.params?.name ?? "",
        description: editSectionModal.params?.description ?? "",
      });
    }
  }, [
    editSectionModal?.isOpen,
    editSectionModal?.params?.description,
    editSectionModal?.params?.name,
    sectionForm,
  ]);

  const createMenuSection: SubmitHandler<MenuSectionModel> = (data) => {
    if (editSectionModal?.isOpen) {
      update({
        refetchQueries: [GetMenuDocument],
        onCompleted: () => {
          toast.success("Section updated");
        },
        variables: {
          args: {
            id: editSectionModal.params?.id as string,
            menuId: menuId as string,
            name: data.name,
            description: data.description,
            menuSectionsIds: editSectionModal.params?.menuSectionsIds ?? [],
          },
        },
      });
    }

    if (modal.isOpen) {
      createSection({
        refetchQueries: [GetMenuDocument],
        onCompleted: () => {
          modal.close();
          sectionForm.reset();
          toast.success("Section created");
        },
        variables: {
          args: {
            menuId: menuId as string,
            name: data.name,
            description: data.description,
            positionIndex: modal.params?.positionIndex ?? 0,
            menuSectionsIds: modal.params?.menuSectionsIds ?? [],
          },
        },
      });
    }
  };

  return {
    sectionForm,
    createMenuSection,
    createSectionLoading,
    updateLoading,
  };
};

export default useCreateMenuSection;
