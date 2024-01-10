import Image from "next/image";
import { FC, useEffect } from "react";
import { TextVariant, Paper, PaperRounded, Text } from "ui-components";
import { UseModalReturn } from "ui-components/src/modal/useModal";

import { MenuItem } from "./types";
import useIntersectionObserver from "../../../hooks/use-intersection-observer";

export type MenuSectionProps = {
  sectionId: number;
  section: string;
  selectedChip: string;
  modal: UseModalReturn<MenuItem>;
  setSelectedChip: (chip: string) => void;
  items: MenuItem[];
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

  return (
    <div key={sectionId}>
      <div className="py-5" ref={ref}>
        <Text variant={TextVariant.HEADING5}>{section}</Text>
      </div>
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
        {items.map((item) => (
          <Paper
            onClick={() => modal.open(item)}
            key={item.id}
            noPadding
            rounded={PaperRounded.XXL}
          >
            <div className="flex items-center justify-between pl-4 pr-2 py-2">
              <div className="flex flex-col flex-1 justify-between overflow-hidden space-y-2 pr-2">
                <Text variant={TextVariant.HEADING6}>{item.name}</Text>
                <Text truncate>{item.description}</Text>
                <Text color="text-primary-600" variant={TextVariant.HEADING6}>
                  {item.price} $
                </Text>
              </div>
              <div className="shadow border border-gray-200 rounded-xl overflow-hidden relative h-[100px] w-[100px]">
                <Image
                  alt="Menu item"
                  quality={100}
                  priority
                  objectFit="cover"
                  objectPosition="center"
                  fill
                  src={item.image}
                />
              </div>
            </div>
          </Paper>
        ))}
      </div>
    </div>
  );
};

export default MenuSection;
