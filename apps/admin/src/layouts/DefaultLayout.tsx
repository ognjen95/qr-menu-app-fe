"use client";

import { FCWithChildren } from "ui-components";

import AuthGuard, { AuthGuardProps } from "~components/auth-guard/AuthGuard";

import SidebarContainer from "../components/sidebar-container/SidebarContainer";

export type DefaultLayoutProps = AuthGuardProps;

const DefaultLayout: FCWithChildren<DefaultLayoutProps> = ({
  children,
  roles,
}) => (
  <AuthGuard roles={roles}>
    <div className="flex items-start h-screen bg-grey-50">
      <SidebarContainer />
      <div className="flex flex-col flex-1 h-full overflow-y-auto">
        {children}
      </div>
    </div>
  </AuthGuard>
);

export default DefaultLayout;
