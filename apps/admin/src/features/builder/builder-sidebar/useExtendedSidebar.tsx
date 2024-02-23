import { useCallback } from "react";

import AnimationSubsection from "./design-section/animation-subsection/AnimationSubsection";
import BackgroundSubsection from "./design-section/background-subsection/BackgroundSubsection";
import ButtonsSubsection from "./design-section/buttons-subsection/ButtonsSubsection";
import ColorsSubsection from "./design-section/colors-subsection/ColorsSubsection";
import DesignSection from "./design-section/DesignSection";
import FooterSubsection from "./design-section/footer-subsection/FooterSubsection";
import LogoSubsection from "./design-section/logo-subsection/LogoSubsection";
import NavigationSubsection from "./design-section/navigation-subsection/NavigationSubsection";
import TypographySubsection from "./design-section/typography-subsection/TypographySubsection";
import { MainNav, DesignOptions } from "./enums";
import LanguagesSection from "./language-section/LanguagesSection";
import PagesSection from "./pages-section/PagesSection";
import ThemesSection from "./themes-section/ThemesSection";
import { SelectedEnumType } from "./types";

const useExtendedSidebar = () => {
  const renderExtendedSidebar = useCallback(
    (
      selected: SelectedEnumType | null,
      select: (selected: SelectedEnumType | null) => void
    ) => {
      switch (selected) {
        case MainNav.EDITOR:
          return null;
        case MainNav.DESIGN:
          return <DesignSection select={select} />;
        case DesignOptions.COLORS:
          return <ColorsSubsection />;
        case DesignOptions.BUTTONS:
          return <ButtonsSubsection />;
        case DesignOptions.TYPOGRAPHY:
          return <TypographySubsection />;
        case DesignOptions.BACKGROUND:
          return <BackgroundSubsection />;
        case DesignOptions.LOGO:
          return <LogoSubsection />;
        case MainNav.THEMES:
          return <ThemesSection />;
        case DesignOptions.NAVIGATION:
          return <NavigationSubsection />;
        case DesignOptions.ANIMATIONS:
          return <AnimationSubsection />;
        case DesignOptions.FOOTER:
          return <FooterSubsection />;
        case MainNav.LANGUAGES:
          return <LanguagesSection />;
        case MainNav.PAGES:
          return <PagesSection />;
        default:
          return null;
      }
    },
    []
  );

  return renderExtendedSidebar;
};

export default useExtendedSidebar;
