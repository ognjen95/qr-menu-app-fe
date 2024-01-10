import { useMemo, useState, useRef, useEffect, FC } from "react";

import { menuDummyData } from "./menu-section/constants";
import MenuFeatureLayout from "./MenuFeatureLayout";

const MenuFeature: FC = () => {
  const chips = useMemo(
    () => menuDummyData.map((section) => section.section),
    []
  );

  const [selectedChip, setSelectedChip] = useState(chips?.[0]);

  const ref = useRef<HTMLDivElement>(null);

  const onChipClick = (chip: string) => {
    setSelectedChip(chip);
  };

  const isTopOfPage = window.scrollY === 0;

  useEffect(() => {
    if (selectedChip.includes("#SCROLLED_TO")) return;

    if (selectedChip === chips[0] && isTopOfPage) return;

    ref?.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [selectedChip, chips, isTopOfPage]);

  return (
    <MenuFeatureLayout
      onChipClick={onChipClick}
      chips={chips}
      selectedChip={selectedChip}
      setSelectedChip={(chip) => setSelectedChip(`${chip}#SCROLLED_TO`)}
      isTopOfPage={isTopOfPage}
      ref={ref}
    />
  );
};

export default MenuFeature;
