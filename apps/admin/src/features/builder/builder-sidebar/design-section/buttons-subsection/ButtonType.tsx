import React, { FC } from "react";
import { TextVariant, Text, Icon, IconType, IconSize } from "ui-components";

import { ButtonTypeprops } from "./types";
import { ButtonType } from "../../../../../app/context/theme-context/enums";

const ButtonTypes: FC<ButtonTypeprops> = ({ theme, setButtons }) => (
  <div>
    <Text variant={TextVariant.HEADING6}>Button fill</Text>
    <div className="flex space-x-2 pt-3">
      <button
        onClick={() => {
          setButtons({
            buttonType: ButtonType.FILLED,
          });
        }}
        type="button"
        className="relative w-full h-10 bg-primary-500 rounded-lg flex items-center justify-center text-white"
      >
        Filled
        {theme.buttonType === ButtonType.FILLED && (
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
        onClick={() => {
          setButtons({
            buttonType: ButtonType.OUTLINED,
          });
        }}
        type="button"
        className="w-full h-10 relative bg-transparent border border-primary-500 rounded-lg flex items-center justify-center text-primary-600 active:scale-90 transition-transform duration-150 ease-in-out"
      >
        Outlined
        {theme.buttonType === ButtonType.OUTLINED && (
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

export default ButtonTypes;
