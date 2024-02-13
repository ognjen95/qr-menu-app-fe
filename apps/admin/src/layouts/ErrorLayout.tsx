"use client";

import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { FCWithChildren, Text, TextVariant } from "ui-components";

import ChLogo from "../../public/menu-logo.png";

const ErrorLayout: FCWithChildren = ({ children }) => (
  <div className="flex flex-col items-center justify-center w-screen h-screen pb-6 pt-20">
    <div className="flex flex-col justify-between h-full">
      <Image
        className="self-center"
        src={ChLogo as StaticImport}
        alt="Concorde Health Logo"
        width={140}
        height={40}
      />
      {children}
      <Text
        variant={TextVariant.BODY3}
        color="text-grey-900"
        customClasses="self-center"
      >
        © Concorde Health 2023. All rights reserved.
      </Text>
    </div>
  </div>
);

export default ErrorLayout;
