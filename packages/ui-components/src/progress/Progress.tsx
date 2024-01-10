import clsx from "clsx";
import { FC } from "react";

export type ProgressProps = {
  completed?: number;
};

const Progress: FC<ProgressProps> = ({ completed = 20 }) => {
  const completedPercentage = `${completed}%`;

  return (
    <div className="h-5 w-full bg-[#9795DE] rounded-xl">
      <div
        style={{ width: completedPercentage }}
        className={clsx(
          "h-full",
          "bg-[#6962D6]",
          "transition",
          "ease-in-out",
          "duration-200",
          "rounded-xl"
        )}
      />
    </div>
  );
};

export default Progress;
