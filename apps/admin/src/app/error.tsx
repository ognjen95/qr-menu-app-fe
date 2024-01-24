"use client";

import { FC } from "react";
import { Button, Text, TextVariant } from "ui-components";

import HttpError from "~components/http-error/HttpError";

import ErrorLayout from "../layouts/ErrorLayout";

export type ErrorProps = {
  reset: () => void;
};

const Error: FC<ErrorProps> = ({ reset }) => (
  <ErrorLayout>
    <HttpError code="500" title="Internal server error">
      <div className="flex flex-col space-y-4">
        <Text variant={TextVariant.BODY3} color="text-grey-900">
          Something's gone wrong. Not to worry, try to reload the page.
        </Text>
        <Button onClick={reset}>Reload</Button>
        <Text variant={TextVariant.BODY3}>
          Try going back to the previous page or contact us at{" "}
          <span className="font-medium">support@concordehalthinc.com</span> if
          you need any help
        </Text>
      </div>
    </HttpError>
  </ErrorLayout>
);

export default Error;
