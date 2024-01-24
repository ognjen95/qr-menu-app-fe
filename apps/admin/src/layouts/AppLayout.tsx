"use client";

import { ApolloProvider } from "@apollo/client";
import { ToastContainer } from "react-toastify";
import { FCWithChildren } from "ui-components";

import apolloClient from "~config/apollo-client";
import useTrackRouterHistory from "~hooks/use-track-router-history";

const AppLayout: FCWithChildren = ({ children }) => {
  useTrackRouterHistory();

  return (
    <ApolloProvider client={apolloClient}>
      {children}
      <ToastContainer />
    </ApolloProvider>
  );
};

export default AppLayout;
