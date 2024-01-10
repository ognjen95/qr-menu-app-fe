import { useCallback } from "react";
import { TAGS_QUERY_LIMIT } from "src/common/constants";

import { useToastContext } from "~context/toast/ToastContext";
import { useTagsQuery, useCreateTagMutation, TagsDocument } from "~graphql-api";
import useDebounce from "~hooks/use-debounce";

import { UseTagsMultiselectFieldReturn } from "./types";

const useTagsMultiselectField = (): UseTagsMultiselectFieldReturn => {
  const [searchTerm, setSearchTerm] = useDebounce();

  const { data, fetchMore } = useTagsQuery({
    variables: {
      first: TAGS_QUERY_LIMIT,
      where: {
        name: {
          contains: searchTerm.toUpperCase(),
        },
      },
    },
  });

  const [createTag] = useCreateTagMutation();
  const { success, error } = useToastContext();

  const options =
    data?.tags?.edges?.map(({ node }) => ({
      label: node.name,
      value: node.id,
    })) ?? [];

  const createTagOption = (
    name: string,
    onComplete?: (tagId?: string) => void
  ) => {
    createTag({
      onCompleted: (res) => {
        success("Tag created successfully");

        if (!onComplete) return;

        onComplete(res.createTag as string);
        setSearchTerm("");
      },
      onError: () => {
        error("Error creating tag");
      },
      refetchQueries: [
        {
          query: TagsDocument,
          variables: {
            first: TAGS_QUERY_LIMIT,
            where: {
              name: {
                contains: "",
              },
            },
          },
        },
      ],
      variables: {
        request: {
          name,
        },
      },
    });
  };

  const fetchMoreTags = useCallback(() => {
    if (!data?.tags?.pageInfo.hasNextPage) return;

    fetchMore({
      variables: {
        after: data?.tags?.pageInfo.endCursor,
      },
    });
  }, [fetchMore, data]);

  const searchTags = (value: string) => {
    setSearchTerm(value);
  };

  return {
    options,
    createTagOption,
    fetchMoreTags,
    searchTags,
  };
};

export default useTagsMultiselectField;
