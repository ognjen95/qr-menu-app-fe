import React, { FC } from "react";
import { Icon, IconSize, TextVariant, Text } from "ui-components";
import { colors } from "ui-components/src/config/tailwind-config";

import { DESING_OPTIONS } from "../constants";
import { SelectedEnumType } from "../types";

export type DesignSectionProps = {
  select: (selected: SelectedEnumType) => void;
};

const DesignSection: FC<DesignSectionProps> = ({ select }) => (
  <div className="py-5 flex flex-col grid grid-cols-2 gap-5">
    {DESING_OPTIONS.map((item) => (
      <div
        onClick={() => select(item.text)}
        key={item.text}
        className="flex w-full h-full flex-col space-y-3 items-center p-5 bg-gray-100 rounded-xl cursor-pointer border border-transparent hover:border hover:border-primary-500"
      >
        <Icon
          type={item.iconType}
          size={IconSize.EXTRA_LARGE}
          fill="white"
          stroke={colors.primary[500]}
        />
        <Text variant={TextVariant.BODY4}>{item.text}</Text>
      </div>
    ))}
  </div>
);

export default DesignSection;
