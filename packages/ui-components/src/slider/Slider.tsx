import * as SliderComponent from "@radix-ui/react-slider";
import { FC } from "react";

export type SliderProps = {
  defaultValue?: number[];
  value: number[];
  max?: number;
  step?: number;
  onChange: (value: number[]) => void;
  onBlur?: () => void;
};

const Slider: FC<SliderProps> = ({
  defaultValue,
  max = 100,
  step = 1,
  onChange,
  value,
  ...props
}) => (
  <form>
    <SliderComponent.Root
      className="relative flex items-center select-none touch-none w-full h-5"
      defaultValue={defaultValue}
      max={max}
      step={step}
      onValueChange={onChange}
      value={value}
      {...props}
    >
      <SliderComponent.Track className="bg-white relative grow rounded-full h-5 border">
        <SliderComponent.Range className="absolute bg-primary-400 rounded-full h-full" />
      </SliderComponent.Track>
      <SliderComponent.Thumb className="cursor-grab block w-10 h-10 bg-primary-600 shadow rounded-full hover:bg-primary-300 focus:outline-none" />
    </SliderComponent.Root>
  </form>
);

export default Slider;
