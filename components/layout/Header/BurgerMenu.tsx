import { Dispatch, FC, SetStateAction, useEffect, useRef, useState } from "react";
import NavItem, { TNavItem } from "./NavItem";
import { Dialog, DialogPanel } from "@headlessui/react";

type Props = {
  innerNavigationItems: TNavItem[];
  controlItems: TNavItem[];
  rightItems: TNavItem[];
  mobileMenuOpen: boolean;
  setMobileMenuOpen: Dispatch<SetStateAction<boolean>>;
}

const BurgerMenu: FC<Props> = ({
  innerNavigationItems,
  controlItems,
  rightItems,
  setMobileMenuOpen,
  mobileMenuOpen
}) => {
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartY = useRef(0);
  const panelRef = useRef<HTMLDivElement>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    dragStartY.current = e.touches[0].clientY;
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;

    const currentY = e.touches[0].clientY;
    const diff = currentY - dragStartY.current;
    
    if (diff > 0) {
      setDragOffset(diff);
    }
  };

  const handleTouchEnd = () => {
    if (isDragging) {
      if (dragOffset > 100) {
        setMobileMenuOpen(false);
      }
      
      setDragOffset(0);
      setIsDragging(false);
    }
  };

  useEffect(() => {
    if (!mobileMenuOpen) {
      setDragOffset(0);
      setIsDragging(false);
    }
  }, [mobileMenuOpen]);

  const getTransformStyle = () => {
    if (dragOffset > 0) {
      return {
        transform: `translateY(${dragOffset}px)`,
        transition: isDragging ? 'none' : 'transform 0.3s ease-out'
      };
    }
    return {
      transition: 'transform 0.3s ease-out'
    };
  };

  return (
    <Dialog
      as="div"
      open={mobileMenuOpen}
      onClose={setMobileMenuOpen}
      transition
      className="z-50 tablet:hidden bg-primary-opacity-24 backdrop-blur-md fixed inset-0 flex w-screen items-end justify-center transition duration-300 ease-out data-closed:opacity-0"
    >
      <DialogPanel 
        ref={panelRef}
        className="w-full p-4 max-h-screen overflow-y-scroll"
        style={getTransformStyle()}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={handleTouchEnd}
      >
        <div className="p-6 rounded-[32px] flex flex-col gap-2 border border-outline bg-surface-container shadow-inner-100-small">
          <div className="flex justify-center mb-2">
            <div className="w-20 h-1 bg-outline-inverse rounded-full" />
          </div>
          {innerNavigationItems.map((item) => (
            <div key={item.text} onClick={() => setMobileMenuOpen(false)}>
              <NavItem {...item} />
            </div>
          ))}
          <div className="h-[1px] w-full rounded-[32px] bg-outline" />
          {controlItems.map((item) => (
            <div key={item.text} onClick={() => setMobileMenuOpen(false)}>
              <NavItem {...item} />
            </div>
          ))}
          <div className="h-[1px] w-full rounded-[32px] bg-outline" />
          {rightItems.map((item) => (
            <div key={item.text} onClick={() => setMobileMenuOpen(false)}>
              <NavItem {...item} />
            </div>
          ))}
        </div>
      </DialogPanel>
    </Dialog>
  );
};

export default BurgerMenu;
