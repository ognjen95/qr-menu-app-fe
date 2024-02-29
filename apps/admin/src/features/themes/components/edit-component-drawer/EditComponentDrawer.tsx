import { FC, useMemo } from "react";
import {
  TextVariant,
  IconButton,
  IconType,
  Text,
  Accordion,
} from "ui-components";
import { UseModalReturn } from "ui-components/src/modal/useModal";

import { mappComponentOptionsForEdit } from "./utils";
import { Section } from "../../../../app/context/theme-context/types";
import RightDrawer from "../../../../components/drawers/RightDrawer";

export type EditComponentDrawerProps = {
  edtSectionModal: UseModalReturn<{
    index: number;
    section: Section;
  }>;
};

const EditComponentDrawer: FC<EditComponentDrawerProps> = ({
  edtSectionModal,
}) => {
  const options = useMemo(
    () =>
      mappComponentOptionsForEdit(
        edtSectionModal.params?.section.components ?? [],
        edtSectionModal.params?.index
      ),
    [edtSectionModal.params]
  );

  return (
    <RightDrawer
      isOpen={edtSectionModal.isOpen}
      onClose={edtSectionModal.close}
    >
      <div className="flex flex-col flex-1 overflow-y-auto no-scrollbar">
        <div className="px-5 py-3 w-full md:w-[600px]">
          <div className="flex items-center justify-between">
            <Text color="text-primary-500" variant={TextVariant.HEADING5}>
              Edit Section
            </Text>
            <IconButton
              iconProps={{
                onClick: edtSectionModal.close,
                type: IconType.CLOSE,
              }}
            />
          </div>
          <div className="py-5 flex flex-col space-y-3">
            <Text variant={TextVariant.HEADING6}>Components</Text>
            <Accordion options={options} />
          </div>
        </div>
      </div>
    </RightDrawer>
  );
};

export default EditComponentDrawer;
