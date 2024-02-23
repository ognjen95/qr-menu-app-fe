import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  FCWithChildren,
} from "ui-components";

export type RightDrawerProps = {
  title?: string;
  description?: string;
  actions?: React.ReactNode;
  isOpen: boolean;
  onClose?: () => void;
};

const RightDrawer: FCWithChildren<RightDrawerProps> = ({
  children,
  actions,
  title,
  description,
  isOpen = false,
  onClose,
}) => (
  <Drawer open={isOpen} onClose={onClose} direction="right">
    <DrawerContent
      hideHandle
      onClose={onClose}
      className="bg-white flex flex-col rounded-l-xl h-full min-w-[400px] bg-white/80 backdrop-blur mt-24 fixed bottom-0 right-0 z-[9999999999]"
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

export default RightDrawer;
