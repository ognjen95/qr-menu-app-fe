"use client";

import { FCWithChildren } from "ui-components";

import AuthGuard from "~components/auth-guard/AuthGuard";

const CustomerDefaultLayout: FCWithChildren = ({ children }) => (
  <AuthGuard>
    <div className="flex flex-col flex-1 min-h-[100vh] bg-grey-50 overflow-y-auto">
      {children}
    </div>
  </AuthGuard>
);

export default CustomerDefaultLayout;
