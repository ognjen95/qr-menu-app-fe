import Image from "next/image";
import React, { FC } from "react";

import { Section } from "../../../../app/context/theme-context/types";
import { SectionConfigMapper } from "../types";

export type SectionListPreviewProps = {
  onSectionSelect: (config: Section) => void;
  sectionList: SectionConfigMapper[];
};

const SectionListPreview: FC<SectionListPreviewProps> = ({
  onSectionSelect,
  sectionList,
}) => (
  <div className="grid grid-cols-3 gap-5 p-5">
    {sectionList.map((section) => (
      <div
        onClick={() => onSectionSelect(section.config)}
        key={section.config.title}
        className="col-span-1 h-[300px] bg-gray-200 mb-2 relative shadow overflow-hidden rounded-xl group cursor-pointer"
      >
        <Image
          src={section.image}
          alt={section.config.title}
          layout="fill"
          objectFit="cover"
          className="group-hover:scale-105 transition-transform duration-300 ease-in-out"
        />
      </div>
    ))}
  </div>
);

export default SectionListPreview;
