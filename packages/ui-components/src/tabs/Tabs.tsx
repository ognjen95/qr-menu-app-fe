import * as TabsRadix from "@radix-ui/react-tabs";
import clsx from "clsx";
import { FC, memo, useMemo, useState, useCallback } from "react";

import { Tab, TabsAndFeatures } from "./types";
import Badge, { BadgeSize } from "../badge";
import { COLOR_CLASS_MAPPER } from "../button/constants";
import { ButtonColor, ButtonType } from "../button/enums";
import Text from "../text/Text";

export type TabsProps = {
  tabs: Tab[];
  defaultTab: string;
  onTabChange?: (tab: string) => void;
  customClasses?: string;
};

const Tabs: FC<TabsProps> = ({
  tabs,
  defaultTab,
  onTabChange,
  customClasses,
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

  const tabsAndFeatures: TabsAndFeatures = useMemo(
    () =>
      tabs.reduce<TabsAndFeatures>(
        (componentObject, tab) => {
          const isActive = tab.text === activeTab;
          const hasError = !!tab.errorCount;

          componentObject.tabs.push(
            <TabsRadix.Trigger
              key={tab.text}
              value={tab.text}
              className="flex-1"
              onClick={() => handleTabClick(tab.text)}
            >
              <div
                className={clsx(
                  COLOR_CLASS_MAPPER[ButtonType.BUTTON][
                    ButtonColor.TRANSPARENT
                  ],
                  "border-b-2 py-4 px-2 transition-all ease-out flex items-center space-x-2 h-[58px] justify-center",
                  {
                    "border-primary-500": isActive && !hasError,
                    "border-grey-200": !isActive && !hasError,
                    "border-red-500": hasError,
                  }
                )}
              >
                <Text color={isActive ? "text-grey-900" : "text-grey-600"}>
                  {tab.text}
                </Text>
                {hasError && (
                  <Badge
                    number={tab.errorCount ?? 0}
                    colorClasses="bg-red-500 text-white"
                    size={BadgeSize.SMALL}
                  />
                )}
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
    [tabs, activeTab, handleTabClick]
  );

  return (
    <TabsRadix.Root defaultValue={defaultTab} className="h-full flex flex-col">
      <TabsRadix.List className={clsx("flex justify-between", customClasses)}>
        {tabsAndFeatures.tabs}
      </TabsRadix.List>
      {tabsAndFeatures.features}
    </TabsRadix.Root>
  );
};

export default memo(Tabs);
