import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { Text, TextVariant } from "ui-components";

import {
  ColorPallete,
  Typography,
} from "../../../../../app/context/theme-context/types";
import { PAGES } from "../../../pages/constants";

type FooterProps = {
  colorPallete: ColorPallete;
  typography: Typography;
  logo: string;
};

const Footer1: FC<FooterProps> = ({ logo, colorPallete, typography }) => (
  <>
    <footer>
      <div className="grid grid-cols-4 py-[40px] p-10">
        <div className="col-span-1 flex">
          <Image
            src={
              logo ||
              "https://static.cdn-upm.com/static/themes/ef8ba596-4579-11ed-8bca-525400080621/assets-4/restaurantlogo.png?v=8"
            }
            width={160}
            alt="Image"
            height={160}
          />
        </div>
        <div className="col-span-1 flex flex-col gap-3 flex">
          {PAGES.filter((page) => page.isVisible).map((page) => (
            <Link
              className="hover:underline"
              key={page.name}
              href={page.url}
              style={{
                fontFamily: typography.text.fontFamily,
                color: colorPallete.tertiary,
              }}
            >
              {page.name}
            </Link>
          ))}
        </div>
        <div className="col-span-1 flex flex-col gap-3 flex">
          <Link
            className="hover:underline"
            style={{
              color: colorPallete.tertiary,
              fontFamily: typography.text.fontFamily,
            }}
            href=""
          >
            Facebook
          </Link>
          <Link
            className="hover:underline"
            style={{
              color: colorPallete.tertiary,
              fontFamily: typography.text.fontFamily,
            }}
            href=""
          >
            Instagram
          </Link>
          <Link
            className="hover:underline"
            style={{
              color: colorPallete.tertiary,
              fontFamily: typography.text.fontFamily,
            }}
            href=""
          >
            Twitter
          </Link>
          <Link
            className="hover:underline"
            style={{
              color: colorPallete.tertiary,
              fontFamily: typography.text.fontFamily,
            }}
            href=""
          >
            LinkedIn
          </Link>
          <Link
            className="hover:underline"
            style={{
              color: colorPallete.tertiary,
              fontFamily: typography.text.fontFamily,
            }}
            href=""
          >
            Youtube
          </Link>
        </div>
        <div className="col-span-1 flex flex-col gap-3 flex">
          <Text variant={TextVariant.HEADING6}>Contact</Text>
          <Text>Belevar Kralja Aleksandra, Beograd</Text>
          <Text>info@restoran.com</Text>
          <Text>+381 60 000 444</Text>
        </div>
      </div>
    </footer>
    <div className="text-center bg-primary-500 group">
      <Text color="text-white">
        © {new Date().getFullYear()} Powered by{" "}
        <Link href="/" className="font-bold group-hover:underline">
          QR Menu
        </Link>
      </Text>
    </div>
  </>
);

export default Footer1;
