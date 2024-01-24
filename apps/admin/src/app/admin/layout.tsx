import { FCWithChildren } from "ui-components/src/common/types";

import { UserRole } from "../../common/enums";
import DefaultLayout from "../../layouts/DefaultLayout";

const Layout: FCWithChildren = ({ children }) => (
  <DefaultLayout roles={[UserRole.CUSTOMER_OWNER, UserRole.CUSTOMER_EMPLOYEE]}>
    {children}
  </DefaultLayout>
);

export default Layout;
