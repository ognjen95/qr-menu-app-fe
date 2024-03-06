import clsx from "clsx";
import Image from "next/image";
import React from "react";
import {
  Icon,
  IconType,
  Modal,
  Text,
  TextVariant,
  useModal,
} from "ui-components";
import { colors } from "ui-components/src/config/tailwind-config";

import { THEMES } from "./constants";
import { ThemeMapper } from "./types";
import { useThemeContext } from "../../../../app/context/theme-context/ThemeContext";

const ThemesSection = () => {
  const { setTheme } = useThemeContext();
  const modal = useModal<ThemeMapper>();
  const [isTop, setIsTop] = React.useState(true);

  return (
    <div className="h-full overflow-y-auto pb-16">
      <div className="w-[650px] flex flex-wrap justify-center py-2 gap-3 h-full">
        {THEMES.map((item) => (
          <div key={item.id} className="relative">
            <div
              onClick={() => modal.open(item)}
              onScroll={(e) => {
                if (e.currentTarget.scrollTop > 0) {
                  setIsTop(false);
                } else {
                  setIsTop(true);
                }
              }}
              onMouseLeave={() => setIsTop(true)}
              className="w-[300px] relative col-span-1 relative h-[400px] group overflow-y-auto overflow-x-hidden no-scrollbar ease-in-out duration-300 transition-all hover:shadow-lg rounded-xl shadow hover:border-primary-500 border-2 cursor-pointer border-transparent"
            >
              <Image
                src={item.image}
                alt={item.id}
                width={300}
                height={600}
                className="ease-in-out duration-300 transition-all hover:scale-105 group"
                placeholder="blur"
                blurDataURL={item.image}
              />
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 ease-in-out duration-300 bg-primary-500 backdrop-blur px-2 rounded text-white text-center">
                <Text color="text-white" variant={TextVariant.BODY4}>
                  {item.id}
                </Text>
              </div>
              <div
                className={clsx(
                  { "group-hover:animate-pulse": isTop },
                  "absolute bottom-0 py-2 right-0 left-0  opacity-0  ease-in-out duration-300 bg-primary-500/95 backdrop-blur-2xl px-2 rounded text-grey-900 text-center"
                )}
              >
                <Text
                  customClasses="text-white font-bold flex items-center space-x-2 justify-center"
                  variant={TextVariant.BODY4}
                >
                  Scroll down
                  <div className="rotate-90">
                    <Icon
                      type={IconType.CHEVRON_RIGHT}
                      stroke="white"
                      fill="none"
                    />
                  </div>
                </Text>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Modal
        modalIcon={{
          type: IconType.IMAGE_1,
          stroke: colors.primary["500"],
        }}
        hideCloseButton={false}
        isOpen={modal.isOpen}
        close={modal.close}
        onConfirm={() => {
          setTheme(modal.params!.config);
          modal.close();
        }}
        title="Are you sure you want to change the theme?"
        description="Changing the theme will change the look of your website, but you can allways change it back."
      />
    </div>
  );
};

export default ThemesSection;
