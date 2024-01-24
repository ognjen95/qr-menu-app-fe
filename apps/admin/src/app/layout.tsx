import { FontLinks } from "ui-components";
import { FCWithChildren } from "ui-components/src/common/types";

import "~styles/tailwind.css";
import AppLayout from "../layouts/AppLayout";

export const metadata = {
  title: "QR Menu",
  description: "QR Menu",
};

const RootLayout: FCWithChildren = ({ children }) => (
  <html lang="en">
    <head>
      <FontLinks />
    </head>
    <body>
      <AppLayout>{children}</AppLayout>
    </body>
  </html>
);

export default RootLayout;
