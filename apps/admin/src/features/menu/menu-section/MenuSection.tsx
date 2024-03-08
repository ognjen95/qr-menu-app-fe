import clsx from "clsx";
import Image from "next/image";
import { FC, useEffect } from "react";
import { UseModalReturn } from "ui-components/src/modal/useModal";

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
};

const MenuSection: FC<MenuSectionProps> = ({
  section,
  sectionId,
  selectedChip,
  setSelectedChip,
  items,
  modal,
  colorPallete,
  isBuilder,
}) => {
  const [ref, isvisible] = useIntersectionObserver({
    threshold: 0,
    rootMargin: "0px 90% -90% 0px",
  });

  const isMobile = useBreakpoints("xs");

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
        {items.map((item) => (
          <div
            onClick={() => modal.open(item)}
            key={item.id}
            className={clsx({
              "rounded-xl": !isMobile && !isBuilder,
            })}
            style={{
              backgroundColor: colorPallete?.surface,
            }}
          >
            <div className="flex items-center justify-between pl-4 pr-2 py-2">
              <div className="flex flex-col flex-1 justify-between overflow-hidden space-y-2 pr-2">
                <ThemeTypography
                  type={ComponentType.H5}
                  style={{ color: colorPallete?.primary }}
                  props={{
                    value: item.name,
                  }}
                />
                <div className="flex flex-col h-10">
                  <ThemeTypography
                    type={ComponentType.P}
                    style={{
                      color: colorPallete?.text,
                      fontWeight: "400",
                      opacity: "0.9",
                      fontSize: "16px",
                    }}
                    props={{
                      value: item.description,
                    }}
                  />
                </div>
                <ThemeTypography
                  type={ComponentType.H6}
                  style={{ color: colorPallete?.primary }}
                  props={{
                    value: item.variants
                      .map((variant) => `${variant.price}$`)
                      .join(" • "),
                  }}
                />
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
                    blurDataURL="/images/no-content.png"
                    placeholder="blur"
                    fill
                    src={item.image || "/images/no-content.png"}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuSection;
