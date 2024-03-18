import clsx from "clsx";
import { FC, useEffect } from "react";
import { UseModalReturn } from "ui-components/src/modal/useModal";

import MenuItem from "./MenuSectionItem";
import { ComponentType } from "../../../app/context/theme-context/enums";
import { DefaultThemeType } from "../../../app/context/theme-context/types";
import useBreakpoints from "../../../hooks/use-breakpoints";
import useIntersectionObserver from "../../../hooks/use-intersection-observer";
import ThemeTypography from "../../themes/components/typography/ThemeTypography";
import { MenuSectionItem } from "../menu-overview/types";

export type MenuSectionProps = {
  colorPallete?: DefaultThemeType["colorPallete"];
  sectionId: string;
  section: string;
  selectedChip: string;
  modal: UseModalReturn<MenuSectionItem>;
  setSelectedChip: (chip: string) => void;
  items: MenuSectionItem[];
  isBuilder?: boolean;
  isMobile?: boolean;
};

const MenuSection: FC<MenuSectionProps> = ({
  section,
  sectionId,
  selectedChip,
  setSelectedChip,
  items: menuSectionItems,
  modal,
  colorPallete,
  isBuilder = false,
  isMobile = false,
}) => {
  const [ref, isvisible] = useIntersectionObserver({
    threshold: 0,
    rootMargin: "0px 90% -90% 0px",
  });

  useEffect(() => {
    if (!isMobile) return;

    if (isvisible && selectedChip.split("#SCROLLED_TO")[0] !== section) {
      setSelectedChip(section);
    }
  }, [isvisible, section, selectedChip, isMobile, setSelectedChip]);

  return (
    <div key={sectionId}>
      <div
        className={clsx("py-5 px-5", {
          "xs:px-0": !isBuilder,
        })}
        ref={ref}
      >
        <ThemeTypography
          style={{
            color: colorPallete?.text,
          }}
          type={ComponentType.H4}
          props={{
            value: section,
          }}
        />
      </div>
      <div
        className={clsx({
          "grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-5":
            !isBuilder,
          "grid grid-cols-1 gap-2": isBuilder,
        })}
      >
        {menuSectionItems.map((item) => (
          <MenuItem
            key={item.id}
            item={item}
            colorPallete={colorPallete!}
            modal={modal}
            isMobile={isMobile}
            isBuilder={isBuilder}
          />
        ))}
      </div>
    </div>
  );
};

export default MenuSection;
