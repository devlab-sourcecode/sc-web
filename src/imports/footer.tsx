import React from "react";
import svgPaths from "./svg-lpde8ofs2o";
import { Link } from "react-router-dom";

import ISO9001 from "../assets/ISO_9001_UKAS_W-BG_1.png";
import ISO27001 from "../assets/ISO_27001_UKAS_W-BG_1.png";

type FooterProps = {
  baseTop?: number;
  withBackground?: boolean;
  backgroundWidth?: number;
  backgroundHeight?: number;
  backgroundLeft?: number;
};

function Frame2121450994() {
  return (
    <div className="content-stretch flex flex-col font-['Poppins:Regular',_sans-serif] gap-[8px] items-start leading-[0] not-italic relative shrink-0 text-[14px] text-white w-[63px]">
      <div className="opacity-75 hover:opacity-100 relative shrink-0">
        <Link to="/about-us" className="leading-[30px] whitespace-pre inline-block">About</Link>
      </div>
      <div className="opacity-75 hover:opacity-100 relative shrink-0">
        <span className="leading-[30px] whitespace-pre inline-block cursor-default select-none" aria-disabled>
          Services
        </span>
      </div>
      {/* <div className="opacity-75 relative shrink-0">
        <p className="leading-[30px] whitespace-pre">Pricing</p>
      </div>
      <div className="opacity-75 relative shrink-0">
        <p className="leading-[30px] whitespace-pre">Blog</p>
      </div>
      <div className="opacity-75 relative shrink-0 text-nowrap">
        <p className="leading-[30px] whitespace-pre">Careers</p>
      </div> */}
    </div>
  );
}

function Frame2121450995() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col gap-[33px] items-start ml-0 mt-0 relative w-[109px]">
      <div className="font-['Poppins:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[24px] text-nowrap text-white">
        <p className="leading-[normal] whitespace-pre">Company</p>
      </div>
      <Frame2121450994 />
    </div>
  );
}

function Explore() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Explore">
      <Frame2121450995 />
    </div>
  );
}

function Frame2121451019() {
  return (
    <div className="content-stretch flex flex-col font-['Poppins:Regular',_sans-serif] gap-[8px] items-start leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white w-[63px]">
      {/* <div className="opacity-75 relative shrink-0">
        <p className="leading-[30px] text-nowrap whitespace-pre">AI Solutions</p>
      </div>
      <div className="opacity-75 relative shrink-0">
        <p className="leading-[30px] text-nowrap whitespace-pre">Business Solutions</p>
      </div>
      <div className="opacity-75 relative shrink-0">
        <p className="leading-[30px] text-nowrap whitespace-pre">Pricing</p>
      </div> */}
      <div className="opacity-75 hover:opacity-100 relative shrink-0">
        <p className="leading-[30px] text-nowrap whitespace-pre cursor-pointer">Hotel Solutions</p>
      </div>
      {/* <div className="opacity-75 relative shrink-0">
        <p className="leading-[30px] text-nowrap whitespace-pre">Sightbot</p>
      </div> */}
    </div>
  );
}

function Frame2121451020() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col gap-[33px] items-start ml-0 mt-0 relative w-[145px]">
      <div className="font-['Poppins:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[24px] text-nowrap text-white">
        <p className="leading-[normal] whitespace-pre">Our Services</p>
      </div>
      <Frame2121451019 />
    </div>
  );
}

function Explore1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Explore">
      <Frame2121451020 />
    </div>
  );
}

function BiLine() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="bi:line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="bi:line">
          <path d={svgPaths.p13153280} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame466() {
  return (
    <div className="content-stretch flex gap-[18px] items-center relative shrink-0 w-full">
      <a
        href={(import.meta as any).env?.VITE_LINE_ADD_URL ?? "https://line.me/R/ti/p/@YOUR_ID"}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Add LINE"
        className="inline-block"
      >
        <BiLine />
      </a>
      <a
        href="https://www.facebook.com/sourcecodeth/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        className="h-[22px] relative shrink-0 w-[23px]"
        data-name="Vector"
      >
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 22">
          <path d={svgPaths.p2e5a7600} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </a>
    </div>
  );
}

function Frame2121451021() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[63px]">
      <Frame466 />
    </div>
  );
}

function Frame2121451022() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col gap-[33px] items-start ml-0 mt-0 relative w-[87px]">
      <div className="font-['Poppins:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[24px] text-nowrap text-white">
        <p className="leading-[normal] whitespace-pre">Follow Us</p>
      </div>
      <Frame2121451021 />
    </div>
  );
}

function Explore2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Explore">
      <Frame2121451022 />
    </div>
  );
}

function Frame2121450996({ baseTop }: { baseTop: number }) {
  return (
    <div className="absolute content-stretch flex gap-[78px] items-start leading-[0]" style={{ left: "calc(55.556% + 43px)", top: `${baseTop + 62}px` }}>
      <Explore />
      <Explore1 />
      <Explore2 />
    </div>
  );
}

function Frame354() {
  return (
    <div className="h-[43px] relative shrink-0 w-[179px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 179 43">
        <g id="Frame 352">
          <path d={svgPaths.pb9a100} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p210b03d0} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p3ce29a80} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p35440600} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.pbc32e80} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p36084600} fill="var(--fill-0, white)" id="Vector_6" />
          <path d={svgPaths.p8fa8600} fill="var(--fill-0, white)" id="Vector_7" />
          <path d={svgPaths.p2055a8b0} fill="var(--fill-0, white)" id="Vector_8" />
          <path d={svgPaths.p34264a00} fill="var(--fill-0, white)" id="Vector_9" />
          <path d={svgPaths.p3c97ca00} fill="var(--fill-0, white)" id="Vector_10" />
          <path d={svgPaths.p13e5a3c0} fill="var(--fill-0, white)" id="Vector_11" />
          <path d={svgPaths.p38a4ce80} fill="var(--fill-0, white)" id="Vector_12" />
          <path d={svgPaths.p1e361900} fill="var(--fill-0, white)" id="Vector_13" />
        </g>
      </svg>
    </div>
  );
}

function TdesignCall1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="tdesign:call-1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="tdesign:call-1">
          <path d={svgPaths.p16cd1e00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame2121450997() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
      <TdesignCall1 />
      <div className="font-['Poppins:Regular',_sans-serif] leading-[0] not-italic opacity-75 relative shrink-0 text-[14px] text-nowrap text-white">
        <a href="tel:+66892539595" className="leading-[30px] whitespace-pre">089-253-9595</a>
        <span className="leading-[30px] whitespace-pre">, </span>
        <a href="tel:+6621118829" className="leading-[30px] whitespace-pre">02-111-8829</a>
      </div>
    </div>
  );
}

function IcOutlineEmail1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ic:outline-email">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ic:outline-email">
          <path d={svgPaths.p1ecc0980} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame2121450998() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
      <IcOutlineEmail1 />
      <div className="font-['Poppins:Regular',_sans-serif] leading-[0] not-italic opacity-75 relative shrink-0 text-[14px] text-nowrap text-white">
        <a href="mailto:commercial@sourcecode.co.th" className="leading-[30px] whitespace-pre">commercial@sourcecode.co.th</a>
      </div>
    </div>
  );
}

function MdiPlaceOutline() {
  return (
    <div className="relative shrink-0 size-[25px]" data-name="mdi:place-outline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="mdi:place-outline">
          <path d={svgPaths.p325e9300} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame2121450999() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
      <MdiPlaceOutline />
      <div className="font-['Poppins:Regular',_sans-serif] leading-[30px] not-italic opacity-75 relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">
        <p className="mb-0">Sourcecode Co., Ltd.</p>
        <p>
          75/62–65, BKCS Group Building
          <br aria-hidden="true" />
          {`Soi Ramkhamhaeng 21, Ramkhamhaeng Road`}
          <br aria-hidden="true" />
          {`Hua Mak Subdistrict, Bang Kapi District`}
          <br aria-hidden="true" />
          {`Bangkok 10240, Thailand`}
        </p>
      </div>
    </div>
  );
}

function Frame2121451023() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame2121450997 />
      <Frame2121450998 />
      <Frame2121450999 />
    </div>
  );
}

function Frame2121451000({ baseTop }: { baseTop: number }) {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-start left-[75px] w-[285px]" style={{ top: `${baseTop + 62}px` }}>
      <Frame354 />
      <Frame2121451023 />
    </div>
  );
}

function Frame4646852({ baseTop }: { baseTop: number }) {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center" style={{ left: "calc(77.778% + 38px)", top: `${baseTop + 379}px` }}>
      <img src={ISO27001} alt="ISO 27001 UKAS W-BG 1" />
      <img src={ISO9001} alt="ISO 9001 UKAS W-BG 1" />
    </div>
  );
}

export function Footer({ baseTop = 2542, withBackground = true, backgroundWidth = 1448, backgroundHeight = 552, backgroundLeft = 0 }: FooterProps) {
  return (
    <div className="absolute contents left-0">
      {withBackground ? (
        <div className="absolute bg-[#234177]" data-name="Rectangle" style={{ left: backgroundLeft, top: baseTop, width: backgroundWidth, height: backgroundHeight }} />
      ) : null}
      <Frame2121450996 baseTop={baseTop} />
      <div className="absolute font-['Poppins:Regular',_sans-serif] leading-[0] left-[74px] not-italic opacity-50 text-[16px] text-nowrap text-white" style={{ top: `${baseTop + 482}px` }}>
        <p className="leading-[26px] whitespace-pre">© 2025 Sourcecode Co., Ltd. All rights reserved · Privacy Policy · Data Removal · Quality Policy</p>
      </div>
      <div className="absolute bg-white h-px left-[73px] opacity-50" data-name="Line" style={{ top: `${baseTop + 459}px`, width: 1289 }} />
      <Frame2121451000 baseTop={baseTop} />
      <Frame4646852 baseTop={baseTop} />
    </div>
  );
}

export default Footer;


