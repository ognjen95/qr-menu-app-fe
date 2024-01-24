"use client";

import { FCWithChildren } from "ui-components";

import DefaultAuthLayout from "../../../layouts/DefaultAuthLayout";

const LoginLayout: FCWithChildren = ({ children }) => (
  <DefaultAuthLayout
    title="Stand out from the crowd"
    description="Digitalize your business with our management software."
    imageUrl="/images/bar.jpg"
  >
    {children}
  </DefaultAuthLayout>
);

export default LoginLayout;
