import clsx from "clsx";
import React from "react";
import { Text, TextVariant } from "ui-components";

import { NavigationLayout } from "../../../../../app/context/theme-context/enums";
import { useThemeContext } from "../../../../../app/context/theme-context/ThemeContext";

const NavigationSubsection = () => {
  const { theme, setNavigation } = useThemeContext();

  return (
    <div className="flex flex-col space-y-5">
      <Text variant={TextVariant.HEADING6}>Layout</Text>
      <div
        onClick={() => {
          setNavigation({ layout: NavigationLayout.CENTER });
        }}
        className={clsx(
          "border-2 p-2 rounded-xl cursor-pointer hover:bg-gray-200",
          {
            "bg-white border-green-300":
              theme.navigation.layout === NavigationLayout.CENTER,
            "border-transparent":
              theme.navigation.layout !== NavigationLayout.CENTER,
          }
        )}
      >
        <div className="flex items-center justify-between bg-primary-500 p-5 rounded-xl">
          <div className="h-6 w-6 rounded-full bg-white" />
          <div className="flex items-center space-x-1">
            <div className="h-1 w-6 rounded-full bg-white" />
            <div className="h-1 w-6 rounded-full bg-white" />
            <div className="h-1 w-6 rounded-full bg-white" />
            <div className="h-1 w-6 rounded-full bg-white" />
          </div>
          <div className="h-4 w-10 rounded bg-white" />
        </div>
      </div>

      <div
        onClick={() => {
          setNavigation({ layout: NavigationLayout.LEFT });
        }}
        className={clsx(
          "border-2 p-2 rounded-xl cursor-pointer hover:bg-gray-200",
          {
            "bg-white border-green-300":
              theme.navigation.layout === NavigationLayout.LEFT,
            "border-transparent":
              theme.navigation.layout !== NavigationLayout.LEFT,
          }
        )}
      >
        <div className="flex items-center justify-between bg-primary-500 p-5 rounded-xl ">
          <div className="h-6 w-6 rounded-full bg-white" />
          <div className="flex items-center pl-3 flex-grow justify-start space-x-1">
            <div className="h-1 w-6 rounded-full bg-white" />
            <div className="h-1 w-6 rounded-full bg-white" />
            <div className="h-1 w-6 rounded-full bg-white" />
            <div className="h-1 w-6 rounded-full bg-white" />
          </div>
          <div className="h-4 w-10 rounded bg-white" />
        </div>
      </div>

      <div
        onClick={() => {
          setNavigation({ layout: NavigationLayout.RIGHT });
        }}
        className={clsx(
          "border-2 p-2 rounded-xl cursor-pointer hover:bg-gray-200",
          {
            "bg-white border-green-300":
              theme.navigation.layout === NavigationLayout.RIGHT,
            "border-transparent":
              theme.navigation.layout !== NavigationLayout.RIGHT,
          }
        )}
      >
        <div className="flex items-center justify-between bg-primary-500 p-5 rounded-xl">
          <div className="h-6 w-6 rounded-full bg-white" />
          <div className="flex items-center pr-3 flex-grow justify-end space-x-1">
            <div className="h-1 w-6 rounded-full bg-white" />
            <div className="h-1 w-6 rounded-full bg-white" />
            <div className="h-1 w-6 rounded-full bg-white" />
            <div className="h-1 w-6 rounded-full bg-white" />
          </div>
          <div className="h-4 w-10 rounded bg-white" />
        </div>
      </div>
    </div>
  );
};

export default NavigationSubsection;
