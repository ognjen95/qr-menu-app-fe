import * as TabsRadix from "@radix-ui/react-tabs";
import clsx from "clsx";
import { FC, memo, useMemo, useState, useCallback } from "react";

import { ButtonTab, ButtonTabsAndFeatures } from "./types";
import { COLOR_CLASS_MAPPER } from "../button/constants";
import { ButtonColor, ButtonType } from "../button/enums";
import { colors } from "../config/tailwind-config";
import Icon from "../icon/Icon";
import Text from "../text/Text";

export type ButtonTabsProps = {
  tabs: ButtonTab[];
  defaultTab: string;
  onTabChange?: (tab: string) => void;
  customClasses?: string;
  activeTabTextClass?: string;
  regularTabTextClass?: string;
  activeTabIconClass?: string;
  regularTabIconClass?: string;
};

const ButtonTabs: FC<ButtonTabsProps> = ({
  tabs,
  defaultTab,
  onTabChange,
  customClasses,
  activeTabTextClass = "text-primary-700",
  regularTabTextClass = "text-grey-600",
  activeTabIconClass = colors.primary[700],
  regularTabIconClass = colors.grey[500],
}) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  const handleTabClick = useCallback(
    (tab: string) => {
      setActiveTab(tab);
      if (onTabChange) {
        onTabChange(tab);
      }
    },
    [onTabChange]
  );

  const tabsAndFeatures: ButtonTabsAndFeatures = useMemo(
    () =>
      tabs.reduce<ButtonTabsAndFeatures>(
        (componentObject, tab) => {
          const isActive = tab.text === activeTab;
          const { icon } = tab;

          componentObject.tabs.push(
            <TabsRadix.Trigger
              key={tab.text}
              value={tab.text}
              onClick={() => handleTabClick(tab.text)}
            >
              <div
                className={clsx(
                  COLOR_CLASS_MAPPER[ButtonType.BUTTON][
                    ButtonColor.TRANSPARENT
                  ],
                  "transition-all ease-out rounded-full flex-1 px-6 py-3 m-1 whitespace-nowrap drop-shadow-md transform-gpu",
                  {
                    "bg-white": isActive,
                  }
                )}
              >
                <div className="flex gap-2">
                  {icon && (
                    <div className="flex justify-center items-center">
                      <Icon
                        type={icon}
                        fill="transparent"
                        stroke={
                          isActive ? activeTabIconClass : regularTabIconClass
                        }
                      />
                    </div>
                  )}
                  <div>
                    <Text
                      customClasses={isActive ? "font-medium" : "font-normal"}
                      color={
                        isActive ? activeTabTextClass : regularTabTextClass
                      }
                    >
                      {tab.text}
                    </Text>
                  </div>
                </div>
              </div>
            </TabsRadix.Trigger>
          );
          componentObject.features.push(
            <TabsRadix.Content
              key={tab.text}
              value={tab.text}
              className={clsx("flex-1 h-0", {
                "overflow-y-auto": !tab.disableContentScroll,
              })}
            >
              {tab.feature}
            </TabsRadix.Content>
          );

          return componentObject;
        },
        { tabs: [], features: [] }
      ),
    [
      tabs,
      activeTab,
      activeTabIconClass,
      regularTabIconClass,
      activeTabTextClass,
      regularTabTextClass,
      handleTabClick,
    ]
  );

  return (
    <TabsRadix.Root defaultValue={defaultTab} className="h-full flex flex-col">
      <TabsRadix.List
        className={clsx("flex bg-grey-100 rounded-full mb-6", customClasses)}
      >
        {tabsAndFeatures.tabs}
      </TabsRadix.List>
      {tabsAndFeatures.features}
    </TabsRadix.Root>
  );
};

export default memo(ButtonTabs);
