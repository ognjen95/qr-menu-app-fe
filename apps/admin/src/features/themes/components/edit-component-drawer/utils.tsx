import Image from "next/image";
import { Icon, IconType, IconButton, FileUploadInput } from "ui-components";
import { colors } from "ui-components/src/config/tailwind-config";

import EditButtonComponent from "./edit-button-component/EditButtonComponent";
import EditTypographyComponent from "./edit-typography-component/EditTypographyComponent";
import { SectionComponent } from "../../../../app/context/theme-context/types";
import { ComponentType } from "../../sections/enums";

export const renderIcon = (type: ComponentType) => {
  switch (type) {
    case ComponentType.H1:
      return <Icon stroke="white" type={IconType.TYPOGRAPHY} />;
    case ComponentType.H2:
      return <Icon stroke="white" type={IconType.TYPOGRAPHY} />;
    case ComponentType.H3:
      return <Icon stroke="white" type={IconType.TYPOGRAPHY} />;
    case ComponentType.H4:
      return <Icon stroke="white" type={IconType.TYPOGRAPHY} />;
    case ComponentType.H5:
      return <Icon stroke="white" type={IconType.TYPOGRAPHY} />;
    case ComponentType.H6:
      return <Icon stroke="white" type={IconType.TYPOGRAPHY} />;
    case ComponentType.P:
      return <Icon stroke="white" type={IconType.TYPOGRAPHY} />;
    case ComponentType.IMAGE:
      return <Icon stroke="white" type={IconType.IMAGE_1} />;
    case ComponentType.BUTTON:
      return <Icon stroke="white" type={IconType.DASHBOARD} />;
    default:
      return undefined;
  }
};

export const renderContent = (
  component: SectionComponent,
  sectionIndex: number,
  componentIndex: number
) => {
  switch (component.type) {
    case ComponentType.H1:
      return (
        <EditTypographyComponent
          sectionIndex={sectionIndex}
          defaultComponent={component}
          componentIndex={componentIndex}
        />
      );
    case ComponentType.H2:
      return (
        <EditTypographyComponent
          sectionIndex={sectionIndex}
          defaultComponent={component}
          componentIndex={componentIndex}
        />
      );
    case ComponentType.H3:
      return (
        <EditTypographyComponent
          sectionIndex={sectionIndex}
          defaultComponent={component}
          componentIndex={componentIndex}
        />
      );
    case ComponentType.H4:
      return (
        <EditTypographyComponent
          sectionIndex={sectionIndex}
          defaultComponent={component}
          componentIndex={componentIndex}
        />
      );
    case ComponentType.H5:
      return (
        <EditTypographyComponent
          sectionIndex={sectionIndex}
          defaultComponent={component}
          componentIndex={componentIndex}
        />
      );
    case ComponentType.H6:
      return (
        <EditTypographyComponent
          sectionIndex={sectionIndex}
          defaultComponent={component}
          componentIndex={componentIndex}
        />
      );
    case ComponentType.P:
      return (
        <EditTypographyComponent
          sectionIndex={sectionIndex}
          defaultComponent={component}
          componentIndex={componentIndex}
        />
      );
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
        <EditButtonComponent
          defaultComponent={component}
          sectionIndex={sectionIndex}
          componentIndex={componentIndex}
        />
      );
    default:
      return null;
  }
};

export const renderTitle = (component: SectionComponent) => {
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

export const mappComponentOptionsForEdit = (
  components: SectionComponent[],
  sectionIndex = 0
) =>
  components.map((component, componentIndex) => ({
    id: component.title + component.title + (component.props?.value ?? ""),
    icon: renderIcon(component.type),
    collapsed: true,
    title: renderTitle(component),
    description: component.props?.value ?? "",
    content: renderContent(component, sectionIndex, componentIndex),
  })) ?? [];
