import clsx from "clsx";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { Icon, IconSize, TextVariant, Text, IconType } from "ui-components";
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
  const { push } = useRouter();

  return (
    <div className="flex flex-col justify-between h-screen transition-all duration-300 ease-in-out relative z-50 pt-3">
      <div className="flex flex-col justify-between">
        <Image
          src="/menu-logo.png"
          alt="Concorde Health Logo"
          width={100}
          height={100}
          className="ml-3"
        />
        {MAIN_NAV.map((item) => (
          <div key={item.link} className="mt-3 mx-2">
            <div
              onClick={() => {
                open(item.text);
                setSelected(item.text);
              }}
              className="flex flex-col justify-center items-center space-y-2 p-2 rounded-xl cursor-pointer border border-transparent hover:border hover:border-primary-500"
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
      </div>
      <div className="py-5 mx-2">
        <div
          onClick={() => {
            push("/admin/menus");
          }}
          className="flex flex-col justify-center items-center space-y-2 p-2 rounded-xl cursor-pointer border border-transparent hover:border hover:border-grey-900"
        >
          <Icon
            type={IconType.EXIT}
            size={IconSize.EXTRA_LARGE}
            fill="white"
            stroke={colors.grey[700]}
          />
          <Text variant={TextVariant.BODY4}>Exit builder</Text>
        </div>
      </div>
      <div
        className={clsx(
          {
            "translate-x-0": sidebarOpen,
            "translate-y-[100%] opacity-0": !sidebarOpen,
          },
          "absolute -z-10 top-0 bottom-0 backdrop-blur left-[100%] bg-gray-200/80 min-w-[400px] transition-all duration-300 ease-in-out pt-2 px-5"
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
