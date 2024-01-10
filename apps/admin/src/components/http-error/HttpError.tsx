"use client";

import { FCWithChildren, Text, TextVariant } from "ui-components";

export type HttpErrorProps = {
  code: string;
  title: string;
};

const HttpError: FCWithChildren<HttpErrorProps> = ({
  code,
  title,
  children,
}) => (
  <div className="flex flex-col space-y-4 w-[400px] relative text-center">
    <p className="text-center text-[120px] text-primary-500 font-bold leading-[146px]">
      {code}
    </p>
    <div className="w-[400px] h-[50px] backdrop-blur-[7.5px] absolute top-[82px]" />
    <Text variant={TextVariant.HEADING5} color="text-grey-900">
      {title}
    </Text>
    {children}
  </div>
);

export default HttpError;
