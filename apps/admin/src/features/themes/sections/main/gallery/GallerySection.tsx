import Image from "next/image";
import { FC } from "react";
import { Section } from "src/app/context/theme-context/types";
import { useModal } from "ui-components";

import { Carousel } from "../../../../../components/carousel/Carousel";
import ThemeSection from "../../../components/section-wrapper/ThemeSection";

type GallerySectionProps = {
  sectionData: Section;
};

const GallerySection: FC<GallerySectionProps> = ({ sectionData }) => {
  const modal = useModal<{ index: number }>();

  return (
    <div>
      <ThemeSection sectionData={sectionData}>
        <div className="w-full grid grid-cols-[repeat(3,_1fr)] auto-rows-max gap-4 h-fit">
          {sectionData.components.map((component, index) => (
            <div
              className="h-[300px] relative"
              key={component.props?.src}
              onClick={() => {
                modal.open({ index });
              }}
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
      </ThemeSection>
      <Carousel
        isOpen={modal.isOpen}
        onClose={() => modal.close()}
        defaultActiveSlide={modal.params?.index ?? 0}
        imgLinks={sectionData.components.map(
          (component) => component.props?.src ?? ""
        )}
      />
    </div>
  );
};
export type { GallerySectionProps };

export default GallerySection;
