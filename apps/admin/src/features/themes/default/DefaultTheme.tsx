"use client";

import AOS from "aos";
import Image from "next/image";
import "aos/dist/aos.css";
import { FC, ReactElement, useEffect } from "react";
import {
  ButtonsStyle,
  ColorPallete,
  DefaultThemeType,
  Section,
  Typography,
} from "src/app/context/theme-context/types";

import CuisineSectionSection from "./cuisine-info-section/CuisineInfoSection";
import Header from "./header/Header";
import IngredientsSectionSection from "./ingrediants-info-section/IngrediantsInfoSection";
import OffersSectionSection from "./offers-section/OffersSection";
import WelcomeSection from "./welcome-section/WelcomeSection";
import WorkingHoursSection from "./working-hours-section/WorkingHoursSection";

const renderThemeSection = (
  sectionData: Section,
  colorPallete: ColorPallete,
  typography: Typography,
  buttons: ButtonsStyle
): ReactElement | null => {
  if (sectionData.title === "header") {
    return (
      <Header
        sectionData={sectionData}
        colorPallete={colorPallete}
        typography={typography}
        buttons={buttons}
      />
    );
  }
  if (sectionData.title === "welcome") {
    return (
      <WelcomeSection
        sectionData={sectionData}
        colorPallete={colorPallete}
        typography={typography}
      />
    );
  }

  if (sectionData.title === "cuisine-info") {
    return (
      <CuisineSectionSection
        sectionData={sectionData}
        colorPallete={colorPallete}
        typography={typography}
        buttons={buttons}
      />
    );
  }

  if (sectionData.title === "ingredients-info") {
    return (
      <IngredientsSectionSection
        sectionData={sectionData}
        colorPallete={colorPallete}
        typography={typography}
      />
    );
  }

  if (sectionData.title === "offers") {
    return (
      <OffersSectionSection
        sectionData={sectionData}
        colorPallete={colorPallete}
        typography={typography}
      />
    );
  }

  if (sectionData.title === "working-hours") {
    return (
      <WorkingHoursSection
        sectionData={sectionData}
        colorPallete={colorPallete}
        typography={typography}
      />
    );
  }

  return null;
};

export type DefaultThemeProps = {
  theme: DefaultThemeType;
};

const DefaultTheme: FC<DefaultThemeProps> = ({ theme }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className="break-words w-full"
      style={{
        backgroundColor: theme?.background.color,
      }}
    >
      {theme?.sections.map((section) =>
        renderThemeSection(
          section,
          theme.colorPallete,
          theme.typography,
          theme.buttons
        )
      )}
      <section className="flex flex-col items-center pt-[40px] space-y-10">
        <Image
          // TODO: This logo should be on theme level
          src="https://static.cdn-upm.com/static/themes/ef8ba596-4579-11ed-8bca-525400080621/assets-4/restaurantlogo.png?v=8"
          width={160}
          alt="Image"
          height={160}
        />
      </section>
      <div className="mt-[150px]" />
    </div>
  );
};

export default DefaultTheme;
