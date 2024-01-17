import { FCWithChildren } from "ui-components/src/common/types";

import CustomerDefaultLayout from "../../../layouts/customer-default-layout/AdminDefaultLayout";

const Layout: FCWithChildren = ({ children }) => (
  <CustomerDefaultLayout>{children}</CustomerDefaultLayout>
);

export default Layout;
