import clsx from "clsx";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  FCWithChildren,
} from "ui-components";

export type BottomDrawerProps = {
  title?: string;
  description?: string;
  actions?: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  fullHeight?: boolean;
  backgroundColor?: string;
  hideHandle?: boolean;
};

const BottomDrawer: FCWithChildren<BottomDrawerProps> = ({
  children,
  actions,
  title,
  description,
  isOpen = false,
  onClose,
  fullHeight = false,
  backgroundColor,
  hideHandle = false,
}) => (
  <Drawer open={isOpen} onClose={onClose}>
    <DrawerContent
      hideHandle={hideHandle}
      onClose={onClose}
      className={clsx(
        {
          "max-h-[90vh]": !fullHeight,
          "h-[90vh]": fullHeight,
        },
        "fixed overflow-hidden inset-x-0 bottom-0 z-[9999999999999999999] mt-24 flex h-auto flex-col rounded-t-2xl border bg-current"
      )}
      style={{
        backgroundColor,
      }}
    >
      {(title || description) && (
        <DrawerHeader>
          {title && <DrawerTitle>{title}</DrawerTitle>}
          {description && <DrawerDescription>{description}</DrawerDescription>}
        </DrawerHeader>
      )}
      {children}
      {actions && <DrawerFooter className="w-full">{actions}</DrawerFooter>}
    </DrawerContent>
  </Drawer>
);

export default BottomDrawer;
