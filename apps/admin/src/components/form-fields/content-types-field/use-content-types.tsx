import { useCallback } from "react";
import { CONTENT_TYPES_QUERY_LIMIT } from "src/common/constants";

import { useToastContext } from "~context/toast/ToastContext";
import {
  GetContentTypesDocument,
  useGetContentTypesQuery,
  useCreateContentTypeMutation,
} from "~graphql-api";
import useDebounce from "~hooks/use-debounce";

import { UseContentTypeReturn } from "./types";

const useContentTypes = (): UseContentTypeReturn => {
  const [searchTerm, setSearchTerm] = useDebounce();

  const { data, fetchMore } = useGetContentTypesQuery({
    variables: {
      first: CONTENT_TYPES_QUERY_LIMIT,
      where: {
        name: {
          contains: searchTerm.toUpperCase(),
        },
      },
    },
  });

  const [create] = useCreateContentTypeMutation();
  const { error, success } = useToastContext();

  const options =
    data?.contentTypes?.edges?.map(({ node }) => ({
      label: node.name,
      value: node.id,
    })) ?? [];

  const createType = (name: string, onComplete?: (typeId?: string) => void) => {
    create({
      onCompleted: (res) => {
        success("Type created successfully");

        if (!onComplete) return;

        onComplete(res.createContentType as string);
        setSearchTerm("");
      },
      onError: () => {
        error("Error creating type");
      },
      refetchQueries: [
        {
          query: GetContentTypesDocument,
          variables: {
            first: CONTENT_TYPES_QUERY_LIMIT,
            where: {
              name: {
                contains: "",
              },
            },
          },
        },
      ],
      variables: {
        args: {
          name,
        },
      },
    });
  };

  const fetchMoreTypes = useCallback(() => {
    if (!data?.contentTypes?.pageInfo.hasNextPage) return;

    fetchMore({
      variables: {
        first: 10,
        after: data?.contentTypes?.pageInfo?.endCursor,
      },
    });
  }, [fetchMore, data]);

  const searchTypes = (value: string) => {
    setSearchTerm(value);
  };

  return {
    options,
    createType,
    fetchMoreTypes,
    searchTypes,
  };
};

export default useContentTypes;
