import React, { FC, useState } from "react";

import Button from "../button/Button";
import { ButtonColor, ButtonSize, ButtonType } from "../button/enums";

export type ButtonGroupProps = {
  buttons: {
    text: string;
    onClick: () => void;
  }[];
  defaultTab: string;
};

const ButtonGroup: FC<ButtonGroupProps> = ({
  buttons,
  defaultTab = buttons[0].text,
}) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  return (
    <div className="p-1 bg-gray-200 rounded-full flex items-center">
      {buttons.map((button) => (
        <Button
          fullWidth
          key={button.text}
          size={ButtonSize.SMALL}
          onClick={() => {
            setActiveTab(button.text);
            button.onClick();
          }}
          color={
            activeTab === button.text
              ? ButtonColor.PRIMARY
              : ButtonColor.TRANSPARENT
          }
        >
          {button.text}
        </Button>
      ))}
    </div>
  );
};

export default ButtonGroup;
