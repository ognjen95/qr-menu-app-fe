import React from "react";
import { TextVariant, Text, Icon, IconType, IconSize } from "ui-components";

const ButoonAnimation = () => (
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
);

export default ButoonAnimation;
