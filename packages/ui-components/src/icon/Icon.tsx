import clsx from "clsx";
import { forwardRef, memo, SyntheticEvent, useState } from "react";

import { SIZE_CLASS_MAPPER, SIZE_REGISTER } from "./constants";
import { IconSize, IconType } from "./enums";
import Slideshow from "./Slideshow";
import AddPlusCircle from "./variants/AddPlusCircle";
import ArrowLeftLg from "./variants/ArrowLeftLg";
import ArrowRight from "./variants/ArrowRight";
import CaretDown from "./variants/CaretDown";
import Check from "./variants/Check";
import ChevronLeft from "./variants/ChevronLeft";
import ChevronRight from "./variants/ChevronRight";
import CircleCheck from "./variants/CircleCheck";
import CircleCheckmark from "./variants/CircleCheckmark";
import CircleWarning from "./variants/CircleWarning";
import Close from "./variants/Close";
import Coaches from "./variants/Coaches";
import Content from "./variants/Content";
import Copy from "./variants/Copy";
import Customers from "./variants/Customers";
import DailyPlan from "./variants/DailyPlan";
import Dashboard from "./variants/Dashboard";
import EditPencil1 from "./variants/EditPencil1";
import Exit from "./variants/Exit";
import FileAdd from "./variants/FileAdd";
import FileDocument from "./variants/FileDocument";
import FilePlay from "./variants/FilePlay";
import Filter from "./variants/Filter";
import FolderAdd from "./variants/FolderAdd";
import FolderColored from "./variants/FolderColored";
import FolderDocument from "./variants/FolderDocument";
import Gender from "./variants/Gender";
import Hamburger from "./variants/Hamburger";
import Heart from "./variants/Heart";
import Height from "./variants/Height";
import HideEye from "./variants/HideEye";
import HideEyeRed from "./variants/HideEyeRed";
import Image1 from "./variants/Image1";
import Info from "./variants/Info";
import ListAdd from "./variants/ListAdd";
import LogOut from "./variants/LogOut";
import MapPin from "./variants/MapPin";
import MonitorPlay from "./variants/MonitorPlay";
import MoreVertical from "./variants/MoreVertical";
import Notification from "./variants/Notification";
import PdfFile from "./variants/PdfFile";
import PlayVideo from "./variants/PlayVideo";
import Plus from "./variants/Plus";
import Redo from "./variants/Redo";
import RemoveMinusCircle from "./variants/RemoveMinusCircle";
import Search from "./variants/Search";
import SquareWarning from "./variants/SquareWarning";
import Template from "./variants/Template";
import TrashFull from "./variants/TrashFull";
import TriangleWarning from "./variants/TriangleWarning";
import TwoUsersOutlined from "./variants/TwoUsersOutlined";
import UpAndDownArrows from "./variants/UpAndDownArrows";
import User03 from "./variants/User03";
import UserCardId from "./variants/UserCardId";
import UserHeight from "./variants/UserHeight";
import Users from "./variants/Users";
import UserVoice from "./variants/UserVoice";
import UserWeight from "./variants/UserWeight";
import Weight from "./variants/Weight";

export const ICON_REGISTER = {
  [IconType.HIDE_EYE]: <HideEye />,
  [IconType.HIDE_EYE_RED]: <HideEyeRed />,
  [IconType.CIRCLE_CHECK_MARK]: <CircleCheckmark />,
  [IconType.CIRCLE_WARNING]: <CircleWarning />,
  [IconType.SQUARE_WARNING]: <SquareWarning />,
  [IconType.CARET_DOWN]: <CaretDown />,
  [IconType.DASHBOARD]: <Dashboard />,
  [IconType.CUSTOMERS]: <Customers />,
  [IconType.CONTENT]: <Content />,
  [IconType.USERS]: <Users />,
  [IconType.COACHES]: <Coaches />,
  [IconType.NOTIFICATION]: <Notification />,
  [IconType.LOGOUT]: <LogOut />,
  [IconType.FILTER]: <Filter />,
  [IconType.CHECK]: <Check />,
  [IconType.CIRCLE_CHECK]: <CircleCheck />,
  [IconType.TRIANGLE_WARNING]: <TriangleWarning />,
  [IconType.INFO]: <Info />,
  [IconType.CLOSE]: <Close />,
  [IconType.ARROW_RIGHT]: <ArrowRight />,
  [IconType.TWO_USERS_OUTLINED]: <TwoUsersOutlined />,
  [IconType.USER_VOICE]: <UserVoice />,
  [IconType.FILE_DOCUMENT]: <FileDocument />,
  [IconType.MONITOR_PLAY]: <MonitorPlay />,
  [IconType.HAMBURGER]: <Hamburger />,
  [IconType.USER_03]: <User03 />,
  [IconType.GENDER]: <Gender />,
  [IconType.HEART]: <Heart />,
  [IconType.WEIGHT]: <Weight />,
  [IconType.HEIGHT]: <Height />,
  [IconType.TRASH_FULL]: <TrashFull />,
  [IconType.FILE_PLAY]: <FilePlay />,
  [IconType.IMAGE_1]: <Image1 />,
  [IconType.PLAY_VIDEO]: <PlayVideo />,
  [IconType.PLUS]: <Plus />,
  [IconType.MAP_PIN]: <MapPin />,
  [IconType.CHEVRON_RIGHT]: <ChevronRight />,
  [IconType.CHEVRON_LEFT]: <ChevronLeft />,
  [IconType.SEARCH]: <Search />,
  [IconType.UP_AND_DOWN_ARROWS]: <UpAndDownArrows />,
  [IconType.ADD_PLUS_CIRCLE]: <AddPlusCircle />,
  [IconType.REMOVE_MINUS_CIRCLE]: <RemoveMinusCircle />,
  [IconType.FILE_ADD]: <FileAdd />,
  [IconType.FOLDER_ADD]: <FolderAdd />,
  [IconType.FOLDER_DOCUMENT]: <FolderDocument />,
  [IconType.ARROW_LEFT_LG]: <ArrowLeftLg />,
  [IconType.FOLDER_COLORED]: <FolderColored />,
  [IconType.MORE_VERTICAL]: <MoreVertical />,
  [IconType.EXIT]: <Exit />,
  [IconType.TEMPLATE]: <Template />,
  [IconType.EDIT_PENCIL_1]: <EditPencil1 />,
  [IconType.PDF_FILE]: <PdfFile />,
  [IconType.SLIDE_SHOW]: <Slideshow />,
  [IconType.USER_CARD_ID]: <UserCardId />,
  [IconType.REDO]: <Redo />,
  [IconType.COPY]: <Copy />,
  [IconType.LIST_ADD]: <ListAdd />,
  [IconType.DAILY_PLAN]: <DailyPlan />,
  [IconType.USER_HEIGHT]: <UserHeight />,
  [IconType.USER_WEIGHT]: <UserWeight />,
};

export type IconProps = {
  onClick?: (event: SyntheticEvent<HTMLDivElement>) => void;
  type: IconType;
  size?: IconSize;
  hoverColor?: string;
  fill?: string;
  stroke?: string;
};

const Icon = forwardRef<HTMLDivElement, IconProps>(
  (
    {
      type,
      size = IconSize.LARGE,
      onClick,
      hoverColor,
      fill,
      stroke = "white",
    },
    ref
  ) => {
    const iconSize = SIZE_REGISTER[size];
    const sizeClasses = SIZE_CLASS_MAPPER[size];
    const [isHovered, setIsHovered] = useState<boolean>(false);

    return (
      <div
        ref={ref}
        onClick={onClick}
        className={clsx(sizeClasses, {
          "cursor-pointer": !!onClick,
        })}
      >
        <svg
          fill={isHovered && hoverColor ? hoverColor : fill}
          stroke={stroke}
          viewBox="0 0 24 24"
          {...iconSize}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {ICON_REGISTER[type]}
        </svg>
      </div>
    );
  }
);

export default memo(Icon);
