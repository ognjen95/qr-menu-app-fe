import Image from "next/image";
import React, { FC } from "react";
import { Button, TextVariant, Text, Chip } from "ui-components";
import { ButtonSize } from "ui-components/src/button/enums";
import { ChipVariant } from "ui-components/src/chip/enums";
import { UseModalReturn } from "ui-components/src/modal/useModal";

import BottomDrawer from "../../../components/drawers/BottomDrawer";
import { MenuSectionItem } from "../menu-overview/types";

export type MenuBottomDrawerProps = {
  modal: UseModalReturn<MenuSectionItem>;
  alergens?: string[];
  tags?: string[];
};

const MenuBottomDrawer: FC<MenuBottomDrawerProps> = ({
  modal,
  alergens = [],
  tags = [],
}) => (
  <BottomDrawer
    isOpen={modal.isOpen}
    onClose={modal.close}
    actions={
      <Button size={ButtonSize.LARGE} fullWidth>
        Order
      </Button>
    }
  >
    <div className="flex flex-col items-center justify-between space-y-5 p-5 flex-1 overflow-y-auto">
      <div className="min-h-[200px] h-[200px] max-w-[400px] relative shadow border border-gray-200 rounded-xl w-full overflow-hidden">
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
      <div className="flex flex-col w-full justify-between space-y-2">
        <div className="flex items-center justify-between space-x-3">
          <Text variant={TextVariant.HEADING5}>{modal?.params?.name}</Text>
          {modal?.params?.variants.length === 1 && (
            <Text color="text-primary-600" variant={TextVariant.HEADING6}>
              {modal?.params?.variants?.[0]?.price}$
            </Text>
          )}
        </div>
        <div className="flex flex-col">
          {(modal?.params?.variants?.length ?? 0) > 1 &&
            modal?.params?.variants?.map((variant, index) => (
              <div className="flex justify-between" key={variant.price}>
                <Text variant={TextVariant.HEADING6}>{variant.name}</Text>
                <Text color="text-primary-600" variant={TextVariant.HEADING6}>
                  {variant.price}$
                </Text>
              </div>
            ))}
        </div>
        <Text>{modal?.params?.description}</Text>
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
  </BottomDrawer>
);

export default MenuBottomDrawer;
