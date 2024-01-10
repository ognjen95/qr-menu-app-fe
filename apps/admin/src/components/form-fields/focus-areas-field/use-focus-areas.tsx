import { useCallback } from "react";
import { CONTENT_FOCUS_AREAS_QUERY_LIMIT } from "src/common/constants";

import { useToastContext } from "~context/toast/ToastContext";
import {
  GetFocusAreasDocument,
  useCreateFocusAreaMutation,
  useGetFocusAreasQuery,
} from "~graphql-api";
import useDebounce from "~hooks/use-debounce";

import { UseFocusAreasReturn } from "./types";

const useFocusAreas = (): UseFocusAreasReturn => {
  const [searchTerm, setSearchTerm] = useDebounce();

  const { data, fetchMore } = useGetFocusAreasQuery({
    variables: {
      first: CONTENT_FOCUS_AREAS_QUERY_LIMIT,
      where: {
        name: {
          contains: searchTerm.toUpperCase(),
        },
      },
    },
  });

  const [create] = useCreateFocusAreaMutation();
  const { error, success } = useToastContext();

  const options =
    data?.focusAreas?.edges?.map(({ node }) => ({
      label: node.name,
      value: node.id,
    })) ?? [];

  const createFocusArea = (name: string, onComplete?: () => void) => {
    create({
      onCompleted: () => {
        success("Focus area created successfully");

        if (!onComplete) return;

        onComplete();
        setSearchTerm("");
      },
      onError: () => {
        error("Error creating focus area");
      },
      refetchQueries: [
        {
          query: GetFocusAreasDocument,
          variables: {
            first: CONTENT_FOCUS_AREAS_QUERY_LIMIT,
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

  const fetchMoreFocusAreas = useCallback(() => {
    if (!data?.focusAreas?.pageInfo.hasNextPage) return;

    fetchMore({
      variables: {
        first: 10,
        after: data?.focusAreas?.pageInfo?.endCursor,
      },
    });
  }, [fetchMore, data]);

  const searchFocusAreas = (value: string) => {
    setSearchTerm(value);
  };

  return {
    options,
    createFocusArea,
    fetchMoreFocusAreas,
    searchFocusAreas,
  };
};

export default useFocusAreas;
