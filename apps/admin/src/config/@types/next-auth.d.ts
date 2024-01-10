import { JwtPayload } from "jwt-decode";

import { UserType } from "~common/enums";

declare module "next-auth" {
  interface Session {
    accessToken: string;
    refreshToken: string;
    error?: string;
    userType: UserType;
    fullName: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken: string;
    refreshToken: string;
    error?: string;
    userType: UserType;
    expiresAt: number;
  }
}

export interface IdentityTokenFields extends JwtPayload {
  given_name?: string;
  family_name?: string;
  name?: string;
  nickname?: string;
}
