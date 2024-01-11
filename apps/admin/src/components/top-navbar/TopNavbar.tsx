import Link from "next/link";
import React, { FC } from "react";
import {
  Paper,
  Text,
  PaperRounded,
  TextVariant,
  IconButton,
  IconType,
} from "ui-components";

export type TopNavbarProps = {
  backToTitle?: string;
  backToUrl?: string;
  title: string;
  rightComponent?: React.ReactNode;
};

const TopNavbar: FC<TopNavbarProps> = ({
  backToUrl,
  backToTitle,
  title,
  rightComponent,
}) => (
  <Paper rounded={PaperRounded.NONE} noPadding>
    <div className="grid grid-cols-3 px-5 py-2 h-14">
      <div>
        {backToTitle && backToUrl && (
          <div className="flex items-center">
            <Link
              href={backToUrl ?? ""}
              className="flex items-center space-x-1"
            >
              <IconButton
                iconProps={{
                  type: IconType.ARROW_LEFT_LG,
                }}
              />
              <Text variant={TextVariant.BODY2} customClasses="font-semibold">
                {backToTitle}
              </Text>
            </Link>
          </div>
        )}
      </div>
      <div className="flex items-center justify-center">
        <Text variant={TextVariant.HEADING6}>{title}</Text>
      </div>
      <div className="flex items-center justify-end">{rightComponent}</div>
    </div>
  </Paper>
);

export default TopNavbar;
