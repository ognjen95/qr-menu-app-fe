import capitalize from "lodash.capitalize";
import { FC, useRef, Ref } from "react";
import {
  TextArea,
  TextVariant,
  Text,
  ButtonGroup,
  Select,
} from "ui-components";
import { Option } from "ui-components/src/select/types";

import { TypographySize } from "../../../../../app/context/theme-context/enums";
import { useThemeContext } from "../../../../../app/context/theme-context/ThemeContext";
import { SectionComponent } from "../../../../../app/context/theme-context/types";
import {
  FONT_FAMILY_OPTIONS,
  FONT_WEIGHT_MAPPER,
} from "../../../../builder/builder-sidebar/design-section/typography-subsection/constants";
import { ComponentType } from "../../../sections/enums";

const EditTypographyComponent: FC<{ component: SectionComponent }> = ({
  component,
}) => {
  const { theme, setTypography } = useThemeContext();
  const { typography } = theme;
  const ref = useRef<HTMLDivElement>() as Ref<HTMLDivElement>;
  const isHeading =
    component.type === ComponentType.H1 ||
    component.type === ComponentType.H2 ||
    component.type === ComponentType.H3 ||
    component.type === ComponentType.H4 ||
    component.type === ComponentType.H5 ||
    component.type === ComponentType.H6;

  return (
    <div>
      <TextArea value={component.props?.value} />
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
                  setTypography({
                    ...typography,
                    fontSize: TypographySize.SMALL,
                    headers: {
                      ...typography.headers,
                      fontSize: "32px",
                    },
                    text: {
                      ...typography.text,
                      fontSize: "16px",
                    },
                  });
                },
              },
              {
                text: "Medium",
                onClick: () => {
                  setTypography({
                    ...typography,
                    fontSize: TypographySize.MEDIUM,
                    headers: {
                      ...typography.headers,
                      fontSize: "48px",
                    },
                    text: {
                      ...typography.text,
                      fontSize: "18px",
                    },
                  });
                },
              },
              {
                text: "Large",
                onClick: () => {
                  setTypography({
                    ...typography,
                    fontSize: TypographySize.LARGE,
                    headers: {
                      ...typography.headers,
                      fontSize: "56px",
                    },
                    text: {
                      ...typography.text,
                      fontSize: "20px",
                    },
                  });
                },
              },
            ]}
          />
        </div>
        {isHeading && (
          <div className="flex flex-col space-y-3">
            <Text color="text-primary-500" variant={TextVariant.HEADING6}>
              Font family
            </Text>
            <Select
              ref={ref}
              value={{
                value: typography.headers.fontFamily,
                label: typography.headers.fontFamily,
              }}
              options={FONT_FAMILY_OPTIONS}
              defaultValue={{
                value: typography.headers.fontFamily,
                label: typography.headers.fontFamily,
              }}
              onChange={(font: Option) => {
                setTypography({
                  ...typography,
                  headers: {
                    ...typography.text,
                    fontFamily: font.value as string,
                  },
                });
              }}
              placeholder="Headers font"
            />
            <Text color="text-primary-500" variant={TextVariant.HEADING6}>
              Font weight
            </Text>
            <ButtonGroup
              defaultTab={
                FONT_WEIGHT_MAPPER[
                  typography.headers.weight as "400" | "500" | "600"
                ] || "Bold"
              }
              buttons={[
                {
                  text: "Light",
                  onClick: () => {
                    setTypography({
                      ...typography,
                      headers: {
                        ...typography.headers,
                        weight: "400",
                      },
                    });
                  },
                },
                {
                  text: "Regular",
                  onClick: () => {
                    setTypography({
                      ...typography,
                      headers: {
                        ...typography.headers,
                        weight: "500",
                      },
                    });
                  },
                },
                {
                  text: "Bold",
                  onClick: () => {
                    setTypography({
                      ...typography,
                      headers: {
                        ...typography.headers,
                        weight: "600",
                      },
                    });
                  },
                },
              ]}
            />
          </div>
        )}
        {component.type === ComponentType.P && (
          <div className="flex flex-col space-y-3">
            <Text color="text-primary-500" variant={TextVariant.HEADING6}>
              Font family
            </Text>
            <Select
              ref={ref}
              options={FONT_FAMILY_OPTIONS}
              defaultValue={{
                value: typography.text.fontFamily,
                label: typography.text.fontFamily,
              }}
              value={{
                value: typography.text.fontFamily,
                label: typography.text.fontFamily,
              }}
              onChange={(font: Option) => {
                setTypography({
                  ...typography,
                  text: {
                    ...typography.text,
                    fontFamily: font.value as string,
                  },
                });
              }}
              placeholder="Text font"
            />
            <Text color="text-primary-500" variant={TextVariant.HEADING6}>
              Font weight
            </Text>
            <ButtonGroup
              defaultTab={
                FONT_WEIGHT_MAPPER[
                  typography.text.weight as "400" | "500" | "600"
                ] || "Regular"
              }
              buttons={[
                {
                  text: "Light",
                  onClick: () => {
                    setTypography({
                      ...typography,
                      text: {
                        ...typography.text,
                        weight: "400",
                      },
                    });
                  },
                },
                {
                  text: "Regular",
                  onClick: () => {
                    setTypography({
                      ...typography,
                      text: {
                        ...typography.text,
                        weight: "500",
                      },
                    });
                  },
                },
                {
                  text: "Bold",
                  onClick: () => {
                    setTypography({
                      ...typography,
                      text: {
                        ...typography.text,
                        weight: "600",
                      },
                    });
                  },
                },
              ]}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default EditTypographyComponent;
