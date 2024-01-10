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
};

const BottomDrawer: FCWithChildren<BottomDrawerProps> = ({
  children,
  actions,
  title,
  description,
  isOpen = false,
  onClose,
}) => (
  <Drawer open={isOpen} onClose={onClose}>
    <DrawerContent onClose={onClose} className="max-h-[90vh]">
      {(title || description) && (
        <DrawerHeader>
          {title && <DrawerTitle>{title}</DrawerTitle>}
          {description && <DrawerDescription>{description}</DrawerDescription>}
        </DrawerHeader>
      )}
      {children}
      {actions && <DrawerFooter>{actions}</DrawerFooter>}
    </DrawerContent>
  </Drawer>
);

export default BottomDrawer;
