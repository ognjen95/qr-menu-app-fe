"use client";

import { FCWithChildren } from "ui-components";

import AuthGuard from "~components/auth-guard/AuthGuard";

import SidebarContainer from "../../components/sidebar-container/SidebarContainer";

const AdminDefaultLayout: FCWithChildren = ({ children }) => (
  <AuthGuard>
    <div className="flex items-start h-screen bg-grey-50">
      <SidebarContainer />
      <div className="flex flex-col flex-1 h-full overflow-y-auto">
        {children}
      </div>
    </div>
  </AuthGuard>
);

export default AdminDefaultLayout;
