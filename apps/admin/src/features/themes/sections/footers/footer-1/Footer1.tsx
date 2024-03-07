import capitalize from "lodash.capitalize";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { Text } from "ui-components";

import { ComponentType } from "../../../../../app/context/theme-context/enums";
import {
  ColorPallete,
  Typography,
  WebsitePage,
} from "../../../../../app/context/theme-context/types";
import ThemeTypography from "../../../components/typography/ThemeTypography";

type FooterProps = {
  colorPallete: ColorPallete;
  typography: Typography;
  logo: string;
  activePages: WebsitePage[];
};

const Footer1: FC<FooterProps> = ({
  logo,
  colorPallete,
  typography,
  activePages,
}) => (
  <>
    <footer>
      <div className="grid grid-cols-4 py-[40px] p-10">
        <div className="col-span-1 flex">
          <Image
            src={logo || "/menu-logo.png"}
            width={160}
            alt="Image"
            height={160}
          />
        </div>
        <div className="col-span-1 flex flex-col gap-3 flex">
          {activePages.map((page) => (
            <Link
              className="hover:underline"
              key={page}
              href={`?page=${page}`}
              style={{
                fontFamily: typography.text.fontFamily,
                color: colorPallete.tertiary,
              }}
            >
              {capitalize(page)}
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
          <ThemeTypography
            type={ComponentType.H5}
            props={{ value: "Contact" }}
          />
          <ThemeTypography
            type={ComponentType.P}
            props={{ value: "Belevar Kralja Aleksandra, Beograd" }}
          />
          <ThemeTypography
            type={ComponentType.P}
            props={{ value: "info@restoran.com" }}
          />
          <ThemeTypography
            type={ComponentType.P}
            props={{ value: "+381 60 000 444" }}
          />
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
