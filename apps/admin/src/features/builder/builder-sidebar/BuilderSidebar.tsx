import clsx from "clsx";
import { FC } from "react";
import { Icon, IconSize, TextVariant, Text } from "ui-components";
import { colors } from "ui-components/src/config/tailwind-config";

import { DESING_OPTIONS, MAIN_NAV } from "./constants";
import ExtendedSidebar from "./ExtendedSidebar";
import { renderExtendedSidebar } from "./renderExtendedSidebar";
import { SelectedEnumType } from "./types";

export type SidebarContainerProps = {
  sidebarOpen: boolean;
  close: () => void;
  open: (selected: string) => void;
  setSelected: React.Dispatch<React.SetStateAction<SelectedEnumType | null>>;
  selected: SelectedEnumType | null;
};

const SidebarContainer: FC<SidebarContainerProps> = ({
  sidebarOpen,
  close,
  open,
  selected,
  setSelected,
}) => {
  const subemnu =
    DESING_OPTIONS.find((option) => option.text === selected)?.return ?? null;

  return (
    <div className="flex flex-col h-screen transition-all duration-300 ease-in-out relative z-50 shadow">
      {MAIN_NAV.map((item) => (
        <div key={item.link} className="mt-5 mx-2">
          <div
            onClick={() => {
              open(item.text);
              setSelected(item.text);
            }}
            className="flex flex-col justify-center items-center space-y-2 p-3 bg-white rounded-xl cursor-pointer border border-transparent hover:border hover:border-primary-500"
          >
            <Icon
              type={item.iconType}
              size={IconSize.LARGE}
              fill="white"
              stroke={colors.primary[500]}
            />
            <Text variant={TextVariant.BODY4}>{item.text}</Text>
          </div>
        </div>
      ))}
      <div
        className={clsx(
          {
            "translate-x-0": sidebarOpen,
            "translate-y-[100%] opacity-0": !sidebarOpen,
          },
          "absolute -z-10 top-0 bottom-0 backdrop-blur left-[100%] bg-gray-200/80 min-w-[400px] transition-all duration-300 ease-in-out p-5"
        )}
      >
        <ExtendedSidebar
          title={selected ?? ""}
          close={close}
          onBack={subemnu ? () => setSelected(subemnu) : undefined}
        >
          {renderExtendedSidebar(selected, (selectedOption) =>
            setSelected(selectedOption)
          )}
        </ExtendedSidebar>
      </div>
    </div>
  );
};

export default SidebarContainer;
