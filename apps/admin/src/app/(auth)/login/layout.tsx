"use client";

import { FCWithChildren } from "ui-components";

import DefaultAuthLayout from "../../../layouts/DefaultAuthLayout";

const LoginLayout: FCWithChildren = ({ children }) => (
  <DefaultAuthLayout
    title="Live your life freely"
    description="Description"
    imageUrl="/images/bar.jpg"
  >
    {children}
  </DefaultAuthLayout>
);

export default LoginLayout;
