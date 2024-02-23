import capitalize from "lodash.capitalize";
import React from "react";
import {
  TextVariant,
  Text,
  Select,
  Paper,
  ButtonGroup,
  PaperColor,
} from "ui-components";
import { Option } from "ui-components/src/select/types";

import { FONT_FAMILY_OPTIONS, FONT_WEIGHT_MAPPER } from "./constants";
import { TypographySize } from "../../../../../app/context/theme-context/enums";
import { useThemeContext } from "../../../../../app/context/theme-context/ThemeContext";

const TypographySubsection = () => {
  const { theme, setTypography } = useThemeContext();
  const { typography } = theme;

  const ref = React.useRef<HTMLDivElement>(null);

  return (
    <div className="flex flex-col space-y-5 overflow-y-auto h-full no-scrollbar pb-16">
      <Paper color={PaperColor.GRAY_LIGHT}>
        <div className="flex flex-col space-y-3">
          <Text variant={TextVariant.HEADING6}>Font size</Text>
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
      </Paper>
      <Paper color={PaperColor.GRAY_LIGHT} ref={ref}>
        <div className="flex flex-col space-y-3">
          <Text variant={TextVariant.HEADING6}>Headers</Text>
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
      </Paper>
      <Paper color={PaperColor.GRAY_LIGHT} ref={ref}>
        <div className="flex flex-col space-y-3">
          <Text variant={TextVariant.HEADING6}>Text</Text>
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
      </Paper>
      <div className="flex flex-col space-y-3">
        <Text variant={TextVariant.HEADING6}>Recomended font combinations</Text>
        <div
          onClick={() => {
            setTypography({
              ...typography,
              headers: {
                ...typography.headers,
                fontFamily: "Rubik",
              },
              text: {
                ...typography.text,
                fontFamily: "Inter",
              },
            });
          }}
          className="p-3 w-full flex flex-col rounded-xl border border-black cursor-pointer hover:bg-primary-400 group"
        >
          <Text variant={TextVariant.HEADING6} color="group-hover:text-white">
            Rubik
          </Text>
          <Text variant={TextVariant.BODY1} color="group-hover:text-white">
            Inter
          </Text>
        </div>
        <div
          onClick={() => {
            setTypography({
              ...typography,
              headers: {
                ...typography.headers,
                fontFamily: "Montserrat",
              },
              text: {
                ...typography.text,
                fontFamily: "Inter",
              },
            });
          }}
          className="p-3 w-full flex flex-col rounded-xl border border-black cursor-pointer hover:bg-primary-400 group"
        >
          <Text variant={TextVariant.HEADING6} color="group-hover:text-white">
            Montserat
          </Text>
          <Text variant={TextVariant.BODY1} color="group-hover:text-white">
            Inter
          </Text>
        </div>
        <div
          onClick={() => {
            setTypography({
              ...typography,
              headers: {
                ...typography.headers,
                fontFamily: "Playfair Display",
              },
              text: {
                ...typography.text,
                fontFamily: "Open Sans",
              },
            });
          }}
          className="p-3 w-full flex flex-col rounded-xl border border-black cursor-pointer hover:bg-primary-400 group"
        >
          <Text variant={TextVariant.HEADING6} color="group-hover:text-white">
            Playfair Display
          </Text>
          <Text variant={TextVariant.BODY1} color="group-hover:text-white">
            Open Sans
          </Text>
        </div>
        <div
          onClick={() => {
            setTypography({
              ...typography,
              headers: {
                ...typography.headers,
                fontFamily: "Merriweather",
              },
              text: {
                ...typography.text,
                fontFamily: "Arial",
              },
            });
          }}
          className="p-3 w-full flex flex-col rounded-xl border border-black cursor-pointer hover:bg-primary-400 group"
        >
          <Text variant={TextVariant.HEADING6} color="group-hover:text-white">
            Merriweather
          </Text>
          <Text variant={TextVariant.BODY1} color="group-hover:text-white">
            Arial
          </Text>
        </div>
      </div>
    </div>
  );
};

export default TypographySubsection;
