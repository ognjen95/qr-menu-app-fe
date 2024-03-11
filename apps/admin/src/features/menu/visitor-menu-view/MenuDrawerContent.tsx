import Image from "next/image";
import { Chip, Text } from "ui-components";
import { ChipVariant } from "ui-components/src/chip/enums";

import { MenuBottomDrawerProps } from "./types";
import { ComponentType } from "../../../graphql-api";
import ThemeTypography from "../../themes/components/typography/ThemeTypography";

const MenuDrawerContent = ({
  alergens = [],
  tags = [],
  modal,
  colorPallete,
}: MenuBottomDrawerProps) => (
  <div
    className="flex flex-col items-center space-y-5 flex-1 overflow-y-auto"
    style={{
      backgroundColor: colorPallete?.surface,
    }}
  >
    <div className="min-h-[300px] h-[300px] shadow max-w-[500px] relative shadow rounded-b-2xl  w-full overflow-hidden">
      <Image
        alt="Menu item"
        quality={100}
        priority
        objectFit="cover"
        objectPosition="center"
        fill
        src={modal?.params?.image || "/images/no-content.png"}
      />
    </div>
    <div className="flex flex-col w-full justify-between space-y-2 px-5">
      <div className="flex items-center justify-between space-x-3">
        <ThemeTypography
          type={ComponentType.H4}
          style={{
            color: colorPallete?.text,
          }}
          props={{
            value: modal?.params?.name,
          }}
        />
        {modal?.params?.variants.length === 1 && (
          <ThemeTypography
            type={ComponentType.H4}
            props={{
              value: `${
                modal?.params?.variants?.[0]?.price.toString() ?? ""
              } $`,
            }}
          />
        )}
      </div>
      <div className="flex flex-col py-3">
        {(modal?.params?.variants?.length ?? 0) > 1 &&
          modal?.params?.variants?.map((variant, index) => (
            <div className="flex justify-between" key={variant.price}>
              <ThemeTypography
                type={ComponentType.H6}
                props={{
                  value: `${index + 1}. ${variant.name ?? ""}`,
                }}
              />
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
          ))}
      </div>
      <ThemeTypography
        type={ComponentType.P}
        style={{
          fontWeight: "400",
          opacity: "0.9",
          fontSize: "16px",
        }}
        props={{
          value: modal?.params?.description,
        }}
      />
    </div>
    {!!alergens.length && (
      <div className="flex flex-col w-full justify-between space-y-3">
        <Text color="font-semibold">Alergens</Text>
        <div className="flex items-center flex-wrap gap-1">
          {alergens.map((alergen) => (
            <Chip variant={ChipVariant.LIGHT} key={alergen} text={alergen} />
          ))}
        </div>
      </div>
    )}
    {!!tags.length && (
      <div className="flex flex-col w-full justify-between space-y-3">
        <Text color="font-semibold">Tags</Text>
        <div className="flex items-center flex-wrap gap-1">
          {tags.map((tag) => (
            <Chip variant={ChipVariant.OUTLINED} key={tag} text={tag} />
          ))}
        </div>
      </div>
    )}
  </div>
);

export default MenuDrawerContent;
