import BackgroundSubsection from "./design-section/background-subsection/BackgroundSubsection";
import ButtonsSubsection from "./design-section/buttons-subsection/ButtonsSubsection";
import ColorsSubsection from "./design-section/colors-subsection/ColorsSubsection";
import DesignSection from "./design-section/DesignSection";
import TypographySubsection from "./design-section/typography-subsection/TypographySubsection";
import { MainNav, DesignOptions } from "./enums";
import { SelectedEnumType } from "./types";

export const renderExtendedSidebar = (
  selected: SelectedEnumType | null,
  select: (selected: SelectedEnumType) => void
) => {
  switch (selected) {
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
    default:
      return null;
  }
};
