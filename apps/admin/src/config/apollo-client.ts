import {
  ApolloClient,
  ApolloLink,
  from,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { relayStylePagination } from "@apollo/client/utilities";
import { withScalars } from "apollo-link-scalars";
import { addMinutes } from "date-fns";
import { buildClientSchema, IntrospectionQuery } from "graphql";
import { getSession } from "next-auth/react";

import introspectionResult, { StrictTypedTypePolicies } from "~graphql-api";

import rawSchema from "../../gql-schema.json";

const schema = buildClientSchema(rawSchema as unknown as IntrospectionQuery);

const typesMap = {
  DateTime: {
    serialize: (parsed: unknown): unknown => parsed,
    parseValue: (raw: unknown): Date | null =>
      raw ? new Date(raw as string) : null,
  },
  Date: {
    serialize: (parsed: unknown): unknown =>
      addMinutes(parsed as Date, (parsed as Date).getTimezoneOffset() * -1),
    parseValue: (raw: unknown): Date | null =>
      raw ? new Date(raw as string) : null,
  },
};

const authLink = setContext(async (_, { headers }) => {
  const session = await getSession();

  if (!session?.accessToken) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return headers;
  }

  return {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    headers: {
      ...headers,
      Authorization: `Bearer ${session?.accessToken}`,
    },
  };
});

const httpLink = ApolloLink.from([
  withScalars({
    schema,
    typesMap,
  }),
  new HttpLink({
    uri: process.env.NEXT_PUBLIC_BASE_API_URL,
  }),
]);

const typePolicies: StrictTypedTypePolicies = {
  Query: {
    fields: {
      content: relayStylePagination(["where", "order"]),
      businesses: relayStylePagination(["where"]),
      contentTypes: relayStylePagination(["where", "order"]),
      contentCategories: relayStylePagination(["where", "order"]),
      focusAreas: relayStylePagination(["where", "order"]),
      tags: relayStylePagination(["where", "order"]),
      dailyPlans: relayStylePagination(["where"]),
    },
  },
};

const cache = new InMemoryCache({
  possibleTypes: introspectionResult.possibleTypes,
  typePolicies,
});

const apolloClient = new ApolloClient({
  link: from([authLink, httpLink]),
  cache,
});

export default apolloClient;
