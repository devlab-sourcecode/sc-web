import React from "react";
import svgPaths from "./svg-kw3am3kkxf";
import poolImg from "../assets/1fb54f0b47c9713b08961dd6e79e8cc7aab4fe21.jpg";

function TitleRow() {
  return (
    <div className="flex items-center gap-[12px]">
      <div className="font-['Poppins:Regular',_sans-serif] not-italic text-[18px] text-white">
        <p className="leading-[26px]">Hotel Solution​​</p>
      </div>
      <div className="w-[28px] h-[10px]" aria-hidden>
        <svg className="block" width="28" height="10" viewBox="0 0 30 16" fill="none">
          <path d={svgPaths.p332d4a00} fill="white" />
        </svg>
      </div>
    </div>
  );
}

export default function HoverMenu() {
  const topOffset = 80; // distance from top of viewport under the navbar
  return (
    <div className="fixed inset-0" data-name="hover-menu">
      {/* Full-screen transparent capture layer to block background clicks */}
      <div className="absolute inset-0 z-0" />

      {/* Menubar container */}
      <div className="absolute left-0 right-0 z-10" style={{ top: topOffset, height: 271 }}>
        <div className="absolute inset-0 bg-[#11112b] z-10" data-name="Rectangle" />
        <div className="relative inset-0 h-full w-full z-20">
          <div className="h-full max-w-[1240px] mx-auto px-[64px] flex items-center justify-center gap-[72px]">
            <div className="flex-1 min-w-0">
              <TitleRow />
              <div className="mt-3 font-['Poppins:Regular',_sans-serif] text-[18px] leading-[28px] text-white/90 max-w-[680px]">
                Complete IT ecosystem for hospitality and tourism. From network
                infrastructure to CRM and AI security systems—one expert team
                handles everything from guest-facing technology to back-office
                management.
              </div>
            </div>
            <div className="w-[720px] max-w-[50%]">
              <img
                src={poolImg}
                alt=""
                className="w-full h-[208px] rounded-[20px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}