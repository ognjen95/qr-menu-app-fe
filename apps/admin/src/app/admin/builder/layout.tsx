"use client";

import React from "react";
import { FCWithChildren } from "ui-components";

import AuthGuard from "~components/auth-guard/AuthGuard";

import { UserRole } from "../../../common/enums";
import ThemeContextProvider from "../../context/theme-context/ThemeContext";

const BuilderPageLayout: FCWithChildren = ({ children }) => (
  <AuthGuard roles={[UserRole.CUSTOMER_OWNER, UserRole.CUSTOMER_EMPLOYEE]}>
    {children}
  </AuthGuard>
);

export default BuilderPageLayout;
