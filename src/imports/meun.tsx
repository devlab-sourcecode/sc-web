import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useLocation } from "react-router-dom";
import HoverMenu from "./hover-menu.tsx";

type MenuNavProps = {
  active?: "Our Services" | "Case Studies" | "News/Blog" | "About Us" | "Contact";
  onOpen?: () => void;
  onScheduleClose?: () => void;
};

export function MenuNav({ active, onOpen, onScheduleClose }: MenuNavProps) {
  const itemClass = (label: string) =>
    label === active
      ? "font-['Poppins:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white hover:opacity-100"
      : "font-['Poppins:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white opacity-80 hover:opacity-100";
  const [open, setOpen] = useState(false);
  const hideTimeoutRef = useRef<number | null>(null);

  const clearHide = () => {
    if (hideTimeoutRef.current !== null) {
      window.clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = null;
    }
  };

  const handleEnter = () => {
    clearHide();
    setOpen(true);
    onOpen?.();
  };

  const handleLeave = () => {
    clearHide();
    hideTimeoutRef.current = window.setTimeout(() => {
      setOpen(false);
      hideTimeoutRef.current = null;
      onScheduleClose?.();
    }, 180);
  };

  return (
    <div className="content-stretch flex gap-[44px] items-center justify-end relative shrink-0 w-[899.817px]">
      <div
        className="content-stretch flex items-center justify-between relative shrink-0 w-[122px]"
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
      >
        <div className={itemClass("Our Services")}>
          <p className="leading-[26px] whitespace-pre">Our Services</p>
        </div>
        <div className="h-[7.097px] relative shrink-0 w-[13.138px]" aria-hidden>
          <svg className="block size-full" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1.5L7 6.5L13 1.5" fill="white" />
          </svg>
        </div>
        {/* Hover bridge to prevent gap between trigger and dropdown */}
        {open && (
          <div className="absolute left-0 top-full" style={{ width: 260, height: 40 }} aria-hidden onMouseEnter={handleEnter} onMouseLeave={handleLeave} />
        )}
        {open && (
          <ul
            role="menu"
            className="absolute left-0 z-[100] w-[260px] rounded-[12px] shadow-xl overflow-hidden"
            style={{ top: 40 }}
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
          >
            <li
              role="menuitem"
              className="block w-full px-4 py-3 cursor-pointer text-[16px] text-[#ffffff] hover:bg-white/15"
              style={{ color: '#ffffff' }}
            >
              Hotel Solutions
            </li>
          </ul>
        )}
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

export function Navigation({ active, Logo }: { active?: MenuNavProps["active"]; Logo: React.ComponentType }) {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const hideTimeoutRef = useRef<number | null>(null);
  const FORCE_OPEN = false;
  const location = useLocation();

  const openMenu = () => {
    if (hideTimeoutRef.current !== null) {
      window.clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = null;
    }
    // setIsServicesOpen(true);
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
    return () => {
      if (hideTimeoutRef.current !== null) {
        window.clearTimeout(hideTimeoutRef.current);
      }
    };
  }, []);

  // Resolve active menu based on current route when not explicitly provided
  let derivedActive: MenuNavProps["active"];
  switch (location.pathname) {
    case "/our-services":
      derivedActive = "Our Services";
      break;
    case "/hotel-solutions":
      // Hotel Solutions is under Our Services group
      derivedActive = "Our Services";
      break;
    case "/about-us":
      derivedActive = "About Us";
      break;
    case "/contact":
      derivedActive = "Contact";
      break;
    default:
      derivedActive = undefined;
  }
  const computedActive: MenuNavProps["active"] = active ?? derivedActive;

  return (
    <div className="absolute contents left-[75px] top-[36px]" data-name="Navigation">
      <div className="absolute content-stretch flex items-center justify-between left-[75px] top-[36px] w-[1290px]">
        <Logo />
        <MenuNav active={computedActive} onOpen={openMenu} onScheduleClose={scheduleCloseMenu} />
      </div>
      {(FORCE_OPEN || isServicesOpen) &&
          createPortal(
            <div
              className="fixed inset-0 z-[2147483647] bg-transparent pointer-events-auto"
              onMouseEnter={openMenu}
              onMouseLeave={FORCE_OPEN ? undefined : scheduleCloseMenu}
            >
              <HoverMenu />
            </div>,
          document.body
        )}
    </div>
  );
}

export default MenuNav;


