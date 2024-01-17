import { FCWithChildren } from "ui-components/src/common/types";

import AdminDefaultLayout from "~layouts/admin-default-layout/AdminDefaultLayout";

const Layout: FCWithChildren = ({ children }) => (
  <AdminDefaultLayout>{children}</AdminDefaultLayout>
);

export default Layout;
