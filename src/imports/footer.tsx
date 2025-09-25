import React from "react";
import svgPaths from "./svg-lpde8ofs2o";

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
      <div className="opacity-75 relative shrink-0">
        <p className="leading-[30px] whitespace-pre">About</p>
      </div>
      <div className="opacity-75 relative shrink-0">
        <p className="leading-[30px] whitespace-pre">Services</p>
      </div>
      <div className="opacity-75 relative shrink-0">
        <p className="leading-[30px] whitespace-pre">Pricing</p>
      </div>
      <div className="opacity-75 relative shrink-0">
        <p className="leading-[30px] whitespace-pre">Blog</p>
      </div>
      <div className="opacity-75 relative shrink-0 text-nowrap">
        <p className="leading-[30px] whitespace-pre">Careers</p>
      </div>
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
      <div className="opacity-75 relative shrink-0">
        <p className="leading-[30px] text-nowrap whitespace-pre">AI Solutions</p>
      </div>
      <div className="opacity-75 relative shrink-0">
        <p className="leading-[30px] text-nowrap whitespace-pre">Business Solutions</p>
      </div>
      <div className="opacity-75 relative shrink-0">
        <p className="leading-[30px] text-nowrap whitespace-pre">Pricing</p>
      </div>
      <div className="opacity-75 relative shrink-0">
        <p className="leading-[30px] text-nowrap whitespace-pre">Hotel Solutions</p>
      </div>
      <div className="opacity-75 relative shrink-0">
        <p className="leading-[30px] text-nowrap whitespace-pre">Sightbot</p>
      </div>
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
      <BiLine />
      <div className="h-[22px] relative shrink-0 w-[23px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 22">
          <path d={svgPaths.p2e5a7600} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
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
        <p className="leading-[30px] whitespace-pre">089-253-9595, 02-111-8829</p>
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
        <p className="leading-[30px] whitespace-pre">commercial@sourcecode.co.th</p>
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
          {` Soi Ramkhamhaeng 21, Ramkhamhaeng Road`}
          <br aria-hidden="true" />
          {` Hua Mak Subdistrict, Bang Kapi District`}
          <br aria-hidden="true" />
          {` Bangkok 10240, Thailand`}
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

function Iso27001UkasWBg1() {
  return (
    <div className="h-[49px] relative shrink-0 w-[97px]" data-name="ISO 27001 UKAS W-BG 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 97 49">
        <g clipPath="url(#clip0_7_434)" id="ISO 27001 UKAS W-BG 1">
          <path d={svgPaths.pfa85d20} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p284e4b80} fill="var(--fill-0, #231F20)" id="Vector_2" />
          <path d={svgPaths.p2cf8e000} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.pb33fb00} fill="url(#paint0_radial_7_434)" id="Vector_4" />
          <path d={svgPaths.p163e3e00} fill="url(#paint1_radial_7_434)" id="Vector_5" />
          <path d={svgPaths.p28846f00} fill="var(--fill-0, #231F20)" id="Vector_6" />
          <path d={svgPaths.p7617300} fill="var(--fill-0, #231F20)" id="Vector_7" />
          <path d={svgPaths.pbd70270} fill="var(--fill-0, #231F20)" id="Vector_8" />
          <path d={svgPaths.p28333d80} fill="var(--fill-0, #231F20)" id="Vector_9" />
          <path d={svgPaths.p30034300} fill="var(--fill-0, #231F20)" id="Vector_10" />
          <path d={svgPaths.p1f405700} fill="var(--fill-0, #231F20)" id="Vector_11" />
          <path d={svgPaths.p243755f0} fill="var(--fill-0, #231F20)" id="Vector_12" />
          <path d={svgPaths.p21fc940} fill="var(--fill-0, #231F20)" id="Vector_13" />
          <path d={svgPaths.p19ea6600} fill="var(--fill-0, #231F20)" id="Vector_14" />
          <path d={svgPaths.p4db6c80} fill="var(--fill-0, #231F20)" id="Vector_15" />
          <path d={svgPaths.p297f2500} fill="var(--fill-0, #231F20)" id="Vector_16" />
          <path d={svgPaths.p3088bf80} fill="var(--fill-0, #231F20)" id="Vector_17" />
          <path d={svgPaths.p1f55d440} fill="var(--fill-0, #231F20)" id="Vector_18" />
          <path d={svgPaths.p36ce7e00} fill="var(--fill-0, #231F20)" id="Vector_19" />
          <path d={svgPaths.p17824300} fill="var(--fill-0, #231F20)" id="Vector_20" />
          <path d={svgPaths.p2fbbc300} fill="var(--fill-0, #231F20)" id="Vector_21" />
          <path d={svgPaths.p26e66b80} fill="var(--fill-0, #231F20)" id="Vector_22" />
          <path d={svgPaths.p43fdf00} fill="var(--fill-0, #231F20)" id="Vector_23" />
          <path d={svgPaths.p313f8980} fill="var(--fill-0, #231F20)" id="Vector_24" />
          <path d={svgPaths.p9c7ad00} fill="var(--fill-0, #231F20)" id="Vector_25" />
          <path d={svgPaths.p360bc300} fill="var(--fill-0, #231F20)" id="Vector_26" />
          <path d={svgPaths.p1e73f100} fill="var(--fill-0, #231F20)" id="Vector_27" />
          <path d={svgPaths.p202ed780} fill="var(--fill-0, #231F20)" id="Vector_28" />
          <path d={svgPaths.p253e5200} fill="var(--fill-0, #231F20)" id="Vector_29" />
          <path d={svgPaths.p11f04f00} fill="var(--fill-0, #231F20)" id="Vector_30" />
          <path d={svgPaths.p2a8b5300} fill="var(--fill-0, #231F20)" id="Vector_31" />
          <path d={svgPaths.pe237480} fill="var(--fill-0, #231F20)" id="Vector_32" />
          <path d={svgPaths.p3e47a00} fill="var(--fill-0, #231F20)" id="Vector_33" />
          <path d={svgPaths.p187daa00} fill="var(--fill-0, #231F20)" id="Vector_34" />
          <path d={svgPaths.p40fe500} fill="var(--fill-0, #231F20)" id="Vector_35" />
          <path d={svgPaths.p345cee00} fill="var(--fill-0, #231F20)" id="Vector_36" />
          <path d={svgPaths.p3a040b80} fill="var(--fill-0, #231F20)" id="Vector_37" />
          <path d={svgPaths.p141f4000} fill="var(--fill-0, #231F20)" id="Vector_38" />
          <path d={svgPaths.p15241e00} fill="var(--fill-0, #231F20)" id="Vector_39" />
          <path d={svgPaths.p2b4e5280} fill="var(--fill-0, #231F20)" id="Vector_40" />
          <path d={svgPaths.p12938f00} fill="var(--fill-0, #231F20)" id="Vector_41" />
          <path d={svgPaths.p26389700} fill="var(--fill-0, #231F20)" id="Vector_42" />
          <path d={svgPaths.p1a116e40} fill="var(--fill-0, #231F20)" id="Vector_43" />
          <path d={svgPaths.p16c87480} fill="var(--fill-0, #231F20)" id="Vector_44" />
          <path d={svgPaths.pd6e8400} fill="var(--fill-0, #231F20)" id="Vector_45" />
          <path d={svgPaths.pd23e900} fill="var(--fill-0, #231F20)" id="Vector_46" />
          <path d={svgPaths.p1beaec00} fill="var(--fill-0, #231F20)" id="Vector_47" />
          <path d={svgPaths.pb241800} fill="var(--fill-0, #231F20)" id="Vector_48" />
        </g>
        <defs>
          <radialGradient cx="0" cy="0" gradientTransform="translate(24.669 16.6539) scale(22.5105 22.3058)" gradientUnits="userSpaceOnUse" id="paint0_radial_7_434" r="1">
            <stop offset="0.25" stopColor="#F6F6F6" />
            <stop offset="0.43" stopColor="#F1F1F1" />
            <stop offset="0.65" stopColor="#E3E4E4" />
            <stop offset="0.88" stopColor="#CBCDCE" />
            <stop offset="1" stopColor="#BCBEC0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(23.5073 16.878) scale(23.7206 23.5049)" gradientUnits="userSpaceOnUse" id="paint1_radial_7_434" r="1">
            <stop offset="0.25" stopColor="#DCDDDE" />
            <stop offset="0.41" stopColor="#D7D8D9" />
            <stop offset="0.6" stopColor="#C9CACC" />
            <stop offset="0.8" stopColor="#B1B3B5" />
            <stop offset="1" stopColor="#939598" />
          </radialGradient>
          <clipPath id="clip0_7_434">
            <rect fill="white" height="49" width="97" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Vrstva1() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 97 49">
      <g id="Vrstva 1">
        <path d="M97 0H0V49H97V0Z" fill="var(--fill-0, white)" id="Vector" />
        <path d={svgPaths.pd6e8400} fill="var(--fill-0, #231F20)" id="Vector_2" />
        <path d={svgPaths.pd23e900} fill="var(--fill-0, #231F20)" id="Vector_3" />
        <path d={svgPaths.p284e4b80} fill="var(--fill-0, #231F20)" id="Vector_4" />
        <path d={svgPaths.p2cf8e000} fill="var(--fill-0, white)" id="Vector_5" />
        <path d={svgPaths.pb33fb00} fill="url(#paint0_radial_7_356)" id="Vector_6" />
        <path d={svgPaths.p163e3e00} fill="url(#paint1_radial_7_356)" id="Vector_7" />
        <path d={svgPaths.p28846f00} fill="var(--fill-0, #231F20)" id="Vector_8" />
        <path d={svgPaths.p7617300} fill="var(--fill-0, #231F20)" id="Vector_9" />
        <path d={svgPaths.pbd70270} fill="var(--fill-0, #231F20)" id="Vector_10" />
        <path d={svgPaths.p28333d80} fill="var(--fill-0, #231F20)" id="Vector_11" />
        <path d={svgPaths.p30034300} fill="var(--fill-0, #231F20)" id="Vector_12" />
        <path d={svgPaths.p1704c780} fill="var(--fill-0, #231F20)" id="Vector_13" />
        <path d={svgPaths.p35dae800} fill="var(--fill-0, #231F20)" id="Vector_14" />
        <path d={svgPaths.p1cd4b180} fill="var(--fill-0, #231F20)" id="Vector_15" />
        <path d={svgPaths.p32d13200} fill="var(--fill-0, #231F20)" id="Vector_16" />
        <path d={svgPaths.pdb0b80} fill="var(--fill-0, #231F20)" id="Vector_17" />
        <path d={svgPaths.p25378a00} fill="var(--fill-0, #231F20)" id="Vector_18" />
        <path d={svgPaths.p162a9a00} fill="var(--fill-0, #231F20)" id="Vector_19" />
        <path d={svgPaths.p36ce7e00} fill="var(--fill-0, #231F20)" id="Vector_20" />
        <path d={svgPaths.p17824300} fill="var(--fill-0, #231F20)" id="Vector_21" />
        <path d={svgPaths.p2fbbc300} fill="var(--fill-0, #231F20)" id="Vector_22" />
        <path d={svgPaths.p26e66b80} fill="var(--fill-0, #231F20)" id="Vector_23" />
        <path d={svgPaths.p43fdf00} fill="var(--fill-0, #231F20)" id="Vector_24" />
        <path d={svgPaths.p313f8980} fill="var(--fill-0, #231F20)" id="Vector_25" />
        <path d={svgPaths.p9c7ad00} fill="var(--fill-0, #231F20)" id="Vector_26" />
        <path d={svgPaths.p360bc300} fill="var(--fill-0, #231F20)" id="Vector_27" />
        <path d={svgPaths.p1e73f100} fill="var(--fill-0, #231F20)" id="Vector_28" />
        <path d={svgPaths.p202ed780} fill="var(--fill-0, #231F20)" id="Vector_29" />
        <path d={svgPaths.p253e5200} fill="var(--fill-0, #231F20)" id="Vector_30" />
        <path d={svgPaths.p11f04f00} fill="var(--fill-0, #231F20)" id="Vector_31" />
        <path d={svgPaths.p2a8b5300} fill="var(--fill-0, #231F20)" id="Vector_32" />
        <path d={svgPaths.pe237480} fill="var(--fill-0, #231F20)" id="Vector_33" />
        <path d={svgPaths.p3e47a00} fill="var(--fill-0, #231F20)" id="Vector_34" />
        <path d={svgPaths.p187daa00} fill="var(--fill-0, #231F20)" id="Vector_35" />
        <path d={svgPaths.p40fe500} fill="var(--fill-0, #231F20)" id="Vector_36" />
        <path d={svgPaths.p345cee00} fill="var(--fill-0, #231F20)" id="Vector_37" />
        <path d={svgPaths.p3a040b80} fill="var(--fill-0, #231F20)" id="Vector_38" />
        <path d={svgPaths.p141f4000} fill="var(--fill-0, #231F20)" id="Vector_39" />
        <path d={svgPaths.p15241e00} fill="var(--fill-0, #231F20)" id="Vector_40" />
        <path d={svgPaths.p2b4e5280} fill="var(--fill-0, #231F20)" id="Vector_41" />
        <path d={svgPaths.p12938f00} fill="var(--fill-0, #231F20)" id="Vector_42" />
        <path d={svgPaths.p26389700} fill="var(--fill-0, #231F20)" id="Vector_43" />
        <path d={svgPaths.p1a116e40} fill="var(--fill-0, #231F20)" id="Vector_44" />
        <path d={svgPaths.p16c87480} fill="var(--fill-0, #231F20)" id="Vector_45" />
        <path d={svgPaths.p1beaec00} fill="var(--fill-0, #231F20)" id="Vector_46" />
        <path d={svgPaths.pb241800} fill="var(--fill-0, #231F20)" id="Vector_47" />
      </g>
      <defs>
        <radialGradient cx="0" cy="0" gradientTransform="translate(24.669 16.6539) scale(22.5105 22.3058)" gradientUnits="userSpaceOnUse" id="paint0_radial_7_356" r="1">
          <stop offset="0.25" stopColor="#F6F6F6" />
          <stop offset="0.43" stopColor="#F1F1F1" />
          <stop offset="0.65" stopColor="#E3E4E4" />
          <stop offset="0.88" stopColor="#CBCDCE" />
          <stop offset="1" stopColor="#BCBEC0" />
        </radialGradient>
        <radialGradient cx="0" cy="0" gradientTransform="translate(23.5073 16.878) scale(23.7206 23.5049)" gradientUnits="userSpaceOnUse" id="paint1_radial_7_356" r="1">
          <stop offset="0.25" stopColor="#DCDDDE" />
          <stop offset="0.41" stopColor="#D7D8D9" />
          <stop offset="0.6" stopColor="#C9CACC" />
          <stop offset="0.8" stopColor="#B1B3B5" />
          <stop offset="1" stopColor="#939598" />
        </radialGradient>
      </defs>
    </svg>
  );
}

function Layer2() {
  return (
    <div className="absolute contents inset-0" data-name="Layer 2">
      <Vrstva1 />
    </div>
  );
}

function Iso9001UkasWBg1() {
  return (
    <div className="h-[49px] overflow-clip relative shrink-0 w-[97px]" data-name="ISO 9001 UKAS W-BG 1">
      <Layer2 />
    </div>
  );
}

function Frame4646852({ baseTop }: { baseTop: number }) {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center" style={{ left: "calc(77.778% + 38px)", top: `${baseTop + 379}px` }}>
      <Iso27001UkasWBg1 />
      <Iso9001UkasWBg1 />
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


