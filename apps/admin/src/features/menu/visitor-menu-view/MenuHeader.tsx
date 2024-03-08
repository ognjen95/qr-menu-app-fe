import clsx from "clsx";
import React, { FC } from "react";
import { IconButton, IconType } from "ui-components";

import { ComponentType } from "../../../app/context/theme-context/enums";
import { DefaultThemeType } from "../../../app/context/theme-context/types";
import useIntersectionObserver from "../../../hooks/use-intersection-observer";
import ThemeButton from "../../themes/components/buttons/ThemeButton";
import ThemeTypography from "../../themes/components/typography/ThemeTypography";

export type MenuHeaderProps = {
  chips: string[];
  selectedChip: string;
  isTopOfPage: boolean;
  onChipClick: (chip: string) => void;
  colorPallete: DefaultThemeType["colorPallete"];
  isBuilder?: boolean;
};

const MenuHeader: FC<MenuHeaderProps> = ({
  chips,
  selectedChip,
  isTopOfPage,
  onChipClick,
  colorPallete,
  isBuilder,
}) => {
  const [headerRef, isHeaderVisible] = useIntersectionObserver();

  return (
    <div
      style={{
        backgroundColor: colorPallete?.surface,
      }}
    >
      {!isBuilder && (
        <div
          className={clsx(
            "fixed top-0 left-0 right-0 !z-[999999999999] transition-all ease-in-out duration-200 shadow",
            {
              "translate-y-0": !isHeaderVisible,
              "-translate-y-64": isHeaderVisible || !isTopOfPage,
            }
          )}
        >
          <div
            className="py-5 [&>*:first-child]:ml-5 [&>*:last-child]:mr-5 flex items-center space-x-2 overflow-x-auto bg-white/60 backdrop-blur"
            style={{
              backgroundColor: colorPallete?.surface,
            }}
          >
            {chips.map((chip) => (
              <ThemeButton
                onClick={() => onChipClick(chip)}
                key={chip}
                props={{ value: chip }}
                style={{
                  backgroundColor:
                    selectedChip.split("#SCROLLED_TO")[0] === chip
                      ? colorPallete.primary
                      : "transparent",
                  color:
                    selectedChip.split("#SCROLLED_TO")[0] === chip
                      ? colorPallete.text
                      : colorPallete.primary,
                  border: `${colorPallete.primary} solid 1px`,
                }}
              />
            ))}
          </div>
        </div>
      )}
      <div ref={headerRef}>
        <div
          style={{
            backgroundColor: colorPallete?.surface,
          }}
        >
          <div className="flex items-center space-x-5 p-5">
            <IconButton
              iconProps={{
                type: IconType.ARROW_LEFT_LG,
                stroke: colorPallete?.primary,
              }}
            />
            <ThemeTypography
              type={ComponentType.H4}
              style={{ color: colorPallete.text }}
              props={{ value: "Moj restoran" }}
            />
          </div>
          <div className="pb-5 [&>*:first-child]:ml-5 [&>*:last-child]:mr-5 flex items-center space-x-2 overflow-x-auto">
            {chips.map((chip) => (
              <ThemeButton
                onClick={() => onChipClick(chip)}
                key={chip}
                props={{ value: chip }}
                style={{
                  backgroundColor:
                    selectedChip.split("#SCROLLED_TO")[0] === chip
                      ? colorPallete.primary
                      : "transparent",
                  color:
                    selectedChip.split("#SCROLLED_TO")[0] === chip
                      ? colorPallete.text
                      : colorPallete.primary,
                  border: `${colorPallete.primary} solid 1px`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuHeader;
