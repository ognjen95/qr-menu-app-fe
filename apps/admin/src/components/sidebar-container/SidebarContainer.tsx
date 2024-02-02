"use client";

import { Avatar, Icon, IconSize, IconType, Sidebar } from "ui-components";

import { useUserInfoAtomValue } from "../auth-guard/atoms";

const SidebarContainer = () => {
  const userInfo = useUserInfoAtomValue();
  const name = `${userInfo?.firstName ?? ""} ${userInfo?.lastName ?? ""}`;
  const image = userInfo?.image || "";

  return (
    <Sidebar
      mainNav={[
        {
          iconType: IconType.DASHBOARD,
          text: "Dashboard",
          link: "/admin/dashboard",
        },
        {
          iconType: IconType.FILE_DOCUMENT,
          text: "Menus",
          link: "/admin/menus",
        },
      ]}
      bottomNav={[
        {
          icon: (
            <Icon
              type={IconType.LOGOUT}
              size={IconSize.LARGE}
              fill="white"
              stroke="currentColor"
            />
          ),
          text: "Sign out",
          link: "",
          onClick: () => {
            localStorage.clear();
            window.location.href = "/login";
          },
        },
        {
          icon: (
            <div>
              <Avatar imageSrc={image} size="SMALL" />
            </div>
          ),
          text: name,
          link: "",
          showTooltip: true,
          notClickable: true,
        },
      ]}
    />
  );
};

export default SidebarContainer;
