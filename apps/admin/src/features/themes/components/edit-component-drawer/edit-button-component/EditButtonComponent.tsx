import React, { FC } from "react";
import {
  ButtonTabs,
  Input,
  Slider,
  Switch,
  Text,
  TextVariant,
} from "ui-components";

import useEditButtonRadius from "./useEditButtonRadius";
import useEditButtonSize from "./useEditButtonSize";
import useEditButtonText from "./useEditButtonText";
import useEditButtonColors from "./useEditColors";
import { useThemeContext } from "../../../../../app/context/theme-context/ThemeContext";
import { SectionComponent } from "../../../../../app/context/theme-context/types";
import ColorPicker from "../../../../../components/color-picker/ColorPicker";
import ButtonSizes from "../../../../builder/builder-sidebar/design-section/buttons-subsection/ButtonSizes";

export type EditButtonComponentProps = {
  defaultComponent: SectionComponent;
  sectionIndex: number;
  componentIndex: number;
};

const EditButtonComponent: FC<EditButtonComponentProps> = ({
  defaultComponent,
  sectionIndex,
  componentIndex,
}) => {
  const { theme, editSection } = useThemeContext();
  const section = theme.sections[sectionIndex];
  const component = section.components[componentIndex];

  const { buttonText, setButtonText, handleEditTextValue } = useEditButtonText(
    component,
    editSection,
    section,
    componentIndex,
    sectionIndex
  );

  const { radius, setRadius, handleEditButtonRadius } = useEditButtonRadius(
    editSection,
    section,
    componentIndex,
    sectionIndex
  );

  const { handleEditButtonSize, currentButtonSize } = useEditButtonSize(
    editSection,
    section,
    componentIndex,
    sectionIndex
  );

  const {
    backgroundColor,
    color,
    borderColor,
    handleEditBackgroundColor,
    handleEditColor,
    handleEditBorderColor,
    isTransparentBorder,
    handleHideBorderChange,
    isTransparentBackground,
    handleBackgroundChange,
  } = useEditButtonColors(
    editSection,
    section,
    componentIndex,
    sectionIndex,
    theme.colorPallete
  );

  return (
    <div className="space-y-3">
      <Text variant={TextVariant.HEADING6}>Button text</Text>
      <Input
        value={buttonText}
        onChange={(e) => setButtonText(e.target.value)}
        onBlur={handleEditTextValue}
      />
      <ButtonSizes
        currentButtonSize={currentButtonSize}
        setButtons={(buttonProps) =>
          handleEditButtonSize(buttonProps.buttonSize!)
        }
        theme={theme.buttons}
      />
      <Text variant={TextVariant.HEADING6}>
        Button radius {radius?.[0] ?? 0}px
      </Text>
      <Slider
        max={25}
        value={radius}
        onChange={(value) => setRadius(value)}
        onBlur={() => handleEditButtonRadius(radius[0])}
      />
      <div className="space-y-3">
        <Text variant={TextVariant.HEADING6}>Button Colors</Text>
        <ButtonTabs
          defaultTab="Background"
          tabs={[
            {
              id: "Background",
              text: "Background",
              feature: (
                <div className="p-5 pt-2">
                  <div className="flex items-center space-x-2 pb-2">
                    <Text>Transparent Background</Text>
                    <Switch
                      checked={isTransparentBackground}
                      onCheckedChange={handleBackgroundChange}
                    />
                  </div>
                  <ColorPicker
                    color={backgroundColor}
                    onChange={handleEditBackgroundColor}
                  />
                </div>
              ),
            },
            {
              id: "Text color",
              text: "Text color",
              feature: (
                <div className="p-5">
                  <ColorPicker color={color} onChange={handleEditColor} />
                </div>
              ),
            },
            {
              id: "Border color",
              text: "Border color",
              feature: (
                <div className="p-5 pt-2">
                  <div className="flex items-center space-x-2 pb-2">
                    <Text>Hide border</Text>
                    <Switch
                      checked={isTransparentBorder}
                      onCheckedChange={handleHideBorderChange}
                    />
                  </div>
                  <ColorPicker
                    color={borderColor}
                    onChange={handleEditBorderColor}
                  />
                </div>
              ),
            },
          ]}
        />
      </div>
    </div>
  );
};

export default EditButtonComponent;
