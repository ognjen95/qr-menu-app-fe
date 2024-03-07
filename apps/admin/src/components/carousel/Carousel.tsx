import Image from "next/image";
import { FC, useEffect, useState } from "react";
import { Portal } from "react-portal";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Icon, IconSize, IconType } from "ui-components";
import "swiper/css";
import "swiper/css/navigation";

export type CarouselProps = {
  isOpen: boolean;
  onClose: () => void;
  defaultActiveSlide?: number;
  imgLinks: string[];
};

export const Carousel: FC<CarouselProps> = ({
  isOpen,
  onClose,
  defaultActiveSlide,
  imgLinks,
}) => {
  const [ref, setRef] = useState<HTMLElement | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const [swiper, setSwiper] = useState<SwiperClass>();

  useEffect(() => {
    const body = document.querySelector("body");
    setRef(body);

    return () => {
      setRef(null);
    };
  }, []);

  useEffect(() => {
    if (defaultActiveSlide) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
      swiper?.slideTo(defaultActiveSlide, 0);
    }
  }, [swiper, defaultActiveSlide]);

  return (
    <div>
      {isOpen && (
        <Portal node={ref}>
          <div className="absolute w-screen h-screen top-0 flex flex-col z-[999999] bg-black bg-opacity-95">
            <div className="absolute right-5 top-5 z-[99999999]">
              <Icon
                type={IconType.CLOSE}
                stroke="white"
                size={IconSize.EXTRA_LARGE}
                onClick={onClose}
              />
            </div>
            <Swiper
              navigation
              modules={[Navigation, Pagination]}
              className="w-full h-2/3 flex justify-center items-center my-auto z-[999999999999999]"
              wrapperClass=""
              onSwiper={(swiperInit) => setSwiper(swiperInit)}
            >
              {imgLinks.map((imgLink) => (
                <SwiperSlide
                  className="!flex justify-center items-center self-center"
                  key={imgLink}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="w-full h-full relative">
                    <Image
                      fill
                      objectFit="contain"
                      src={imgLink}
                      alt="gallery-image"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </Portal>
      )}
    </div>
  );
};
