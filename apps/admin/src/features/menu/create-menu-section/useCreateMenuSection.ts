import { toast } from "react-toastify";
import { useForm, SubmitHandler } from "ui-components";
import { UseModalReturn } from "ui-components/src/modal/useModal";

import {
  useCreateMenuSectionMutation,
  GetMenuDocument,
} from "../../../graphql-api";
import { MenuSection, MenuSectionModel } from "../menu-overview/types";

const useCreateMenuSection = (
  menuId: string,
  modal: UseModalReturn<Partial<MenuSection>>
) => {
  const sectionForm = useForm<MenuSectionModel>({
    defaultValues: {
      name: "",
      description: "",
    },
  });

  const [createSection, { loading: createSectionLoading }] =
    useCreateMenuSectionMutation();

  const createMenuSection: SubmitHandler<MenuSectionModel> = (data) => {
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
        },
      },
    });
  };

  return {
    sectionForm,
    createMenuSection,
    createSectionLoading,
  };
};

export default useCreateMenuSection;
