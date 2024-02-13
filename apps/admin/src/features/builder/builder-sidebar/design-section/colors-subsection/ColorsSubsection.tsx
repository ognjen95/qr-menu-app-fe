import { clsx } from "clsx";
import React from "react";
import { Text, TextVariant } from "ui-components";

import { RECOMENDED_COLORS } from "./constants";
import { useThemeContext } from "../../../../../app/context/theme-context/ThemeContext";

const ColorsSubsection = () => {
  const { theme, setCollorPallete } = useThemeContext();
  const { colorPallete } = theme;

  return (
    <div>
      <div className="flex flex-col pb-10 gap-2">
        <div className="flex items-center justify-between ">
          <Text color="font-semibold">Primary</Text>
          <div
            className="w-8 h-8 rounded-md"
            style={{ backgroundColor: colorPallete.primary }}
          />
        </div>
        <div className="flex items-center justify-between">
          <Text color="font-semibold">Secondary</Text>
          <div
            className="w-8 h-8 rounded-md bg-green-500"
            style={{ backgroundColor: colorPallete.secondary }}
          />
        </div>
        <div className="flex items-center justify-between">
          <Text color="font-semibold">Tertiary</Text>
          <div
            className="w-8 h-8 rounded-md bg-blue-500"
            style={{ backgroundColor: colorPallete.tertiary }}
          />
        </div>
        <div className="flex items-center justify-between">
          <Text color="font-semibold">Background</Text>
          <div
            className="w-8 h-8 rounded-md bg-white"
            style={{ backgroundColor: colorPallete.background }}
          />
        </div>
        <div className="flex items-center justify-between">
          <Text color="font-semibold">Text</Text>
          <div
            className="w-8 h-8 rounded-md bg-black"
            style={{ backgroundColor: colorPallete.text }}
          />
        </div>
        <div className="flex items-center justify-between">
          <Text color="font-semibold">Headers</Text>
          <div
            className="w-8 h-8 rounded-md bg-yellow-500"
            style={{ backgroundColor: colorPallete.headers }}
          />
        </div>
        <div className="flex items-center justify-between">
          <Text color="font-semibold">Section</Text>
          <div
            className="w-8 h-8 rounded-md bg-pink-500"
            style={{ backgroundColor: colorPallete.surface }}
          />
        </div>
        <div className="flex items-center justify-between">
          <Text color="font-semibold">Cards</Text>
          <div
            className="w-8 h-8 rounded-md bg-indigo-500"
            style={{ backgroundColor: colorPallete.cards }}
          />
        </div>
      </div>
      <Text variant={TextVariant.HEADING6}>Recomended color pallets</Text>
      {RECOMENDED_COLORS.map((item) => (
        <div
          onClick={() => setCollorPallete(item)}
          className={clsx(
            "grid grid-cols-8 mt-3 border p-2 justify-center mx-auto justify-self-center rounded-xl flex hover:bg-gray-200 cursor-pointer transition-all duration-150 ease-in-out",
            {
              // "border-primary-500": item. === selectedColor,
              // "border-transparent": item. !== selectedColor,
            }
          )}
          key={item.id}
        >
          <div
            className="w-8 h-8 rounded-md bg-gray-200"
            style={{
              backgroundColor: item.primary,
            }}
          />
          <div
            className="w-8 h-8 rounded-md bg-gray-200"
            style={{
              backgroundColor: item.secondary,
            }}
          />
          <div
            className="w-8 h-8 rounded-md bg-gray-200"
            style={{
              backgroundColor: item.tertiary,
            }}
          />
          <div
            className="w-8 h-8 rounded-md bg-gray-200"
            style={{
              backgroundColor: item.background,
            }}
          />
          <div
            className="w-8 h-8 rounded-md bg-gray-200"
            style={{
              backgroundColor: item.text,
            }}
          />
          <div
            className="w-8 h-8 rounded-md bg-gray-200"
            style={{
              backgroundColor: item.headers,
            }}
          />
          <div
            className="w-8 h-8 rounded-md bg-gray-200"
            style={{
              backgroundColor: item.surface,
            }}
          />
          <div
            className="w-8 h-8 rounded-md bg-gray-200"
            style={{
              backgroundColor: item.cards,
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default ColorsSubsection;
