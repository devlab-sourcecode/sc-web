import React, { useState } from "react";
import imgHotel from "../assets/61c4955997e9ed6e8ff1a334a7a6d80fe566ce15.png";
import { useNavigate } from "react-router-dom";

type MenuNavProps = {
  active?: "Our Services" | "Case Studies" | "News/Blog" | "About Us" | "Contact";
};

export function MenuNav({ active }: MenuNavProps) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const itemClass = (label: string) =>
    label === active
      ? "font-['Poppins:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white"
      : "font-['Poppins:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white";

  return (
    <div className="content-stretch flex gap-[44px] items-center justify-end relative shrink-0 w-[899.817px]">
      <div
        className="relative content-stretch flex items-center justify-between shrink-0 w-[122px]"
        // onMouseEnter={() => setOpen(true)}
        // onMouseLeave={() => setOpen(false)}
      >
        <button
          className={itemClass("Our Services")}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            navigate("/our-service");
          }}
        >
          <p className="leading-[26px] whitespace-pre">Our Services</p>
        </button>
        <div className="h-[7.097px] relative shrink-0 w-[13.138px]" aria-hidden>
          <svg className="block size-full" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1.5L7 6.5L13 1.5" fill="white" />
          </svg>
        </div>

        {open && (
          <div className="absolute right-0 top-[44px] z-50 w-[1200px] rounded-[18px] bg-[#17173a] shadow-2xl border border-white/10 overflow-hidden">
            <div className="grid grid-cols-2 gap-8 px-10 py-8 items-center">
              <div className="pr-4">
                <div className="flex items-center gap-3 text-white">
                  <span className="text-[18px] font-semibold">Hotel Solution</span>
                  <span className="text-white/80">→</span>
                </div>
                <p className="mt-4 text-white/80 text-[14px] leading-relaxed max-w-[520px]">
                  Complete IT ecosystem for hospitality and tourism. From network infrastructure to CRM and AI security systems—one expert team handles everything from guest‑facing technology to back‑office management.
                </p>
              </div>
              <div className="justify-self-end">
                <div className="w-[520px] h-[220px] rounded-[16px] overflow-hidden">
                  <img src={imgHotel} alt="Hotel Solution" className="block w-full h-full object-cover" />
                </div>
              </div>
            </div>
            <div className="px-10 pb-8 pt-0">
              <button
                className="inline-flex items-center gap-2 text-white hover:text-[#a7c6ee] transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  navigate("/hotel-solutions");
                  setOpen(false);
                }}
              >
                <span>Learn more</span>
                <span aria-hidden>→</span>
              </button>
            </div>
          </div>
        )}
      </div>

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


