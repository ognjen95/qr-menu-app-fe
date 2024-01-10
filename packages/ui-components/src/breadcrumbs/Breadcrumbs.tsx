import clsx from "clsx";
import Link from "next/link";

import { getTextVariant } from "./helpers";
import { Breadcrumb } from "./types";
import Text from "../text";

export type BreadcrumbsProps = {
  content: Array<Breadcrumb>;
};

const Breadcrumbs = ({ content }: BreadcrumbsProps) => (
  <div className="flex">
    {content.map(({ text, isActive, link }, index) => (
      <Link href={link} className="flex flex-row" key={index}>
        <Text
          customClasses={clsx("capitalize", isActive ? "font-semibold" : "")}
          variant={getTextVariant(content.length, index === content.length - 1)}
        >
          {decodeURI(text)}
        </Text>
        {index !== content.length - 1 && <span className="mx-2">/</span>}
      </Link>
    ))}
  </div>
);

export default Breadcrumbs;
