import { CUSTOMERS_QUERY_LIMIT } from "src/common/constants";

import { useGetCustomersQuery } from "~graphql-api";
import useDebounce from "~hooks/use-debounce";

import { UseCustomersMultiselectFieldReturn } from "./types";

const useCustomersMultiselectField = (): UseCustomersMultiselectFieldReturn => {
  const [searchTerm, setSearchTerm] = useDebounce();

  const { data, fetchMore } = useGetCustomersQuery({
    variables: {
      first: CUSTOMERS_QUERY_LIMIT,
      where: {
        name: {
          contains: searchTerm.toUpperCase(),
        },
      },
    },
  });

  const options =
    data?.businesses?.edges?.map(({ node }) => ({
      label: node.name,
      value: node.id,
    })) ?? [];

  const fetchMoreCustomers = () => {
    fetchMore({
      variables: {
        after: data?.businesses?.pageInfo?.endCursor,
      },
    });
  };

  const searchCustomers = (value: string) => {
    setSearchTerm(value);
  };

  return {
    options,
    fetchMoreCustomers,
    searchCustomers,
  };
};

export default useCustomersMultiselectField;
