"use client";

import { ApolloProvider } from "@apollo/client";
import { SessionProvider } from "next-auth/react";
import { FCWithChildren } from "ui-components";

import apolloClient from "~config/apollo-client";
import useTrackRouterHistory from "~hooks/use-track-router-history";

const AppLayout: FCWithChildren = ({ children }) => {
  useTrackRouterHistory();

  return (
    <SessionProvider>
      <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
    </SessionProvider>
  );
};

export default AppLayout;
