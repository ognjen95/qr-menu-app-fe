"use client";

import { createColumnHelper } from "@tanstack/react-table";
import Image from "next/image";
import { Button, IconType, Paper, Text, TextVariant } from "ui-components";
import { ButtonColor, ButtonSize } from "ui-components/src/button/enums";
import { colors } from "ui-components/src/config/tailwind-config";

import SimpleTable from "../../../../components/tables/SimpleTable";
import TopNavbar from "../../../../components/top-navbar/TopNavbar";
import { menuDummyData } from "../../../../features/menu/menu-section/constants";
import { MenuItem } from "../../../../features/menu/menu-section/types";

const columnHelper = createColumnHelper<MenuItem>();

const colummns = [
  // columnHelper.accessor("id", {
  //   cell: () => <div />,
  //   header: () => <div />,
  //   size: 0,
  // }),
  columnHelper.accessor("name", {
    cell: (cell) => <Text>{cell.getValue()}</Text>,
    header: () => "Name",
    size: 0,
  }),
  columnHelper.accessor("description", {
    cell: (cell) => <Text>{cell.getValue()}</Text>,
    header: () => "Description",
    size: 0,
  }),
  columnHelper.accessor("price", {
    cell: (cell) => <Text>{cell.getValue()}$</Text>,
    header: () => "Price",
    size: 0,
  }),
  columnHelper.accessor("image", {
    cell: (cell) => (
      <Image alt="image" src={cell.getValue()} width={50} height={50} />
    ),
    header: () => "Image",
    size: 0,
  }),
];

const MenuPage = () => (
  <div className="flex flex-col">
    <TopNavbar
      backToUrl="/admin/menus"
      backToTitle="Menus & Restaurants"
      title="Moj Meni # 1"
      rightComponent={
        <div className="flex items-center space-x-2">
          <Button
            size={ButtonSize.SMALL}
            color={ButtonColor.OUTLINED}
            leftIcon={{
              type: IconType.DASHBOARD,
              fill: "none",
              stroke: colors.grey[900],
            }}
          >
            Preview QR Code
          </Button>
          <Button
            size={ButtonSize.SMALL}
            color={ButtonColor.OUTLINED}
            leftIcon={{
              type: IconType.HIDE_EYE,
              fill: "none",
              stroke: colors.primary[500],
            }}
          >
            Preview Menu
          </Button>
        </div>
      }
    />

    <div className="p-5 flex flex-col h-full space-y-5">
      {[1, 2, 3, 4].map((item) => (
        <div className="flex flex-col h-full space-y-5" key={item}>
          <Paper>
            <div className="flex items-start justify-between">
              <div className="flex flex-col h-full mb-5">
                <Text variant={TextVariant.HEADING5}>Apetizers</Text>
                <Text>Try some of most delicious apetizers in town</Text>
              </div>
              <Button
                size={ButtonSize.SMALL}
                leftIcon={{
                  type: IconType.PLUS,
                }}
              >
                Add Item
              </Button>
            </div>
            <SimpleTable columns={colummns} data={menuDummyData[0].items} />
            <div className="flex items-center justify-start">
              <Button
                color={ButtonColor.TRANSPARENT}
                size={ButtonSize.SMALL}
                leftIcon={{
                  type: IconType.PLUS,
                  stroke: colors.gray[600],
                }}
              >
                Add Item
              </Button>
            </div>
          </Paper>
          <div className="flex items-center justify-center">
            <Button
              color={ButtonColor.GREY}
              size={ButtonSize.SMALL}
              leftIcon={{
                type: IconType.PLUS,
                stroke: colors.gray[500],
              }}
            >
              Add New Section
            </Button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default MenuPage;
