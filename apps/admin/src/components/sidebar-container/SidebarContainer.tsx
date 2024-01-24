"use client";

import { useRouter } from "next/navigation";
import { Avatar, Icon, IconSize, IconType, Sidebar } from "ui-components";

import { useUserInfoAtomValue } from "../auth-guard/atoms";

// Next.js v13+ disallows IconType.DASHBOARD like imports in server components (e.g. layout), so we wrapped this in SidebarContainer (client side component)
const SidebarContainer = () => {
  const userInfo = useUserInfoAtomValue();
  const name = `${userInfo?.firstName ?? ""} ${userInfo?.lastName ?? ""}`;
  const image = userInfo?.image || "";
  const { push } = useRouter();

  return (
    <Sidebar
      mainNav={[
        {
          iconType: IconType.DASHBOARD,
          text: "Dashboard",
          link: "/dashboard",
        },
        {
          iconType: IconType.CUSTOMERS,
          text: "Customers",
          link: "/customers",
        },
        {
          iconType: IconType.USERS,
          text: "Users",
          link: "/users",
        },
        {
          iconType: IconType.CONTENT,
          text: "Content",
          link: "/content",
        },
        {
          iconType: IconType.FOLDER_DOCUMENT,
          text: "Metadata",
          link: "/metadata",
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
            push("/login");
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
