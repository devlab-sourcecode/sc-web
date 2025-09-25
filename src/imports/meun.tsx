import React, { useEffect, useRef, useState } from "react";
import HoverMenu from "./hover-menu.tsx";

type MenuNavProps = {
  active?: "Our Services" | "Case Studies" | "News/Blog" | "About Us" | "Contact";
};

export function MenuNav({ active }: MenuNavProps) {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const hideTimeoutRef = useRef<number | null>(null);
  const FORCE_OPEN = false; // ปิดโหมดดีบัก กลับไปใช้ hover

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

  // no positioning effect needed for absolute overlay

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
        // onMouseEnter={openMenu}
        // onMouseLeave={scheduleCloseMenu}
      >
        <div className={itemClass("Our Services")}>
          <p className="leading-[26px] whitespace-pre">Our Services</p>
        </div>
        <div className="h-[7.097px] relative shrink-0 w-[13.138px]" aria-hidden>
          <svg className="block size-full" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1.5L7 6.5L13 1.5" fill="white" />
          </svg>
        </div>

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

      {(FORCE_OPEN || isServicesOpen) && (
          <div
            className="absolute left-0 top-full z-[2147483647] w-[1440px] h-[891px] pointer-events-auto"
            onMouseEnter={openMenu}
            onMouseLeave={FORCE_OPEN ? undefined : scheduleCloseMenu}
          >
            <HoverMenu />
          </div>
        )}
    </div>
  );
}

export default MenuNav;


