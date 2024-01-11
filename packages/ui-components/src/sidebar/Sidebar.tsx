import clsx from "clsx";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import BottomNavbarItem from "./BottomNavbarItem";
import { NAV_CLASSES } from "./constants";
import { BottomNav, TopNav } from "./types";
import ChLogo from "../../public/ch-logo.svg";
import { IconSize, IconType } from "../icon/enums";
import Icon from "../icon/Icon";
import Text from "../text";
import { TextVariant } from "../text/enums";

type SidebarProps = {
  mainNav: TopNav[];
  bottomNav: BottomNav[];
};

const Sidebar = ({ mainNav, bottomNav }: SidebarProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <div
      className={clsx(
        "bg-white relative h-full inline-flex flex-col z-10 shadow-md transition-all ease-in-out duration-150 border-r border-grey-100",
        sidebarOpen ? "w-[225px] min-w-[225px]" : "w-[88px] min-w-[88px]"
      )}
    >
      <div
        onClick={toggleSidebar}
        className="group flex justify-center items-center absolute w-3 h-6 bg-white mt-16 -right-3 cursor-pointer py-1 text-grey-900 hover:text-primary-600 rounded-r-md border-r border-t border-b border-grey-100"
      >
        <div
          className={clsx(
            "transition-all ease-in-out duration-150 relative right-[2px]",
            sidebarOpen ? "rotate-90" : "-rotate-90"
          )}
        >
          <Icon
            type={IconType.CARET_DOWN}
            size={IconSize.SMALL}
            fill="white"
            stroke="currentColor"
          />
        </div>
      </div>
      <div className="flex flex-col overflow-x-hidden p-6 pr-0 h-full">
        <div
          className={clsx("flex items-center min-h-[45px] relative", {
            "w-[140px]": sidebarOpen,
            "w-[45px]": !sidebarOpen,
          })}
        >
          <div className="w-[140px] h-[40px] absolute">
            <Image
              src={ChLogo as StaticImport}
              alt="Concorde Health Logo"
              width={140}
              height={40}
            />
            <div
              className={clsx(
                "w-24 h-10 bg-white absolute right-0 -top-1",
                sidebarOpen ? "opacity-0" : "opacity-1"
              )}
              onClick={(event) => event.preventDefault()}
            />
          </div>
        </div>
        <div className="flex flex-1 flex-col justify-between pt-10 pb-5">
          <div>
            {mainNav.map(({ text, link, iconType }) => (
              <Link key={text} href={link}>
                <div className={NAV_CLASSES}>
                  <Icon
                    type={iconType}
                    size={IconSize.LARGE}
                    fill="white"
                    stroke="currentColor"
                  />
                  <div
                    className={clsx(
                      "transition-all",
                      sidebarOpen ? "opacity-1" : "opacity-0"
                    )}
                  >
                    <Text variant={TextVariant.BODY3} color="currentColor">
                      {text}
                    </Text>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div>
            {bottomNav.map(
              ({ text, link, icon, onClick, showTooltip, notClickable }) => (
                <Link
                  key={text}
                  href={link}
                  className={clsx({ "cursor-default": notClickable })}
                >
                  <div className={NAV_CLASSES} onClick={onClick}>
                    {icon}
                    <div
                      className={clsx(
                        "transition-all truncate",
                        sidebarOpen ? "opacity-1" : "opacity-0"
                      )}
                    >
                      <BottomNavbarItem text={text} showTooltip={showTooltip} />
                    </div>
                  </div>
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
