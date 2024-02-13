import React from "react";
import { TextVariant, Icon, IconType, IconSize, Text } from "ui-components";

import { useThemeContext } from "../../../../../app/context/theme-context/ThemeContext";

const ButtonsSubsection = () => {
  const { theme, setButtons } = useThemeContext();

  return (
    <div className="flex flex-col space-y-5">
      <div>
        <Text variant={TextVariant.HEADING6}>Button size</Text>
        <div className="flex space-x-2 pt-3">
          <button
            type="button"
            className="w-full h-10 bg-primary-500 rounded-md flex items-center justify-center text-white"
          >
            Small
          </button>
          <button
            type="button"
            className="w-full h-12 bg-primary-500 rounded-md flex items-center justify-center text-white"
          >
            Medium
          </button>
          <button
            type="button"
            className="w-full h-14 bg-primary-500 rounded-md flex items-center justify-center text-white"
          >
            Large
          </button>
        </div>
      </div>

      <div>
        <Text variant={TextVariant.HEADING6}>Button shape</Text>
        <div className="flex space-x-2 pt-3">
          <button
            type="button"
            className="relative w-full h-10 bg-primary-500 flex items-center justify-center text-white"
            onClick={(e) => {
              e.stopPropagation();
              setButtons({
                ...theme.buttons,
                borderRadius: "0",
              });
            }}
          >
            Square
            {theme.buttons.borderRadius === "0" && (
              <div className="absolute -top-3 -right-1 rounded-full bg-green-500 p-1">
                <Icon
                  type={IconType.CHECK}
                  size={IconSize.LARGE}
                  fill="none"
                  stroke="white"
                />
              </div>
            )}
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setButtons({
                ...theme.buttons,
                borderRadius: "25px",
              });
            }}
            type="button"
            className="relative w-full h-10 bg-primary-500 rounded-full flex items-center justify-center text-white"
          >
            Ellipse
            {theme.buttons.borderRadius === "25px" && (
              <div className="absolute -top-3 -right-1 rounded-full bg-green-500 p-1">
                <Icon
                  type={IconType.CHECK}
                  size={IconSize.LARGE}
                  fill="none"
                  stroke="white"
                />
              </div>
            )}
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setButtons({
                ...theme.buttons,
                borderRadius: "8px",
              });
            }}
            type="button"
            className="relative w-full h-10 bg-primary-500 rounded-lg flex items-center justify-center text-white"
          >
            Rounded
            {theme.buttons.borderRadius === "8px" && (
              <div className="absolute -top-3 -right-1 rounded-full bg-green-500 p-1">
                <Icon
                  type={IconType.CHECK}
                  size={IconSize.LARGE}
                  fill="none"
                  stroke="white"
                />
              </div>
            )}
          </button>
        </div>
      </div>

      <div>
        <Text variant={TextVariant.HEADING6}>Button hover</Text>
        <div className="flex space-x-2 pt-3">
          <button
            type="button"
            className="w-full h-10 bg-primary-500 rounded-lg flex items-center justify-center text-white"
          >
            No hover
          </button>
          <button
            type="button"
            className="w-full h-10 bg-primary-500 rounded-lg flex items-center justify-center text-white hover:brightness-95"
          >
            With hover
          </button>
        </div>
      </div>

      <div>
        <Text variant={TextVariant.HEADING6}>Button click animation</Text>
        <div className="flex space-x-2 pt-3">
          <button
            type="button"
            className="w-full h-10 bg-primary-500 rounded-lg flex items-center justify-center text-white"
          >
            No animation
          </button>
          <button
            type="button"
            className="w-full relative h-10 bg-primary-500 rounded-lg flex items-center justify-center text-white active:scale-90 transition-transform duration-150 ease-in-out"
          >
            With animation
            <div className="absolute -top-3 -right-1 rounded-full bg-green-500 p-1">
              <Icon
                type={IconType.CHECK}
                size={IconSize.LARGE}
                fill="none"
                stroke="white"
              />
            </div>
          </button>
        </div>
      </div>

      <div>
        <Text variant={TextVariant.HEADING6}>Button fill</Text>
        <div className="flex space-x-2 pt-3">
          <button
            type="button"
            className="relative w-full h-10 bg-primary-500 rounded-lg flex items-center justify-center text-white"
          >
            Filled
            <div className="absolute -top-3 -right-1 rounded-full bg-green-500 p-1">
              <Icon
                type={IconType.CHECK}
                size={IconSize.LARGE}
                fill="none"
                stroke="white"
              />
            </div>
          </button>
          <button
            type="button"
            className="w-full h-10 bg-transparent border border-primary-500 rounded-lg flex items-center justify-center text-primary-600 active:scale-90 transition-transform duration-150 ease-in-out"
          >
            Outlined
          </button>
        </div>
      </div>
    </div>
  );
};

export default ButtonsSubsection;
