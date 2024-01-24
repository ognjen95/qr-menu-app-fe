import axios from "axios";
import { jwtDecode, JwtPayload } from "jwt-decode";
import type { NextAuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";
import Auth0Provider from "next-auth/providers/auth0";

import { extractUserName } from "./helpers";
import { UserRole } from "../common/enums";

interface IdentityTokenFields extends JwtPayload {
  given_name?: string;
  family_name?: string;
}

type RefreshToken = {
  access_token: string;
  expires_in: number;
  refresh_token?: string;
};

const refreshToken = async (token: JWT): Promise<JWT> => {
  try {
    const { data: refreshedToken } = await axios.post<RefreshToken>(
      `${process.env.NEXT_PUBLIC_AUTH0_ISSUER_BASE_URL || ""}/oauth/token`,
      {
        grant_type: "refresh_token",
        client_id: process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID || "",
        client_secret: process.env.AUTH0_CLIENT_SECRET || "",
        refresh_token: token.refreshToken,
      },
      { headers: { "content-type": "application/x-www-form-urlencoded" } }
    );

    return {
      ...token,
      accessToken: refreshedToken.access_token,
      refreshToken: refreshedToken.refresh_token ?? token.refreshToken,
      expiresAt: token.expiresAt + refreshedToken.expires_in,
    };
  } catch (error) {
    return {
      ...token,
      error: "RefreshTokenError",
    };
  }
};

export const authOptions: NextAuthOptions = {
  providers: [
    Auth0Provider({
      clientId: process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID ?? "",
      clientSecret: process.env.AUTH0_CLIENT_SECRET ?? "",
      issuer: process.env.NEXT_PUBLIC_AUTH0_ISSUER_BASE_URL ?? "",
      authorization: {
        url: process.env.NEXT_PUBLIC_AUTH0_ISSUER_BASE_URL
          ? `${process.env.NEXT_PUBLIC_AUTH0_ISSUER_BASE_URL}/authorize`
          : undefined,
        params: {
          scope: "offline_access openid profile email",
          audience: `${process.env.NEXT_PUBLIC_AUTH0_AUDIENCE ?? ""}`,
          prompt: "login",
          response_type: "code",
        },
      },
    }),
  ],
  secret: process.env.AUTH0_SECRET ?? "",
  callbacks: {
    jwt({ token, account }) {
      if (account) {
        const decodedParams: IdentityTokenFields = jwtDecode(
          account?.id_token || ""
        );

        token.refreshToken = account.refresh_token ?? "";

        token.fullName = extractUserName(decodedParams);

        if (account.access_token) {
          token.accessToken = account.access_token;
        }

        if (account.expires_at) {
          token.expiresAt = account.expires_at;
        }

        // Here decode the token and set the user type
        // Until that is done the user type is set to ADMIN
        token.userType = UserRole.CUSTOMER_OWNER;

        if (Date.now() < token.expiresAt * 1000) {
          return token;
        }
      }

      return refreshToken(token);
    },
    session({ session, token }) {
      if (token) {
        session.accessToken = token.accessToken;
        session.refreshToken = token.refreshToken;
        session.userType = token.userType as UserRole;
        session.fullName = token.fullName as string;
        session.error = token.error;
      }

      return session;
    },
  },
};
