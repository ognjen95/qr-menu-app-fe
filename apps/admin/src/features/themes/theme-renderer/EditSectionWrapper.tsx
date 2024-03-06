import { FCWithChildren, Button, IconType, IconButton } from "ui-components";
import { ButtonSize } from "ui-components/src/button/enums";
import { colors } from "ui-components/src/config/tailwind-config";

export type EditSectionWrapperProps = {
  editModal: () => void;
  addUpModal: () => void;
  addDownModal: () => void;
  deleteSectionModal: () => void;
};

const EditSectionWrapper: FCWithChildren<EditSectionWrapperProps> = ({
  children,
  editModal,
  addUpModal,
  addDownModal,
  deleteSectionModal,
}) => (
  <div className="relative group hover:border-y border-dashed box-border hover:border-primary-500">
    <div className="absolute z-50 top-5 right-5 opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-300">
      <div className="space-x-1  rounded-full flex items-center ">
        <Button
          shadow
          onClick={editModal}
          leftIcon={{
            type: IconType.EDIT_PENCIL_1,
            stroke: "white",
          }}
          size={ButtonSize.SMALL}
        >
          Edit Section
        </Button>
        <IconButton
          iconProps={{
            onClick: deleteSectionModal,
            type: IconType.TRASH_FULL,
            stroke: colors.red[500],
          }}
        />
      </div>
    </div>
    <div className="absolute z-50 -top-5 right-0 left-0 flex justify-center items-center  opacity-0 group-hover:opacity-100 transition-all ease-in-out">
      <div className="space-x-1 shadow rounded-full flex items-center ">
        <Button
          shadow
          onClick={addUpModal}
          leftIcon={{
            type: IconType.PLUS,
            stroke: "white",
          }}
          size={ButtonSize.SMALL}
        >
          Add Section
        </Button>
      </div>
    </div>
    <div className="absolute z-50 -bottom-5 right-0 left-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-all ease-in-out">
      <div className="space-x-1 shadow rounded-full flex items-center ">
        <Button
          shadow
          onClick={addDownModal}
          leftIcon={{
            type: IconType.PLUS,
            stroke: "white",
          }}
          size={ButtonSize.SMALL}
        >
          Add Section
        </Button>
      </div>
    </div>
    {children}
  </div>
);

export default EditSectionWrapper;
