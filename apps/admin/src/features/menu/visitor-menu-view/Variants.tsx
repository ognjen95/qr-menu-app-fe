import { useEffect, useState } from "react";
import CheckBox from "ui-components/src/checkbox";

import { ComponentType } from "../../../app/context/theme-context/enums";
import { ColorPallete } from "../../../app/context/theme-context/types";
import ThemeTypography from "../../themes/components/typography/ThemeTypography";
import { ItemVariant } from "../menu-overview/types";

const Variants = ({
  variants,
  colorPallete,
  onChange,
}: {
  variants: ItemVariant[];
  colorPallete: ColorPallete;
  onChange?: (variant: string) => void;
}) => {
  const [selectedVariant, setSelectedVariant] = useState("");

  useEffect(() => {
    if (selectedVariant) return;

    setSelectedVariant(variants[0]?.name ?? "");
    onChange?.(variants[0]?.name ?? "");
  }, [onChange, selectedVariant, variants]);

  return variants?.map((variant) => (
    <div
      className="flex justify-between cursor-pointer"
      key={`${variant.name ?? ""}-${variant.price ?? ""}`}
      onClick={() => {
        setSelectedVariant(variant.name ?? "");
        onChange?.(variant.name ?? "");
      }}
    >
      <div className="flex items-center space-x-2">
        <CheckBox
          checked={selectedVariant === variant.name}
          onChange={() => {}}
        />
        <ThemeTypography
          type={ComponentType.H6}
          props={{
            value: variant.name,
          }}
        />
      </div>
      <ThemeTypography
        type={ComponentType.H5}
        style={{
          color: colorPallete?.primary,
        }}
        props={{
          value: `${variant.price.toString()}$`,
        }}
      />
    </div>
  ));
};

export default Variants;
