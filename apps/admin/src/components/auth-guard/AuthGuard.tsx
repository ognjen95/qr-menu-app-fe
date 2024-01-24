import { isAfter } from "date-fns";
import { jwtDecode } from "jwt-decode";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { FCWithChildren, Loader, LoaderSize } from "ui-components";

import { UserRoles as UserRolesGql } from "~graphql-api";

import { useUserInfoAtom } from "./atoms";
import { UserRole } from "../../common/enums";

const PUBLIC_ROUTES = ["/login", "/forgot-password"];

export type DecodedToken = {
  exp: number;
  userRole: UserRolesGql;
  given_name: string;
  family_name: string;
  email: string;
  image: string;
};

export type AuthGuardProps = {
  roles?: UserRole[];
};

const AuthGuard: FCWithChildren<AuthGuardProps> = ({ children, roles }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true); // change to true default
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useUserInfoAtom();
  const { replace } = useRouter();
  const pathname = usePathname();
  const isPublicRoute = PUBLIC_ROUTES.includes(pathname);
  const isAuthorized = userInfo.userRole
    ? roles?.includes(userInfo.userRole)
    : false;

  const unauthenticatedUserCallback = useCallback(() => {
    replace("/login");
  }, [replace]);

  useEffect(() => {
    if (isPublicRoute) {
      setIsLoading(false);
      setIsAuthenticated(true);
    } else {
      const accessToken = localStorage.getItem("accessToken");
      const idToken = localStorage.getItem("idToken");

      if (!accessToken || !idToken) {
        unauthenticatedUserCallback();
        return;
      }

      const decodedAuthToken = jwtDecode<DecodedToken>(accessToken);
      const decodedIdToken = jwtDecode<DecodedToken>(idToken);

      const commonData = {
        firstName: decodedIdToken.given_name,
        lastName: decodedIdToken.family_name,
        email: decodedIdToken.email,
      };

      switch (decodedIdToken.userRole) {
        case UserRolesGql.CustomerOwner:
          setUserInfo((prev) => ({
            ...prev,
            ...commonData,
            userRole: UserRole.CUSTOMER_OWNER,
          }));
          break;
        case UserRolesGql.CustomerEmployee:
          setUserInfo((prev) => ({
            ...prev,
            ...commonData,
            userRole: UserRole.CUSTOMER_EMPLOYEE,
          }));
          break;
        case UserRolesGql.Admin:
          setUserInfo((prev) => ({
            ...prev,
            ...commonData,
            userRole: UserRole.ADMIN,
          }));
          break;
        case UserRolesGql.SuperAdmin:
          setUserInfo((prev) => ({
            ...prev,
            ...commonData,
            userRole: UserRole.SUPER_ADMIN,
          }));
          break;
        default:
          break;
      }

      const isAuthTokenExpired = isAfter(
        Date.now(),
        decodedAuthToken.exp * 1000
      );

      if (isAuthTokenExpired) {
        // try to refresh token

        replace("/login");
        return;
      }

      // check role and redirect to appropriate applications
      if (!isAuthorized) return;

      setIsLoading(false);
      setIsAuthenticated(true);
    }
  }, [
    isAuthorized,
    isPublicRoute,
    replace,
    setUserInfo,
    unauthenticatedUserCallback,
  ]);

  if (isLoading || !isAuthenticated)
    return (
      <div className="h-screen">
        <Loader centered size={LoaderSize.MEDIUM} />
      </div>
    );

  return <div>{children}</div>;
};

export default AuthGuard;
