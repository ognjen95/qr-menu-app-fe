import React, { FC } from "react";
import { HexColorPicker } from "react-colorful";
import { Input, InputSize } from "ui-components";

export type ColorPickerProps = {
  color: string;
  onChange: (color: string) => void;
};

const ColorPicker: FC<ColorPickerProps> = ({ onChange, color }) => (
  <div>
    <HexColorPicker
      style={{
        width: "100%",
      }}
      color={color}
      onChange={(clr) => {
        onChange(clr);
      }}
    />
    <div className="pt-3">
      <Input
        size={InputSize.SMALL}
        value={color}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
    </div>
  </div>
);

export default ColorPicker;
