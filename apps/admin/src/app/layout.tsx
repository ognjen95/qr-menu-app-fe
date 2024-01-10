import { FontLinks } from "ui-components";
import { FCWithChildren } from "ui-components/src/common/types";

import AppLayout from "~layouts/AppLayout";

import "~styles/tailwind.css";

export const metadata = {
  title: "Concorde Health",
  description: "Concorde Health WebApp",
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
