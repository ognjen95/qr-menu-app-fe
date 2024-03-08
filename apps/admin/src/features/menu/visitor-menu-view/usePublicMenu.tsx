import { useParams } from "next/navigation";
import { useMemo, useState, useRef, useEffect } from "react";

import { addBucketPrefix } from "../../../common/helpers";
import { useGetPublicMenuQuery } from "../../../graphql-api";
import { MenuSection } from "../menu-overview/types";

export type UsePublicMenuProps = {
  hideHeader?: boolean;
  id?: string;
};

const usePublicMenu = (props?: UsePublicMenuProps) => {
  const { menuId } = useParams();
  const { id, hideHeader } = props || {};

  const { data } = useGetPublicMenuQuery({
    skip: !menuId && !id,
    variables: {
      options: {
        where: {
          id: {
            equals: (menuId as string) || id,
          },
        },
      },
    },
  });

  const chips = useMemo<string[]>(
    () =>
      data?.publicMenu.menuSections.edges.map((node) => node.node.name) ?? [],
    [data?.publicMenu.menuSections.edges]
  );

  const [selectedChip, setSelectedChip] = useState<string>("");

  const ref = useRef<HTMLDivElement>(null);

  const onChipClick = (chip: string) => {
    setSelectedChip(chip);
  };

  const isTopOfPage = window.scrollY === 0;

  useEffect(() => {
    if (!selectedChip && chips.length) setSelectedChip(chips[0]);

    if (selectedChip.includes("#SCROLLED_TO")) return;

    if (selectedChip === chips[0] && isTopOfPage) return;

    ref?.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [selectedChip, chips, isTopOfPage]);

  const menuSections = useMemo<MenuSection[]>(
    () =>
      data?.publicMenu.menuSections.edges.map(({ node: section }) => ({
        menuId: section.menuId ?? "",
        id: section.id ?? "",
        name: section.name ?? "",
        description: section.description ?? "",
        items:
          section.menuItems.edges.map(({ node: item }) => ({
            sectionId: item.sectionId ?? "",
            id: item.id ?? "",
            description: item.description ?? "",
            name: item.name ?? "",
            image: addBucketPrefix(item.image ?? ""),
            variants: item.variants,
            tags: item.tags ?? [],
            alergens: item.alergens ?? [],
          })) ?? [],
      })) ?? [],
    [data?.publicMenu.menuSections.edges]
  );

  const menu = {
    name: data?.publicMenu.name ?? "",
    menuSections,
  };

  return {
    menu,
    chips,
    selectedChip,
    setSelectedChip,
    isTopOfPage,
    onChipClick,
    ref,
  };
};

export default usePublicMenu;
