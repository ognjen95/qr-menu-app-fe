import { FC } from "react";
import { TextVariant, Icon, IconType, IconSize, Text } from "ui-components";

import { ButtonTypeprops } from "./types";

const ButtonShapes: FC<ButtonTypeprops> = ({ setButtons, theme }) => (
  <div>
    <Text variant={TextVariant.HEADING6}>Button shape</Text>
    <div className="flex space-x-2 pt-3">
      <button
        type="button"
        className="relative w-full h-10 bg-primary-500 flex items-center justify-center text-white"
        onClick={(e) => {
          e.stopPropagation();
          setButtons({
            borderRadius: "0",
          });
        }}
      >
        Square
        {theme.borderRadius === "0" && (
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
            borderRadius: "50px",
          });
        }}
        type="button"
        className="relative w-full h-10 bg-primary-500 rounded-full flex items-center justify-center text-white"
      >
        Ellipse
        {theme.borderRadius === "50px" && (
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
            borderRadius: "8px",
          });
        }}
        type="button"
        className="relative w-full h-10 bg-primary-500 rounded-lg flex items-center justify-center text-white"
      >
        Rounded
        {theme.borderRadius === "8px" && (
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

export default ButtonShapes;
