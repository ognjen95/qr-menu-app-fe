"use client";

import Image from "next/image";
import React, { CSSProperties } from "react";

import {
  ThemeSectionEntity,
  useFindThemeByIdQuery,
} from "../../../graphql-api";

// const NavigationComponent1 = () => <div>NavigationComponent1</div>;

// const Header1 = ({ sectionTheme }: { sectionTheme: ThemeSectionEntity }) => (
//   <div className="flex justify-between min-h-[500px]">
//     <div className="w-1/3 flex flex-col space-y-5 justify-center">
//       <h1 style={sectionTheme.components?.[0].style as CSSProperties}>
//         {sectionTheme.components?.[0].props?.value}
//       </h1>
//       <p style={sectionTheme.components?.[1].style as CSSProperties}>
//         {sectionTheme.components?.[1].props?.value}
//       </p>
//     </div>
//     <div className="w-1/2 relative">
//       <Image src="/images/bar.jpg" fill alt="alt" />
//     </div>
//   </div>
// );

const Section1 = ({ sectionTheme }: { sectionTheme: ThemeSectionEntity }) => {
  const { data } = useFindThemeByIdQuery({
    variables: { findThemeByIdId: "65c40786b9624ccc5c6558b0" },
  });
  const theme = data?.findThemeById;

  const section = data?.findThemeById?.sections[0].style;
  const collorPallete = theme?.colorPallete;

  return (
    <div className="p-10">
      <div className="flex justify-between min-h-[500px]">
        <div className="w-1/3 flex flex-col space-y-5 justify-center">
          <h1 style={sectionTheme.components?.[0].style as CSSProperties}>
            {sectionTheme.components?.[0].props?.value}
          </h1>
          <p
            style={
              {
                // color: theme?.typography.text.color,
              }
            }
          >
            {sectionTheme.components?.[1].props?.value}
          </p>
        </div>
        <div className="w-1/2 relative">
          <Image src="/images/bar.jpg" fill alt="alt" />
        </div>
      </div>
    </div>
  );
};

const Page = () => {
  const { data } = useFindThemeByIdQuery({
    variables: { findThemeByIdId: "65c40786b9624ccc5c6558b0" },
  });

  const section = data?.findThemeById?.sections[0];

  if (!section) return <div>Section not found</div>;

  return (
    <div>
      <Section1 sectionTheme={section} />
    </div>
  );
};

export default Page;
