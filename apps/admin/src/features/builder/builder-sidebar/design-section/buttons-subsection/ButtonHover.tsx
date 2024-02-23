import React, { FC } from "react";
import { TextVariant, Text, Icon, IconSize, IconType } from "ui-components";

import { ButtonTypeprops } from "./types";

const ButtonHover: FC<ButtonTypeprops> = ({ theme, setButtons }) => (
  <div>
    <Text variant={TextVariant.HEADING6}>Button hover</Text>
    <div className="flex space-x-2 pt-3">
      <button
        onClick={() => {
          setButtons({
            buttonHover: false,
          });
        }}
        type="button"
        className="w-full relative h-10 bg-primary-500 rounded-lg flex items-center justify-center text-white"
      >
        No hover
        {theme.buttonHover === false && (
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
            buttonHover: true,
          });
        }}
        type="button"
        className="w-full relative h-10 bg-primary-500 rounded-lg flex items-center justify-center text-white hover:brightness-95"
      >
        With hover
        {theme.buttonHover === true && (
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

export default ButtonHover;
