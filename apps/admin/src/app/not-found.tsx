"use client";

import { Text, TextVariant } from "ui-components";

import HttpError from "~components/http-error/HttpError";
import ErrorLayout from "~layouts/ErrorLayout";

const NotFoundPage = () => (
  <ErrorLayout>
    <HttpError code="404" title="Page not found">
      <Text variant={TextVariant.BODY3} color="text-grey-900">
        Try going back to the previous page or contact us at{" "}
        <span className="font-medium">support@concordehalthinc.com</span> if you
        need any help
      </Text>
    </HttpError>
  </ErrorLayout>
);

export default NotFoundPage;
