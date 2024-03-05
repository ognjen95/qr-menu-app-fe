import Image from "next/image";
import { FC } from "react";
import { TypographySize } from "src/app/context/theme-context/enums";
import { ColorPallete, Section } from "src/app/context/theme-context/types";
import { useModal } from "ui-components";

// import { Carousel } from "~components/carousel/Carousel";

type GallerySectionProps = {
  sectionData: Section;
};

const GallerySection: FC<GallerySectionProps> = ({
  sectionData: { components },
}) => (
  // const modal = useModal<{ index: number }>();

  <section className="py-[120px]">
    <div className="flex flex-col items-center max-w-[1170px] mx-auto">
      <div className="w-full grid grid-cols-[repeat(3,_1fr)] auto-rows-max gap-4 h-fit">
        {components.map((component, index) => (
          <div
            className="h-[300px] relative"
            key={component.props?.id}
            onClick={() => {}}
          >
            <Image
              key={component.props?.id}
              fill
              objectFit="cover"
              src={component.props?.src ?? ""}
              alt="gallery-image"
            />
          </div>
        ))}
      </div>
    </div>
    {/* <Carousel
        isOpen={modal.isOpen}
        onClose={modal.close}
        defaultActiveSlide={modal.params?.index ?? 0}
        imgLinks={components.map((component) => component.props?.src ?? "")}
      /> */}
  </section>
);
export type { GallerySectionProps };

export default GallerySection;
