import Image from "next/image";
import React, { FC } from "react";
import {
  TextVariant,
  IconButton,
  IconType,
  Text,
  Accordion,
  FileUploadInput,
  TextArea,
  Input,
} from "ui-components";
import { colors } from "ui-components/src/config/tailwind-config";
import { UseModalReturn } from "ui-components/src/modal/useModal";

import EditTypographyComponent from "./edit-typography-component/EditTypographyComponent";
import {
  DefaultThemeType,
  Section,
  SectionComponent,
} from "../../../../app/context/theme-context/types";
import RightDrawer from "../../../../components/drawers/RightDrawer";
import ButtonHover from "../../../builder/builder-sidebar/design-section/buttons-subsection/ButtonHover";
import ButtonShapes from "../../../builder/builder-sidebar/design-section/buttons-subsection/ButtonShapes";
import ButtonSizes from "../../../builder/builder-sidebar/design-section/buttons-subsection/ButtonSizes";
import ButtonTypes from "../../../builder/builder-sidebar/design-section/buttons-subsection/ButtonType";
import TypographySubsection from "../../../builder/builder-sidebar/design-section/typography-subsection/TypographySubsection";
import { ComponentType } from "../../sections/enums";

export type EditComponentDrawerProps = {
  edtSectionModal: UseModalReturn<{
    index: number;
    section: Section;
  }>;
};

const renderContent = (component: SectionComponent) => {
  switch (component.type) {
    case ComponentType.H1:
      return <EditTypographyComponent component={component} />;
    case ComponentType.H2:
      return <EditTypographyComponent component={component} />;
    case ComponentType.H3:
      return <EditTypographyComponent component={component} />;
    case ComponentType.H4:
      return <EditTypographyComponent component={component} />;
    case ComponentType.H5:
      return <EditTypographyComponent component={component} />;
    case ComponentType.H6:
      return <EditTypographyComponent component={component} />;
    case ComponentType.P:
      return <EditTypographyComponent component={component} />;
    case ComponentType.IMAGE:
      return (
        <div className="w-[520px] self-center h-[300px] relative overflow-hidden">
          <div className="absolute z-50 right-5 top-5 bg-white rounded-xl">
            <IconButton
              iconProps={{
                type: IconType.TRASH_FULL,
                stroke: colors.red[500],
              }}
            />
          </div>
          {component.props?.src ? (
            <Image
              src={component.props.src}
              alt="image"
              fill
              objectPosition="center"
              objectFit="cover"
            />
          ) : (
            <FileUploadInput onChange={() => {}} />
          )}
        </div>
      );
    case ComponentType.BUTTON:
      return (
        <div>
          <div className="space-y-3">
            <Input value={component.props?.value} />
            <ButtonSizes
              setButtons={() => {}}
              theme={component.style as DefaultThemeType["buttons"]}
            />
            <ButtonShapes
              setButtons={() => {}}
              theme={component.style as DefaultThemeType["buttons"]}
            />
            <ButtonHover
              setButtons={() => {}}
              theme={component.style as DefaultThemeType["buttons"]}
            />
            <ButtonTypes
              setButtons={() => {}}
              theme={component.style as DefaultThemeType["buttons"]}
            />
          </div>
        </div>
      );
    default:
      return null;
  }
};

const renderTitle = (component: SectionComponent) => {
  switch (component.type) {
    case ComponentType.H1:
      return `${component.title} (Heading text)`;
    case ComponentType.H2:
      return `${component.title} (Heading text)`;
    case ComponentType.H3:
      return `${component.title} (Heading text)`;
    case ComponentType.H4:
      return `${component.title} (Heading text)`;
    case ComponentType.H5:
      return `${component.title} (Heading text)`;
    case ComponentType.H6:
      return `${component.title} (Heading text)`;
    case ComponentType.P:
      return `${component.title} (Paragraph)`;
    case ComponentType.IMAGE:
      return `${component.title} (Image)`;
    case ComponentType.BUTTON:
      return `${component.title} (Button)`;
    default:
      return component.type || component.title || "Component";
  }
};

const EditComponentDrawer: FC<EditComponentDrawerProps> = ({
  edtSectionModal,
}) => {
  const options =
    edtSectionModal.params?.section.components.map((component, index) => ({
      collapsed: true,
      title: `${index + 1}. ${renderTitle(component)}`,
      description: component.props?.value ?? "",
      content: renderContent(component),
    })) ?? [];

  return (
    <RightDrawer isOpen={edtSectionModal.isOpen}>
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
