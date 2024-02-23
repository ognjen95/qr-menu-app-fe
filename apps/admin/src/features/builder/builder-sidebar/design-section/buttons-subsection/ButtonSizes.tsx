import React, { FC } from "react";
import { TextVariant, Icon, IconType, IconSize, Text } from "ui-components";

import { ButtonTypeprops } from "./types";
import { ButtonSize } from "../../../../../app/context/theme-context/enums";

const ButtonSizes: FC<ButtonTypeprops> = ({
  setButtons,
  theme: buttonTheme,
}) => (
  <div>
    <Text variant={TextVariant.HEADING6}>Button size</Text>
    <div className="flex space-x-2 pt-3">
      <button
        onClick={(e) => {
          e.stopPropagation();
          setButtons({
            buttonSize: ButtonSize.SMALL,
          });
        }}
        type="button"
        className="w-full relative h-10 bg-primary-500 rounded-md flex items-center justify-center text-white"
      >
        Small
        {buttonTheme.buttonSize === ButtonSize.SMALL && (
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
            buttonSize: ButtonSize.MEDIUM,
          });
        }}
        type="button"
        className="w-full relative h-12 bg-primary-500 rounded-md flex items-center justify-center text-white"
      >
        Medium
        {buttonTheme.buttonSize === ButtonSize.MEDIUM && (
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
            buttonSize: ButtonSize.LARGE,
          });
        }}
        type="button"
        className="w-full h-14 relative bg-primary-500 rounded-md flex items-center justify-center text-white"
      >
        Large
        {buttonTheme.buttonSize === ButtonSize.LARGE && (
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
);

export default ButtonSizes;
