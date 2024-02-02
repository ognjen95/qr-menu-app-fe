import { useRouter } from "next/navigation";
import { QRCodeCanvas } from "qrcode.react";
import React from "react";
import { toast } from "react-toastify";
import {
  Button,
  FCWithChildren,
  IconType,
  Modal,
  useModal,
} from "ui-components";
import { ButtonSize, ButtonColor } from "ui-components/src/button/enums";
import { colors } from "ui-components/src/config/tailwind-config";

import TopNavbar from "../../../../components/top-navbar/TopNavbar";

export type MenuOverviewLayoutProps = {
  menuName: string;
  menuId: string;
  isCollapsed?: boolean;
  toggleCollapse?: () => void;
};

const MenuOverviewLayout: FCWithChildren<MenuOverviewLayoutProps> = ({
  children,
  menuName,
  menuId,
  isCollapsed,
  toggleCollapse,
}) => {
  const modal = useModal();

  const url = `${window?.location?.origin ?? ""}/menu/${menuId}`;

  const { push } = useRouter();

  const downloadQRCode = () => {
    const canvas = document.querySelector(
      "#qrcode-canvas"
    ) as HTMLCanvasElement;

    if (!canvas) return;

    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    const downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = "QRCode.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);

    toast.success("QR Code downloaded successfully");
  };

  return (
    <div className="flex flex-col">
      <TopNavbar
        backToUrl="/admin/menus"
        backToTitle="Menus & Restaurants"
        title={menuName}
        rightComponent={
          <div className="flex items-center space-x-2">
            <Button
              size={ButtonSize.SMALL}
              color={
                isCollapsed ? ButtonColor.PRIMARY : ButtonColor.TRANSPARENT
              }
              onClick={toggleCollapse}
              leftIcon={{
                type: IconType.UP_AND_DOWN_ARROWS,
                fill: "none",
                stroke: isCollapsed ? "white" : colors.primary[500],
              }}
            >
              {isCollapsed
                ? "Expand sections"
                : "Collapse and reorder sections"}
            </Button>
            <Button
              size={ButtonSize.SMALL}
              color={ButtonColor.OUTLINED}
              onClick={modal.open}
              leftIcon={{
                type: IconType.DASHBOARD,
                fill: "none",
                stroke: colors.grey[900],
              }}
            >
              Preview QR Code
            </Button>
          </div>
        }
      />
      {children}
      <Modal
        title="QR Code preview"
        description="Scan this QR code or click on the buton to preview your menu."
        close={modal.close}
        isOpen={modal.isOpen}
        onConfirm={() => {
          push(url);
        }}
        confirmButtonStyle={{
          text: "Preview Menu",
        }}
      >
        <div className="bg-white py-10">
          <QRCodeCanvas id="qrcode-canvas" level="H" size={300} value={url} />
        </div>
        <Button fullWidth color={ButtonColor.OUTLINED} onClick={downloadQRCode}>
          Download QR Code
        </Button>
      </Modal>
    </div>
  );
};

export default MenuOverviewLayout;
