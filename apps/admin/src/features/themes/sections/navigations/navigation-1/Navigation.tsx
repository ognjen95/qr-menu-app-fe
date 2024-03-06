import clsx from "clsx";
import capitalize from "lodash.capitalize";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import {
  ButtonsStyle,
  ColorPallete,
  NavigationModel,
  Section,
  Typography,
} from "src/app/context/theme-context/types";

import { NavigationLayout } from "../../../../../app/context/theme-context/enums";
import ThemeButton from "../../../components/buttons/ThemeButton";

type NavigationProps = {
  sectionData: Section;
  colorPallete: ColorPallete;
  typography: Typography;
  buttons: ButtonsStyle;
  logo: string;
  navigation: NavigationModel;
  activePages: string[];
};

const Navigation: FC<NavigationProps> = ({
  sectionData,
  colorPallete,
  buttons,
  typography,
  logo,
  navigation,
  activePages,
}) => (
  <nav className="flex justify-center">
    <div className="flex w-full max-w-[1170px] justify-between items-center p-4">
      <Image
        src={
          logo ||
          "https://static.cdn-upm.com/static/themes/ef8ba596-4579-11ed-8bca-525400080621/assets-4/restaurantlogo.png?v=8"
        }
        width={100}
        alt="logo"
        height={100}
      />
      <div
        className={clsx("flex space-x-10 flex-grow px-10", {
          "justify-center":
            navigation.layout === NavigationLayout.CENTER || !navigation.layout,
          "justify-end": navigation.layout === NavigationLayout.RIGHT,
          "justify-start": navigation.layout === NavigationLayout.LEFT,
        })}
      >
        {activePages.map((page) => (
          <Link
            className="hover:underline"
            key={page}
            href={`?page=${page}`}
            style={{
              fontFamily: typography.text.fontFamily,
              color: colorPallete.text,
            }}
          >
            {capitalize(page)}
          </Link>
        ))}
      </div>
      <ThemeButton
        style={{
          color: "white",
        }}
        props={{ value: "Order online" }}
      />
    </div>
  </nav>
);

export type { NavigationProps };

export default Navigation;
