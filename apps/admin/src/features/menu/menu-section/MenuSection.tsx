import Image from "next/image";
import { FC, useEffect } from "react";
import { TextVariant, Paper, PaperRounded, Text } from "ui-components";
import { UseModalReturn } from "ui-components/src/modal/useModal";

import useBreakpoints from "../../../hooks/use-breakpoints";
import useIntersectionObserver from "../../../hooks/use-intersection-observer";
import { MenuSectionItem } from "../menu-overview/types";

export type MenuSectionProps = {
  sectionId: string;
  section: string;
  selectedChip: string;
  modal: UseModalReturn<MenuSectionItem>;
  setSelectedChip: (chip: string) => void;
  items: MenuSectionItem[];
};

const MenuSection: FC<MenuSectionProps> = ({
  section,
  sectionId,
  selectedChip,
  setSelectedChip,
  items,
  modal,
}) => {
  const [ref, isvisible] = useIntersectionObserver({
    threshold: 0,
    rootMargin: "0px 90% -90% 0px",
  });

  useEffect(() => {
    if (isvisible && selectedChip.split("#SCROLLED_TO")[0] !== section) {
      setSelectedChip(section);
    }
  }, [isvisible, section, selectedChip, setSelectedChip]);

  const isMobile = useBreakpoints("xs");

  return (
    <div key={sectionId}>
      <div className="py-5 px-5 xs:px-0" ref={ref}>
        <Text variant={TextVariant.HEADING5}>{section}</Text>
      </div>
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-5">
        {items.map((item) => (
          <Paper
            onClick={() => modal.open(item)}
            key={item.id}
            noPadding
            rounded={isMobile ? PaperRounded.NONE : PaperRounded.XL}
          >
            <div className="flex items-center justify-between pl-4 pr-2 py-2">
              <div className="flex flex-col flex-1 justify-between overflow-hidden space-y-2 pr-2">
                <Text variant={TextVariant.HEADING6}>{item.name}</Text>
                <div className="flex flex-col h-10">
                  <Text customClasses="text-ellipsis overflow-hidden">
                    {item.description}
                  </Text>
                </div>
                <Text color="text-primary-600" variant={TextVariant.HEADING6}>
                  {item.variants
                    .map((variant) => `${variant.price}$`)
                    .join(" • ")}
                </Text>
              </div>
              <div>
                <div className="shadow border border-gray-200 rounded-xl overflow-hidden relative h-[100px] w-[100px]">
                  <Image
                    alt="Menu item"
                    quality={100}
                    priority
                    loading="eager"
                    objectFit="cover"
                    objectPosition="center"
                    fill
                    src={item.image || "/images/no-content.png"}
                  />
                </div>
              </div>
            </div>
          </Paper>
        ))}
      </div>
    </div>
  );
};

export default MenuSection;
