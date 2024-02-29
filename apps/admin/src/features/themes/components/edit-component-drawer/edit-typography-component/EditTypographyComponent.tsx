import capitalize from "lodash.capitalize";
import { FC } from "react";
import {
  TextArea,
  TextVariant,
  Text,
  ButtonGroup,
  Select,
} from "ui-components";
import { Option } from "ui-components/src/select/types";

import useEditTypography from "./useEditTypography";
import { TypographySize } from "../../../../../app/context/theme-context/enums";
import { SectionComponent } from "../../../../../app/context/theme-context/types";
import ColorPicker from "../../../../../components/color-picker/ColorPicker";
import {
  FONT_FAMILY_OPTIONS,
  FONT_WEIGHT_MAPPER,
} from "../../../../builder/builder-sidebar/design-section/typography-subsection/constants";

const EditTypographyComponent: FC<{
  defaultComponent: SectionComponent;
  sectionIndex: number;
  componentIndex: number;
}> = ({ sectionIndex, defaultComponent, componentIndex }) => {
  const {
    textValue,
    setTextValue,
    color,
    ref,
    handleEditTextValue,
    handleEditFontFamily,
    handleEditFontWeight,
    handleFontSizeChange,
    handleColorChange,
    typography,
    component,
  } = useEditTypography(defaultComponent, sectionIndex, componentIndex);

  return (
    <div>
      <TextArea
        value={textValue}
        onChange={(e) => setTextValue(e.target.value)}
        onBlur={handleEditTextValue}
      />
      <div className="flex flex-col space-y-5 overflow-y-auto h-full no-scrollbar">
        <div className="flex flex-col space-y-3 mt-3">
          <Text color="text-primary-500" variant={TextVariant.HEADING6}>
            Font size
          </Text>
          <ButtonGroup
            defaultTab={capitalize(typography.fontSize)}
            buttons={[
              {
                text: "Small",
                onClick: () => {
                  handleFontSizeChange(TypographySize.SMALL);
                },
              },
              {
                text: "Medium",
                onClick: () => {
                  handleFontSizeChange(TypographySize.MEDIUM);
                },
              },
              {
                text: "Large",
                onClick: () => {
                  handleFontSizeChange(TypographySize.LARGE);
                },
              },
            ]}
          />
        </div>
        <div className="flex flex-col space-y-3">
          <Text color="text-primary-500" variant={TextVariant.HEADING6}>
            Font family
          </Text>
          <Select
            ref={ref}
            value={{
              value:
                component?.style?.fontFamily || typography.headers.fontFamily,
              label:
                component?.style?.fontFamily || typography.headers.fontFamily,
            }}
            options={FONT_FAMILY_OPTIONS}
            defaultValue={{
              value:
                component?.style?.fontFamily || typography.headers.fontFamily,
              label:
                component?.style?.fontFamily || typography.headers.fontFamily,
            }}
            onChange={(font: Option) => {
              handleEditFontFamily(font.value as string);
            }}
            placeholder="Headers font"
          />
          <Text color="text-primary-500" variant={TextVariant.HEADING6}>
            Font weight
          </Text>
          <ButtonGroup
            defaultTab={
              FONT_WEIGHT_MAPPER[
                component.style?.fontWeight?.toString() as "400" | "500" | "600"
              ] ||
              FONT_WEIGHT_MAPPER[
                typography.headers.weight as "400" | "500" | "600"
              ] ||
              "Bold"
            }
            buttons={[
              {
                text: "Light",
                onClick: () => {
                  handleEditFontWeight("400");
                },
              },
              {
                text: "Regular",
                onClick: () => {
                  handleEditFontWeight("500");
                },
              },
              {
                text: "Bold",
                onClick: () => {
                  handleEditFontWeight("600");
                },
              },
            ]}
          />
        </div>
        <div className="relative">
          <Text color="text-primary-500" variant={TextVariant.HEADING6}>
            Color
          </Text>
          <ColorPicker
            color={color}
            onChange={(selectedColor) => {
              handleColorChange(selectedColor);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default EditTypographyComponent;
