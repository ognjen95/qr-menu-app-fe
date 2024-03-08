import Image from "next/image";
import React, { FC } from "react";
import { TextVariant, Text, Chip } from "ui-components";
import { ChipVariant } from "ui-components/src/chip/enums";
import { UseModalReturn } from "ui-components/src/modal/useModal";

import { DefaultThemeType } from "../../../app/context/theme-context/types";
import BottomDrawer from "../../../components/drawers/BottomDrawer";
import RightDrawer from "../../../components/drawers/RightDrawer";
import { ComponentType } from "../../../graphql-api";
import useBreakpoints from "../../../hooks/use-breakpoints";
import ThemeButton from "../../themes/components/buttons/ThemeButton";
import ThemeTypography from "../../themes/components/typography/ThemeTypography";
import { MenuSectionItem } from "../menu-overview/types";

export type MenuBottomDrawerProps = {
  modal: UseModalReturn<MenuSectionItem>;
  alergens?: string[];
  tags?: string[];
  colorPallete?: DefaultThemeType["colorPallete"];
  buttons?: DefaultThemeType["buttons"];
};

const MenuDrawerContent = ({
  alergens = [],
  tags = [],
  modal,
  colorPallete,
  buttons,
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
    <div className="flex flex-col w-full justify-between space-y-2 p-5">
      <div className="flex items-center justify-between space-x-3">
        <ThemeTypography
          type={ComponentType.H4}
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
                type={ComponentType.H5}
                props={{
                  value: variant.name,
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

const MenuBottomDrawer: FC<MenuBottomDrawerProps> = ({
  modal,
  alergens = [],
  tags = [],
  colorPallete,
  buttons,
}) => {
  const isSmallScreen = useBreakpoints("sm");

  if (!isSmallScreen) {
    return (
      <RightDrawer
        backgroundColor={colorPallete?.surface}
        isOpen={modal.isOpen}
        onClose={modal.close}
        actions={
          <ThemeButton
            style={{
              width: "100%",
            }}
            props={{
              value: "Order",
            }}
          />
        }
      >
        <MenuDrawerContent
          colorPallete={colorPallete}
          alergens={alergens}
          tags={tags}
          modal={modal}
        />
      </RightDrawer>
    );
  }
  return (
    <BottomDrawer
      hideHandle
      backgroundColor={colorPallete?.surface}
      isOpen={modal.isOpen}
      onClose={modal.close}
      actions={
        <ThemeButton
          style={{
            width: "100%",
          }}
          props={{
            value: "Order",
          }}
        />
      }
    >
      <MenuDrawerContent
        colorPallete={colorPallete}
        alergens={alergens}
        tags={tags}
        modal={modal}
      />
    </BottomDrawer>
  );
};

export default MenuBottomDrawer;
