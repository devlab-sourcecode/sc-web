import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import HoverMenu from "./hover-menu";

type MenuNavProps = {
  active?: "Our Services" | "Case Studies" | "News/Blog" | "About Us" | "Contact";
};

export function MenuNav({ active }: MenuNavProps) {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const triggerRef = useRef<HTMLDivElement | null>(null);
  const [leftOffsetPx, setLeftOffsetPx] = useState(0);
  const [portalTopPx, setPortalTopPx] = useState(0);
  const hideTimeoutRef = useRef<number | null>(null);

  const openMenu = () => {
    if (hideTimeoutRef.current !== null) {
      window.clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = null;
    }
    setIsServicesOpen(true);
  };

  const scheduleCloseMenu = () => {
    if (hideTimeoutRef.current !== null) {
      window.clearTimeout(hideTimeoutRef.current);
    }
    hideTimeoutRef.current = window.setTimeout(() => {
      setIsServicesOpen(false);
      hideTimeoutRef.current = null;
    }, 150);
  };

  useEffect(() => {
    if (!isServicesOpen) return;
    const rect = triggerRef.current?.getBoundingClientRect();
    setLeftOffsetPx(rect ? Math.round(rect.left) : 0);
    setPortalTopPx(rect ? Math.round(rect.bottom + window.scrollY) : 0);

    const handleReposition = () => {
      const r = triggerRef.current?.getBoundingClientRect();
      setLeftOffsetPx(r ? Math.round(r.left) : 0);
      setPortalTopPx(r ? Math.round(r.bottom + window.scrollY) : 0);
    };
    window.addEventListener("scroll", handleReposition, { passive: true });
    window.addEventListener("resize", handleReposition);
    return () => {
      window.removeEventListener("scroll", handleReposition);
      window.removeEventListener("resize", handleReposition);
    };
  }, [isServicesOpen]);

  useEffect(() => {
    return () => {
      if (hideTimeoutRef.current !== null) {
        window.clearTimeout(hideTimeoutRef.current);
      }
    };
  }, []);
  const itemClass = (label: string) =>
    label === active
      ? "font-['Poppins:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white"
      : "font-['Poppins:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white";

  return (
    <div className="content-stretch flex gap-[44px] items-center justify-end relative shrink-0 w-[899.817px]">
      <div
        className="content-stretch flex items-center justify-between relative shrink-0 w-[122px]"
        onMouseEnter={openMenu}
        onMouseLeave={scheduleCloseMenu}
        ref={triggerRef}
      >
        <div className={itemClass("Our Services")}>
          <p className="leading-[26px] whitespace-pre">Our Services</p>
        </div>
        <div className="h-[7.097px] relative shrink-0 w-[13.138px]" aria-hidden>
          <svg className="block size-full" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1.5L7 6.5L13 1.5" fill="white" />
          </svg>
        </div>
        {isServicesOpen && typeof document !== "undefined"
          ? createPortal(
              <div
                className="fixed z-[99999] w-[1440px] h-[891px] pointer-events-auto"
                style={{ left: `0px`, top: `${portalTopPx}px` }}
                onMouseEnter={openMenu}
                onMouseLeave={scheduleCloseMenu}
              >
                <HoverMenu />
              </div>,
              document.body
            )
          : null}
      </div>
      {/* <div className={itemClass("Case Studies")}>
        <p className="leading-[26px] whitespace-pre">Case Studies</p>
      </div> */}
      {/* <div className={itemClass("News/Blog")}>
        <p className="leading-[26px] whitespace-pre">News/Blog</p>
      </div> */}
      <div className={itemClass("About Us")}>
        <p className="leading-[26px] whitespace-pre">About Us</p>
      </div>
      <div className={itemClass("Contact")}>
        <p className="leading-[26px] whitespace-pre">Contact</p>
      </div>
    </div>
  );
}

export default MenuNav;


