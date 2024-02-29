import Image from "next/image";
import { FC } from "react";

import { SectionComponent } from "../../../../app/context/theme-context/types";

const ThemeImage: FC<{ component: SectionComponent; className?: string }> = ({
  component,
  className,
}) => {
  const height = component?.style?.height;
  const width = component?.style?.width;

  const heightWithoutPx = +(height?.toString().split("px")[0] ?? 400);
  const widthWithoutPx = +(width?.toString().split("px")[0] ?? 400);

  const componentSrc = component?.props?.src;
  const currentlySelectedFileImage = component?.props?.file;
  const src = currentlySelectedFileImage
    ? URL.createObjectURL(currentlySelectedFileImage)
    : componentSrc;

  return (
    <Image
      className={className}
      src={src || "/images/no-content.png"}
      style={{
        width,
        height,
      }}
      width={widthWithoutPx}
      height={heightWithoutPx}
      alt={component?.props?.alt || ""}
    />
  );
};

export default ThemeImage;
