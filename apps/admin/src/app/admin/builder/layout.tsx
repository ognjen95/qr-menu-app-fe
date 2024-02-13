"use client";

import React from "react";
import { FCWithChildren } from "ui-components";

import { UserRole } from "../../../common/enums";
import AuthGuard from "../../../components/auth-guard/AuthGuard";
import ThemeContextProvider from "../../context/theme-context/ThemeContext";

const BuilderPageLayout: FCWithChildren = ({ children }) => (
  <AuthGuard roles={[UserRole.CUSTOMER_OWNER, UserRole.CUSTOMER_EMPLOYEE]}>
    <ThemeContextProvider>{children}</ThemeContextProvider>
  </AuthGuard>
);

export default BuilderPageLayout;
