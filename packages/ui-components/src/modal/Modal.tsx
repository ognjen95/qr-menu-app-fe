import clsx from "clsx";
import { useEffect, useState } from "react";
import { Portal } from "react-portal";

import { ModalButton, ModalIcon } from "./types";
import Button from "../button";
import { ButtonColor, ButtonSize } from "../button/enums";
import { FCWithChildren } from "../common/types";
import { colors } from "../config/tailwind-config";
import { IconSize, IconType } from "../icon/enums";
import Icon from "../icon/Icon";
import IconButton from "../icon-button";
import Text from "../text";
import { TextVariant } from "../text/enums";

export type ModalProps = {
  isOpen: boolean;
  title: string;
  description?: string;
  close: () => void;
  onConfirm?: () => void;
  closeOnOverlayClick?: boolean;
  confirmButtonStyle?: ModalButton;
  closeButtonStyle?: ModalButton;
  hideCloseButton?: boolean;
  hideConfirmButton?: boolean;
  modalIcon?: ModalIcon;
  boldedEndOfDescription?: string;
  loading?: boolean;
  formName?: string;
  fullWidth?: boolean;
  disableConfirmButton?: boolean;
};

const Modal: FCWithChildren<ModalProps> = ({
  isOpen = false,
  title,
  description,
  children,
  close,
  onConfirm,
  hideCloseButton = true,
  closeOnOverlayClick = false,
  confirmButtonStyle,
  closeButtonStyle,
  loading,
  modalIcon,
  formName,
  boldedEndOfDescription,
  fullWidth = false,
  disableConfirmButton,
}) => {
  const [ref, setRef] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const body = document.querySelector("body");
    setRef(body);

    return () => {
      setRef(null);
    };
  }, []);

  return (
    <div>
      {isOpen && (
        <Portal node={ref}>
          <div
            {...(closeOnOverlayClick && { onClick: close })}
            className="absolute w-screen h-screen top-0 flex flex-col items-center justify-center z-50 bg-white/90 backdrop-blur"
          >
            <div className="fixed top-10 right-10">
              <IconButton
                iconProps={{
                  onClick: close,
                  type: IconType.CLOSE,
                  size: IconSize.EXTRA_LARGE,
                  stroke: colors.gray[500],
                  fill: colors.primary[500],
                }}
              />
            </div>
            <div
              className={clsx(
                "max-h-[85vh] w-[90vw] flex flex-col space-y-2 items-center justify-center",
                {
                  "max-w-[450px]": !fullWidth,
                  "m-auto": fullWidth,
                }
              )}
            >
              {modalIcon && (
                <div className="w-full flex justify-center mb-1">
                  <Icon
                    type={modalIcon.type}
                    fill={modalIcon?.fill}
                    stroke={modalIcon?.stroke}
                    size={modalIcon?.size ?? IconSize.XXL}
                  />
                </div>
              )}
              <div className="text-center max-w-[500px] py-3">
                <Text variant={TextVariant.HEADING5}>{title}</Text>
              </div>
              <div className="text-center flex items-center max-w-[500px] space-x-1">
                <Text variant={TextVariant.BODY2}>{description}</Text>
                {boldedEndOfDescription && (
                  <Text customClasses="font-bold">
                    {boldedEndOfDescription}
                  </Text>
                )}
              </div>
              {children}
              {(onConfirm || !hideCloseButton || formName) && (
                <div className="pt-3 flex flex-col space-y-2 justify-end w-full max-w-[450px]">
                  {(onConfirm || formName) && (
                    <Button
                      disabled={disableConfirmButton}
                      fullWidth
                      formName={formName}
                      color={confirmButtonStyle?.color}
                      size={confirmButtonStyle?.size ?? ButtonSize.MEDIUM}
                      onClick={onConfirm}
                      loading={loading}
                    >
                      {confirmButtonStyle?.text ?? "Confirm"}
                    </Button>
                  )}
                  {!hideCloseButton && (
                    <Button
                      fullWidth
                      color={closeButtonStyle?.color ?? ButtonColor.GREY}
                      size={closeButtonStyle?.size ?? ButtonSize.MEDIUM}
                      onClick={close}
                    >
                      {closeButtonStyle?.text ?? "Cancel"}
                    </Button>
                  )}
                </div>
              )}
            </div>
          </div>
        </Portal>
      )}
    </div>
  );
};

export default Modal;
