import Modal, { ModalProps } from "./Modal";
import { ButtonColor, ButtonSize } from "../button/enums";
import { FCWithChildren } from "../common/types";
import { colors } from "../config/tailwind-config";
import { IconType } from "../icon/enums";

const DeleteModal: FCWithChildren<
  Omit<ModalProps, "confirmButtonStyle" | "modalIcon">
> = ({
  isOpen,
  close,
  onConfirm,
  title,
  description,
  boldedEndOfDescription,
  loading,
  children,
}) => (
  <Modal
    modalIcon={{
      type: IconType.TRASH_FULL,
      stroke: colors.red[500],
    }}
    title={title}
    description={description}
    isOpen={isOpen}
    close={close}
    onConfirm={onConfirm}
    closeButtonStyle={{
      size: ButtonSize.LARGE,
    }}
    confirmButtonStyle={{
      text: "Delete",
      color: ButtonColor.RED,
      size: ButtonSize.LARGE,
    }}
    loading={loading}
    boldedEndOfDescription={boldedEndOfDescription}
  >
    {children}
  </Modal>
);

export default DeleteModal;
