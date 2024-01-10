import { useCallback } from "react";
import { CONTENT_CATEGORIES_QUERY_LIMIT } from "src/common/constants";

import { useToastContext } from "~context/toast/ToastContext";
import {
  GetContentCategoriesDocument,
  useGetContentCategoriesQuery,
  useCreateContentCategoryMutation,
} from "~graphql-api";
import useDebounce from "~hooks/use-debounce";

import { UseContentCategoriesReturn } from "./types";

const useContentCategories = (): UseContentCategoriesReturn => {
  const [searchTerm, setSearchTerm] = useDebounce();

  const { data, fetchMore } = useGetContentCategoriesQuery({
    variables: {
      first: CONTENT_CATEGORIES_QUERY_LIMIT,
      where: {
        name: {
          contains: searchTerm.toUpperCase(),
        },
      },
    },
  });

  const [create] = useCreateContentCategoryMutation();
  const { error, success } = useToastContext();

  const options =
    data?.contentCategories?.edges?.map(({ node }) => ({
      label: node.name,
      value: node.id,
    })) ?? [];

  const createCategory = (
    name: string,
    onComplete?: (categoryId?: string) => void
  ) => {
    create({
      refetchQueries: [
        {
          query: GetContentCategoriesDocument,
          variables: {
            first: CONTENT_CATEGORIES_QUERY_LIMIT,
            where: {
              name: {
                contains: searchTerm.toUpperCase(),
              },
            },
          },
        },
      ],
      onCompleted: (resp) => {
        success("Category created successfully");

        if (!onComplete) return;

        onComplete(resp.createContentCategory as string);
        setSearchTerm("");
      },
      onError: () => {
        error("Error creating category");
      },
      variables: {
        request: {
          name,
        },
      },
    });
  };

  const fetchMoreCategories = useCallback(() => {
    if (!data?.contentCategories?.pageInfo.hasNextPage) return;

    fetchMore({
      variables: {
        first: 10,
        after: data?.contentCategories?.pageInfo?.endCursor,
      },
    });
  }, [fetchMore, data]);

  const searchCategories = (search: string) => {
    setSearchTerm(search);
  };

  return {
    options,
    createCategory,
    fetchMoreCategories,
    searchCategories,
  };
};

export default useContentCategories;
