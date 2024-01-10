import Image from "next/image";
import React, { FC } from "react";
import { Button, TextVariant, Text, Chip } from "ui-components";
import { ChipVariant } from "ui-components/src/chip/enums";
import { UseModalReturn } from "ui-components/src/modal/useModal";

import { MenuItem } from "./menu-section/types";
import BottomDrawer from "../../components/bottom-drawer/BottomDrawer";

export type MenuBottomDrawerProps = {
  modal: UseModalReturn<MenuItem>;
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
    actions={<Button>Order</Button>}
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
          src={modal?.params?.image ?? ""}
        />
      </div>
      <div className="flex flex-col w-full justify-between space-y-3">
        <div className="flex items-center justify-between space-x-3">
          <Text variant={TextVariant.HEADING6}>{modal?.params?.name}</Text>
          <Text color="text-primary-600" variant={TextVariant.HEADING6}>
            {modal?.params?.price}$
          </Text>
        </div>
        <Text>{modal?.params?.description}</Text>
      </div>
      <div className="flex flex-col w-full justify-between space-y-3">
        <Text color="font-semibold">Alergens</Text>
        <div className="flex items-center flex-wrap gap-1">
          {alergens.map((alergen) => (
            <Chip variant={ChipVariant.LIGHT} key={alergen} text={alergen} />
          ))}
        </div>
      </div>
      <div className="flex flex-col w-full justify-between space-y-3">
        <Text color="font-semibold">Tags</Text>
        <div className="flex items-center flex-wrap gap-1">
          {tags.map((alergen) => (
            <Chip variant={ChipVariant.OUTLINED} key={alergen} text={alergen} />
          ))}
        </div>
      </div>
    </div>
  </BottomDrawer>
);

export default MenuBottomDrawer;
