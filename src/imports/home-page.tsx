import svgPaths from "./svg-6xc7n64g64";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { getLogoSetColumns, getLogoSetNames } from "../assets/logo/sets";
import { Footer } from "./footer";
import { useNavigate } from "react-router-dom";

import imgRectangle424 from "figma:asset/193ae0716c6de33d90aa240a158618ad65583eff.png";
import imgBackground from "figma:asset/852860408de8254621186898a68e4c7eb55d8760.png";
import imgTwzPublicCompanyLimitedNonVoting600 from "figma:asset/63b1f5ad501cbd34d07bc43c3c382675662d45d8.png";
import imgLogoTtw from "figma:asset/cf4ce5499a5083f708047aad092129b6cb1ad805.png";
import imgImages from "figma:asset/a6a9fb5eb8f959fcc6c76d3217a696ffb725e28e.png";
import imgImages11 from "figma:asset/633dc8f2ec83c4028752cbcfb6fcea367317a570.png";
import img2931482325754928206943955453848552403829958N1 from "figma:asset/abe1e843d5401cb9b37642e58a7c68b4c392a3ac.png";
import imgImages1 from "figma:asset/0aa862e64a803c9f15b28ac1613026f49e2f4a02.png";
import imgThomasLogo1 from "figma:asset/4f6fd7e559531c01aac7738e1d7df543dd9569b3.png";
import imgHotelOnce11 from "figma:asset/914f9b144fc1291b364cab53f4b76f974a1a8192.png";
import img15951 from "figma:asset/eb29732395876af460f75a1003ef5ef78f1ca5c3.png";
import img10120621 from "figma:asset/ed5a02e4ecfc8a4961741f9f9c98b5a92f8761b3.png";
import imgLogoColor from "figma:asset/582e741aafa1e6e12b382e09a1f68c792788a1a6.png";
import imgOyoRoomsLogo from "figma:asset/a1a49ba1472e22b1e135d495ceaafe716b3ea0e2.png";
import imgLogoOfTheBankOfThailand2012Svg1 from "figma:asset/6bcb239b43eccc318b5de42b0bc8701229106cc5.png";
import imgImages2 from "figma:asset/c074b4565634479244e1bcd0111e37100fe36a45.png";
import imgImages12 from "figma:asset/4a527b94d283c2c858db3d849101f14357ea373c.png";
import imgCroppedCocoTopLogo2X1 from "figma:asset/d5dbf1d243499f5a2ee3a4137e4ee05bb08174dd.png";
import imgImages51 from "figma:asset/5c7d180920e16e00df28646d6cbd5d4332a17aca.png";
import imgImages3 from "figma:asset/432583d27dbe0658a744df3bbdb2dc338b77499c.png";
import imgBackground1 from "figma:asset/8b9cf7d4f337925eff561e9bed130d09cdf44818.png";
import imgBackground2 from "figma:asset/091f801ace93294dfa35b09a88eb6855b7305d57.png";
import imgVector from "figma:asset/6b99a2f8fa21f63827e13f5a6db1d9ed74d55b4a.png";
import imgOdooLogo1 from "../assets/odoo_logo.png";
import imgPartnerPaysolutions2 from "figma:asset/c9cd5006c1c48dd3fd1aa64a685f41152699cf61.png";
import imgPartnerKiu2 from "figma:asset/98cd687a2928dbd48835b161f472c0510360dd86.png";
import imgScreenShot25680711At1723432 from "figma:asset/0ae61502c44fbafc5ba1570728d7a04486bef9ca.png";
import imgScreenShot25680711At1723482 from "figma:asset/12a38ace56a2e7da12d994337432b969eb5ae701.png";
import imgScreenShot25680711At172357RemovebgPreview2 from "figma:asset/7a82afd9eb85eb64fb4e2085b214c164386898ce.png";
import imgRectangle353 from "figma:asset/61c4955997e9ed6e8ff1a334a7a6d80fe566ce15.png";
import imgRectangle354 from "figma:asset/b5ea8129f4d415fe0acd06d21e71908257b45bb2.png";
import imgRectangle355 from "figma:asset/6768e9e029beb67cd6e1f7d46d3f6732cc4ba910.png";
import imgRectangle356 from "figma:asset/469d8bb1486b0b902d9ef1c1c6e9b7e5da4551d9.png";
import imgImagePlaceholder from "figma:asset/34e5d66303e1a24493a7ba1e52f3d6996544cc8b.png";
import imgImagePlaceholder1 from "figma:asset/f67d8728129ea6fc99e5dbc8963b90f6be3e841f.png";
import imgImagePlaceholder2 from "figma:asset/561386bd65f14b81ac0bb8ff353f85aef864e68e.png";
import imgImagePlaceholder3 from "figma:asset/13bbc3c799cad567f386b6ed571654e1c0f0130a.png";
import imgEllipse68 from "figma:asset/f43f1da354f1f1eabe330582e860f8cc029e911e.png";
import imgEllipse69 from "figma:asset/8b5092d447ff501b9173a4c875c9b2ae19757afd.png";
import imgEllipse70 from "figma:asset/65e06e26c3fc40cd1aa69faf8545a4f729286c8b.png";
import Ellipse68 from "../assets/Ellipse 68.png";
import Ellipse74 from "../assets/Ellipse 74.png";
import MenuNav from "./meun";
import imgImagePlaceholder4 from "figma:asset/40a7b7c2aa72b445c84e6179f4afa8c36c1c3330.png";
import imgImagePlaceholder5 from "figma:asset/49b253b96b9760cf5eca29fb46709696b7b9332c.png";
import { imgWireframeVector } from "./svg-9rxtm";

function WireframeVector() {
  return (
    <div className="h-[2169.89px] opacity-25 overflow-clip relative w-[2977.92px]" data-name="Wireframe Vector">
      <div className="absolute flex inset-[14.19%_28.42%_40.14%_18.14%] items-center justify-center">
        <div className="flex-none h-[752px] rotate-[170.331deg] scale-y-[-100%] w-[1486px]">
          <div className="relative size-full">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[131.67%] left-0 max-w-none top-[-0.08%] w-full" src={imgRectangle424} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame352() {
  return (
    <div className="h-[43px] relative shrink-0 w-[179px]">
      <svg className="block size-full pointer-events-none" fill="none" preserveAspectRatio="none" viewBox="0 0 179 43">
        <g id="Frame 352">
          <path d={svgPaths.p9387880} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p2c0c8900} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p3553f420} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p35440600} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.pbc32e80} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p36084600} fill="var(--fill-0, white)" id="Vector_6" />
          <path d={svgPaths.p8fa8600} fill="var(--fill-0, white)" id="Vector_7" />
          <path d={svgPaths.p2055a8b0} fill="var(--fill-0, white)" id="Vector_8" />
          <path d={svgPaths.p34264a00} fill="var(--fill-0, white)" id="Vector_9" />
          <path d={svgPaths.p3c97ca00} fill="var(--fill-0, white)" id="Vector_10" />
          <path d={svgPaths.p13e5a3c0} fill="var(--fill-0, white)" id="Vector_11" />
          <path d={svgPaths.p38a4ce80} fill="var(--fill-0, white)" id="Vector_12" />
          <path d={svgPaths.p5261000} fill="var(--fill-0, white)" id="Vector_13" />
        </g>
      </svg>
    </div>
  );
}

function Frame2121450971() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[122px]">
      <div className="font-['Poppins:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
        <p className="leading-[26px] whitespace-pre">Our Services</p>
      </div>
      <div className="h-[7.097px] relative shrink-0 w-[13.138px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 8">
          <path d={svgPaths.p21350d00} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Frame2121450969() {
  return <MenuNav />;
}

function Frame2121450970() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[75px] top-[36px] w-[1290px]">
      <Frame352 />
      <Frame2121450969 />
    </div>
  );
}

function Navigation() {
  return (
    <div className="absolute contents left-[75px] top-[36px]" data-name="Navigation">
      <Frame2121450970 />
    </div>
  );
}

function Frame2121450972() {
  const navigate = useNavigate();
  const handleClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigate("/contact");
  };
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 cursor-pointer"
    onClick={handleClick}>
      <div className="font-['Poppins:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
        <p className="leading-[26px] whitespace-pre">{`Let's Connect​`}</p>
      </div>
      <div className="h-0 relative shrink-0 w-[28px]" data-name="Arrow Icon">
        <div className="absolute bottom-[-7.36px] left-0 right-[-3.57%] top-[-7.36px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 16">
            <path d={svgPaths.p24316c00} fill="var(--stroke-0, white)" id="Arrow Icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame2121450973() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[10px] h-[80px] items-center px-[53px] py-[27px] rounded-[15px] top-[582px] w-[256px] cursor-pointer" style={{ left: "calc(33.333% + 112px)" }}>
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[15px]" />
      <Frame2121450972 />
    </div>
  );
}

function CtaButton() {
  return (
    <div className="absolute contents top-[582px]" data-name="CTA Button" style={{ left: "calc(33.333% + 112px)" }}>
      <Frame2121450973 />
    </div>
  );
}

function HeroSection() {
  return (
    <div className="absolute contents left-[-1039.42px] top-[-657.41px]" data-name="Hero Section">
      <div className="absolute h-[737px] left-0 opacity-25 top-0 w-[1458px]" data-name="Background">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgBackground} />
      </div>
      <div className="absolute flex h-[843.161px] items-center justify-center left-[-19.5px] top-[461.72px] w-[1954.138px]">
        <div className="flex-none rotate-[357.222deg]">
          <div className="h-[751.015px] relative w-[1920px]" data-name="Gradient">
            <div className="absolute inset-[-13.32%_-5.21%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2120 952">
                <g filter="url(#filter0_f_0_744)" id="Gradient">
                  <path d={svgPaths.p26172b00} fill="var(--fill-0, #11112B)" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="951.015" id="filter0_f_0_744" width="2120" x="0" y="-2.27224e-06">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                    <feGaussianBlur result="effect1_foregroundBlur_0_744" stdDeviation="50" />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[2639.24px] items-center justify-center left-[-1039.42px] top-[-657.41px] w-[3300.06px]">
        <div className="flex-none rotate-[170.331deg] scale-y-[-100%]">
          <WireframeVector />
        </div>
      </div>
      <Navigation />
      <div className="absolute font-['Poppins:Regular',_sans-serif] leading-[30px] not-italic text-[20px] text-center text-nowrap text-white top-[427.68px] translate-x-[-50%] whitespace-pre" style={{ left: "calc(22.222% + 400.499px)" }}>
        <p className="mb-0">Cross-industry expertise and genuine partnership approach.</p>
        <p>{`We solve complex challenges others can't see.​`}</p>
      </div>
      <CtaButton />
    </div>
  );
}

function Frame2121450975() {
  return (
    <div className="absolute content-stretch flex flex-col items-start leading-[0] top-[897.44px] w-[299.825px]" style={{ left: "calc(77.778% - 87.825px)" }}>
      <div className="flex flex-col font-['Poppins:Regular',_sans-serif] h-[91px] justify-center not-italic relative shrink-0 text-[#11112b] text-[38px] w-[237px]">
        <p className="leading-[104.04px]">Trusted by</p>
      </div>
      <div className="font-['Space_Grotesk:Bold',_sans-serif] font-bold min-w-full relative shrink-0 text-[#234177] text-[0px] text-center" style={{ width: "min-content" }}>
        <p className="font-['Poppins:Bold',_sans-serif] leading-[104.04px] not-italic">
          <span className="text-[#234177] text-[90.799px]">1,000+</span>
          <span className="text-[45.399px]"> </span>
        </p>
      </div>
      <div className="flex flex-col font-['Poppins:Bold',_sans-serif] h-[81px] justify-center not-italic relative shrink-0 text-[#11112b] text-[38px] w-full">
        <p className="leading-[104.04px]">Clients</p>
      </div>
    </div>
  );
}

function WireframeVector1() {
  return (
    <div className="mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[1139.87px_679.943px] mask-size-[864.974px_450.371px] relative size-full pointer-events-none" data-name="Wireframe Vector" style={{ maskImage: `url('${imgWireframeVector}')` }}>
      <svg className="block size-full pointer-events-none" fill="none" preserveAspectRatio="none" viewBox="0 0 2651 1057">
        <g id="Wireframe Vector" opacity="0.25">
          <path d={svgPaths.p1a2e4a00} id="Vector" stroke="var(--stroke-0, #949494)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.588947" />
          <path d={svgPaths.p230b8b80} id="Vector_2" stroke="var(--stroke-0, #949494)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.588947" />
          <path d={svgPaths.pa63fb40} id="Vector_3" stroke="var(--stroke-0, #949494)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.588947" />
          <path d={svgPaths.p3919e600} id="Vector_4" stroke="var(--stroke-0, #949494)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.588947" />
          <path d={svgPaths.p28da9000} id="Vector_5" stroke="var(--stroke-0, #949494)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.588947" />
          <path d={svgPaths.p31862e00} id="Vector_6" stroke="var(--stroke-0, #949494)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.588947" />
          <path d={svgPaths.p4d7a180} id="Vector_7" stroke="var(--stroke-0, #949494)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.588947" />
          <path d={svgPaths.p2999ab80} id="Vector_8" stroke="var(--stroke-0, #949494)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.588947" />
          <path d={svgPaths.p3b4773c0} id="Vector_9" stroke="var(--stroke-0, #949494)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.588947" />
          <path d={svgPaths.p2d64a300} id="Vector_10" stroke="var(--stroke-0, #949494)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.588947" />
        </g>
      </svg>
    </div>
  );
}

function Background() {
  return (
    <div className="absolute contents inset-[9.65%_32.29%_84.99%_7.64%]" data-name="Background">
      <div className="absolute bg-white inset-[9.65%_32.29%_84.99%_7.64%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[864.974px_450.371px] rounded-[34.644px]" data-name="Background" style={{ maskImage: `url('${imgWireframeVector}')` }} />
      <div className="absolute flex inset-[1.57%_-24.42%_70.82%_-71.52%] items-center justify-center pointer-events-none">
        <div className="flex-none h-[1056.82px] rotate-[146.611deg] scale-y-[-100%] skew-x-[358.248deg] w-[2650.69px] pointer-events-none">
          <WireframeVector1 />
        </div>
      </div>
    </div>
  );
}

function Frame4646833() {
  return (
    <div className="box-border content-stretch flex gap-[35.928px] h-[80.839px] items-center px-[78.144px] py-0 relative shrink-0 w-[776.051px]">
      <div className="relative rounded-[7.186px] shrink-0 size-[80.839px]" data-name="twz-public-company-limited-non-voting--600">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[7.186px] size-full" src={imgTwzPublicCompanyLimitedNonVoting600} />
      </div>
      <div className="h-[80.944px] relative shrink-0 w-[84.321px]" data-name="Logo-TTW_">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLogoTtw} />
      </div>
      <div className="relative rounded-[7.186px] shrink-0 size-[80.839px]" data-name="images">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[7.186px] size-full" src={imgImages} />
      </div>
      <div className="relative rounded-[7.186px] shrink-0 size-[80.839px]" data-name="images (1) 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[7.186px] size-full" src={imgImages11} />
      </div>
      <div className="relative rounded-[7.186px] shrink-0 size-[80.839px]" data-name="293148232_575492820694395_5453848552403829958_n 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[7.186px] size-full" src={img2931482325754928206943955453848552403829958N1} />
      </div>
      <div className="relative rounded-[7.186px] shrink-0 size-[79.941px]" data-name="images">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[7.186px] size-full" src={imgImages1} />
      </div>
    </div>
  );
}

function Frame4646834() {
  return (
    <div className="content-stretch flex gap-[35.928px] h-[86.228px] items-center relative shrink-0 w-full">
      <div className="flex h-[38.938px] items-center justify-center relative shrink-0 w-[20.859px]">
        <div className="flex-none rotate-[90deg]">
          <div className="h-[20.861px] relative w-[38.94px]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39 21">
              <path d={svgPaths.p1c6fc900} fill="var(--fill-0, #11112B)" fillOpacity="0.5" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="h-[80.149px] relative shrink-0 w-[94.963px]" data-name="thomas-logo 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgThomasLogo1} />
      </div>
      <div className="h-[80.779px] relative rounded-[7.186px] shrink-0 w-[90.787px]" data-name="HotelOnce_1 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[7.186px]">
          <img alt="" className="absolute h-[138.35%] left-[-58.42%] max-w-none top-[-25.37%] w-[218.81%]" src={imgHotelOnce11} />
        </div>
      </div>
      <div className="h-[69.134px] relative shrink-0 w-[88.06px]" data-name="1595 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img15951} />
      </div>
      <div className="relative shrink-0 size-[86.228px]" data-name="1012062 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img10120621} />
      </div>
      <div className="relative rounded-[7.186px] shrink-0 size-[80.839px]" data-name="logo-color">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[7.186px] size-full" src={imgLogoColor} />
      </div>
      <div className="relative shrink-0 size-[80.839px]" data-name="OYO_Rooms_(logo)">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgOyoRoomsLogo} />
      </div>
      <div className="flex h-[38.938px] items-center justify-center relative shrink-0 w-[20.859px]">
        <div className="flex-none rotate-[90deg] scale-y-[-100%]">
          <div className="h-[20.861px] relative w-[38.94px]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39 21">
              <path d={svgPaths.p1c6fc900} fill="var(--fill-0, #11112B)" fillOpacity="0.5" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame4646836() {
  return (
    <div className="box-border content-stretch flex gap-[35.928px] h-[99.701px] items-center px-[55.689px] py-0 relative shrink-0 w-[2321.87px]">
      <div className="h-[58.557px] relative shrink-0 w-[109.581px]" data-name="Logo_of_the_Bank_of_Thailand_(2012).svg 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLogoOfTheBankOfThailand2012Svg1} />
      </div>
      <div className="relative rounded-[7.186px] shrink-0 size-[80.839px]" data-name="images 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[7.186px] size-full" src={imgImages2} />
      </div>
      <div className="relative rounded-[7.186px] shrink-0 size-[80.839px]" data-name="images (1) 2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[7.186px] size-full" src={imgImages12} />
      </div>
      <div className="relative shrink-0 size-[80.839px]" data-name="cropped-coco_top_logo@2x 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgCroppedCocoTopLogo2X1} />
      </div>
      <div className="relative rounded-[7.186px] shrink-0 size-[80.839px]" data-name="images (5) 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[7.186px] size-full" src={imgImages51} />
      </div>
      <div className="relative rounded-[7.186px] shrink-0 size-[79.941px]" data-name="images (1)">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[7.186px] size-full" src={imgImages3} />
      </div>
    </div>
  );
}

function Frame2121450974() {
  // ใช้โครงสร้างโฟลเดอร์: /src/assets/logo/<set>/<col>/* โดยไม่วัดความกว้าง
  const setNames = useMemo(() => getLogoSetNames(), []);
  const sets = useMemo(() => setNames.map((name) => getLogoSetColumns(name)), [setNames]);

  const [index, setIndex] = useState(0);
  const allRows: string[][][] = useMemo(() => {
    return (sets ?? []).map((cols) => [cols[0] ?? [], cols[1] ?? [], cols[2] ?? []]);
  }, [sets]);

  useEffect(() => {
    if (!sets.length) {
      if (index !== 0) setIndex(0);
      return;
    }
    if (index > sets.length - 1) {
      setIndex(sets.length - 1);
    }
  }, [sets, index]);

  const canPrev = sets.length > 1;
  const handlePrev = () => {
    if (!canPrev) return;
    setIndex((v) => (v - 1 + sets.length) % sets.length);
  };
  const handleNext = () => {
    if (!canPrev) return;
    setIndex((v) => (v + 1) % sets.length);
  };

  return (
    <div className="absolute left-[136.48px] top-[875.9px] w-[838.943px]">
      <div className="relative bg-white rounded-[34.644px] px-[32px] py-8 w-full overflow-hidden">
        <div className="mx-auto inline-block">
          <button aria-label="Previous logos" onClick={handlePrev} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 flex h-[38.938px] items-center justify-center w-[20.859px]">
            <div className="flex-none">
              <div className="h-[38.94px] w-[20.861px]" data-name="Vector">
                <svg className="block size-full" style={{ transform: "rotate(90deg)", width: "40px"  }} fill="none" preserveAspectRatio="none" viewBox="0 0 39 21">
                  <path d={svgPaths.p1c6fc900} fill="var(--fill-0, #11112B)" fillOpacity="0.5" id="Vector" />
                </svg>
              </div>
            </div>
          </button>

          <div className="overflow-hidden">
            <div className="flex transition-transform duration-500 ease-out" style={{ transform: `translateX(-${index * 100}%)` }}>
              {allRows.map((rows, sIdx) => (
                <div key={sIdx} className="w-full shrink-0">
                  <div className="content-stretch flex flex-col gap-[24px] items-stretch">
                    {rows.map((row, rIdx) => (
                      <div key={rIdx} className="box-border content-stretch flex gap-[24px] h-[86.228px] items-center w-full justify-center">
                        {row.map((url, i) => (
                          <div key={`${rIdx}-${i}`} className="relative shrink-0 w-[90px] h-[64px] flex items-center justify-center">
                            <img alt="logo" className="max-w-full max-h-full object-contain" src={url} />
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button aria-label="Next logos" onClick={handleNext} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 flex h-[38.938px] items-center justify-center w-[20.859px]">
            <div className="flex-none">
              <div className="h-[38.94px] w-[20.861px]" data-name="Vector">
                <svg className="block size-full" style={{ transform: "rotate(-90deg)", width: "40px" }} fill="none" preserveAspectRatio="none" viewBox="0 0 39 21">
                  <path d={svgPaths.p1c6fc900} fill="var(--fill-0, #11112B)" fillOpacity="0.5" id="Vector" />
                </svg>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

function AboutSection() {
  return (
    <div className="absolute contents left-0 top-[733px]" data-name="About Section">
      <div className="absolute bg-[#d5d9e5] bottom-[79.08%] left-0 right-[-33.33%] top-[8.71%]" data-name="Background" />
      <div className="absolute h-[684px] left-0 opacity-75 top-[733px] w-[1458px]" data-name="Background">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[247.5%] left-0 max-w-none top-[-40.22%] w-full" src={imgBackground1} />
        </div>
      </div>
      <Frame2121450975 />
      <Background />
      <Frame2121450974 />
    </div>
  );
}

function Group2085664661() {
  return (
    <div className="absolute contents left-[111px] top-[6024px]">
      <div className="absolute h-[80px] left-[111px] rounded-[15px] top-[6024px] w-[402px]" data-name="Rectangle">
        <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[15px]" />
      </div>
      <div className="absolute h-0 top-[6064px] w-[100px]" data-name="Arrow Icon" style={{ left: "calc(11.111% + 208px)" }}>
        <div className="absolute bottom-[-7.36px] left-0 right-[-1%] top-[-7.36px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 101 16">
            <path d={svgPaths.p2744e400} fill="var(--stroke-0, white)" id="Arrow Icon" />
          </svg>
        </div>
      </div>
      <div className="absolute font-['Poppins:SemiBold',_sans-serif] leading-[0] left-[151px] not-italic text-[16px] text-nowrap text-white top-[6051px]">
        <p className="leading-[26px] whitespace-pre">View More Case Studies</p>
      </div>
    </div>
  );
}

function CtaButton1() {
  return (
    <div className="absolute contents left-[111px] top-[6024px]" data-name="CTA Button">
      <Group2085664661 />
    </div>
  );
}

function ProjectsSection() {
  return (
    <div className="absolute contents left-0 top-[4885px]" data-name="Projects Section">
      <div className="absolute h-[2114px] left-0 opacity-25 top-[4885px] w-[1436px]" data-name="Background">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-[#d9d9d9] inset-0" />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgBackground2} />
          <div className="absolute bg-[#234177] inset-0" />
        </div>
      </div>
      {/* <CtaButton1 /> */}
      <div className="absolute font-['Poppins:Bold',_sans-serif] leading-[0] left-[112px] not-italic text-[75px] text-white top-[4984px] w-[513px]">
        <p className="leading-[82.432px]">Case Studies</p>
      </div>
    </div>
  );
}

function WireframeVector2() {
  return (
    <div className="h-[1725px] relative w-[3604px]" data-name="Wireframe Vector">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3604 1725">
        <g id="Wireframe Vector" opacity="0.25">
          <path d={svgPaths.p24b4ea00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.85" />
          <path d={svgPaths.p2e2e1400} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.85" />
          <path d={svgPaths.p28ac5260} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.85" />
          <path d={svgPaths.p3d098600} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.85" />
        </g>
      </svg>
    </div>
  );
}

function CtaSection() {
  return (
    <div className="absolute contents left-[-1396px] top-[6655px]" data-name="CTA Section">
      <div className="absolute flex h-[2733.661px] items-center justify-center left-[-1396px] top-[6655px] w-[3956.808px]">
        <div className="flex-none rotate-[162.406deg] scale-y-[-100%]">
          <WireframeVector2 />
        </div>
      </div>
      <div className="absolute size-[30px] top-[7332px]" data-name="Vector" style={{ left: "calc(88.889% - 24px)" }}>
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgVector} />
      </div>
      <div className="absolute left-[133px] size-[77px] top-[7659px]" data-name="Vector">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgVector} />
      </div>
    </div>
  );
}

function Frame2121450994() {
  return (
    <div className="content-stretch flex flex-col font-['Poppins:Regular',_sans-serif] gap-[8px] items-start leading-[0] not-italic relative shrink-0 text-[14px] text-white w-[63px]">
      <div className="min-w-full opacity-75 relative shrink-0" style={{ width: "min-content" }}>
        <p className="leading-[30px]">About Us</p>
      </div>
      <div className="opacity-75 relative shrink-0 text-nowrap">
        <p className="leading-[30px] whitespace-pre">Case Studies</p>
      </div>
      <div className="opacity-75 relative shrink-0 text-nowrap">
        <p className="leading-[30px] whitespace-pre">Pricing</p>
      </div>
      <div className="opacity-75 relative shrink-0 text-nowrap">
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

function Frame2121451001() {
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

function Frame2121451002() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col gap-[33px] items-start ml-0 mt-0 relative w-[145px]">
      <div className="font-['Poppins:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[24px] text-nowrap text-white">
        <p className="leading-[normal] whitespace-pre">Our Services</p>
      </div>
      <Frame2121451001 />
    </div>
  );
}

function Explore1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Explore">
      <Frame2121451002 />
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

function Frame2121451003() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[63px]">
      <Frame466 />
    </div>
  );
}

function Frame2121451004() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col gap-[33px] items-start ml-0 mt-0 relative w-[87px]">
      <div className="font-['Poppins:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[24px] text-nowrap text-white">
        <p className="leading-[normal] whitespace-pre">Follow Us</p>
      </div>
      <Frame2121451003 />
    </div>
  );
}

function Explore2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Explore">
      <Frame2121451004 />
    </div>
  );
}

function Frame2121450996() {
  return (
    <div className="absolute content-stretch flex gap-[78px] items-start leading-[0] top-[7932px]" style={{ left: "calc(55.556% + 43px)" }}>
      <Explore />
      <Explore1 />
      <Explore2 />
    </div>
  );
}

function Group2085664658() {
  return (
    <div className="absolute contents leading-[0] left-[213px] text-nowrap top-[172.67px]">
      <div className="absolute font-['Poppins:Bold',_sans-serif] not-italic text-[#a7c6ee] text-[77.333px] text-center top-[172.67px] translate-x-[-50%]" style={{ left: "calc(11.111% + 424px)" }}>
        <p className="leading-[normal] text-nowrap whitespace-pre">{`Technology That `}</p>
      </div>
      <div className="absolute font-['Poppins:Bold',_sans-serif] left-[213px] not-italic text-[125.683px] text-white top-[256.45px]">
        <p className="leading-[normal] text-nowrap whitespace-pre">Business Growth​</p>
      </div>
      <div className="absolute font-['Poppins:Light_Italic',_sans-serif] italic text-[77.333px] text-white top-[173px]" style={{ left: "calc(66.667% - 19px)" }}>
        <p className="leading-[normal] text-nowrap whitespace-pre">Drives</p>
      </div>
    </div>
  );
}

function Frame2121451033() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[20.719px] h-[81px] items-center p-0 relative shrink-0 w-[145px]">
      <div className="relative shrink-0 h-full w-full flex items-center justify-center" data-name="odoo_logo 1">
        <img alt="" className="block max-h-full w-auto object-contain pointer-events-none" src={imgOdooLogo1} />
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="[grid-area:1_/_1] h-[45.393px] ml-0 mt-[0.001%] relative w-[39.977px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 46">
        <g id="Group">
          <path d={svgPaths.p1c7cb500} fill="var(--fill-0, #95BF47)" id="Vector" />
          <g id="Group_2">
            <path d={svgPaths.p2b507200} fill="var(--fill-0, #5E8E3E)" id="Vector_2" />
            <path d={svgPaths.p29690ff0} fill="var(--fill-0, white)" id="Vector_3" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="[grid-area:1_/_1] h-[37.581px] ml-[28.44%] mt-[19.246%] relative w-[116.574px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 117 38">
        <g id="Group">
          <path d={svgPaths.p84f680} fill="var(--fill-0, white)" id="s_4_" />
          <path d={svgPaths.p5086770} fill="var(--fill-0, white)" id="h_4_" />
          <path d={svgPaths.p2edc3580} fill="var(--fill-0, white)" id="o_4_" />
          <path d={svgPaths.p2733040} fill="var(--fill-0, white)" id="p_4_" />
          <path d={svgPaths.p205d1c0} fill="var(--fill-0, white)" id="dot_4_" />
          <path d={svgPaths.pe766a00} fill="var(--fill-0, white)" id="i_4_" />
          <path d={svgPaths.p293d3d80} fill="var(--fill-0, white)" id="f_4_" />
          <path d={svgPaths.p1d36ba00} fill="var(--fill-0, white)" id="y_4_" />
        </g>
      </svg>
    </div>
  );
}

function Group3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Group">
      <Group1 />
      <Group2 />
    </div>
  );
}

function D9340911Ca8C679B148Dd4A205Ad2Ffa1() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[11.917px] items-center justify-center overflow-clip pb-[14.083px] pt-[10.833px] px-0 relative shrink-0 w-[208px]" data-name="d9340911ca8c679b148dd4a205ad2ffa 1">
      <Group3 />
    </div>
  );
}

function Frame4646718() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
      <div className="h-[89px] relative shrink-0 w-[163px]" data-name="partner_paysolutions 2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPartnerPaysolutions2} />
      </div>
      <div className="relative shrink-0 size-[98px]" data-name="partner_kiu 2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPartnerKiu2} />
      </div>
      <div className="h-[81px] relative shrink-0 w-[177.562px]" data-name="Screen Shot 2568-07-11 at 17.23.43 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[125.58%] left-0 max-w-none top-[-12.79%] w-full" src={imgScreenShot25680711At1723432} />
        </div>
      </div>
      <div className="h-[92px] relative shrink-0 w-[212.75px]" data-name="Screen Shot 2568-07-11 at 17.23.48 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-6.39%] max-w-none top-0 w-[112.9%]" src={imgScreenShot25680711At1723482} />
        </div>
      </div>
      <Frame2121451033 />
      <D9340911Ca8C679B148Dd4A205Ad2Ffa1 />
      <div className="h-[91px] relative shrink-0 w-[165px]" data-name="Screen_Shot_2568-07-11_at_17.23.57-removebg-preview 2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgScreenShot25680711At172357RemovebgPreview2} />
      </div>
    </div>
  );
}

function Frame550() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-center top-[6977px] translate-x-[-50%]" style={{ left: "calc(50% + 0.156px)" }}>
      <div className="font-['Poppins:Bold',_sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#11112b] text-[38px] text-center" style={{ width: "min-content" }}>
        <p className="leading-[normal]">Our Partners</p>
      </div>
      <Frame4646718 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute bottom-[8.4%] left-0 right-0 top-[8.4%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 34">
        <g id="Group">
          <path d={svgPaths.pc000900} fill="var(--fill-0, #11112B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute bottom-[8.4%] contents left-0 right-0 top-[8.4%]" data-name="Group">
      <Group4 />
    </div>
  );
}

function ArrowIcon() {
  return (
    <div className="opacity-25 overflow-clip relative size-[40px]" data-name="Arrow Icon">
      <Group5 />
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-0 mt-0 place-items-start relative" data-name="Mask group">
      <div className="[grid-area:1_/_1] h-[531px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[382.515px_513.869px] ml-0 mt-0 relative rounded-[8px] w-[413px]" style={{ maskImage: `url('${imgRectangle353}')` }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
          <img alt="" className="absolute h-[98.23%] left-[-10.91%] max-w-none top-[-1.25%] w-[126.3%]" src={imgRectangle354} />
        </div>
      </div>
      <div className="[grid-area:1_/_1] bg-[#181818] h-[175px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[24.932px_-356.967px] mask-size-[382.515px_513.869px] ml-[-24.932px] mt-[356.967px] w-[419px]" style={{ maskImage: `url('${imgRectangle353}')` }} />
    </div>
  );
}

function SolarArrowRightOutline() {
  return <div className="shrink-0 size-[15.409px]" data-name="solar:arrow-right-outline" />;
}

function Frame4646791() {
  return (
    <div className="content-stretch flex gap-[2.568px] items-end justify-end relative shrink-0">
      <div className="font-['Poppins:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[9.726px] text-nowrap text-white">
        <p className="leading-[1.5] whitespace-pre">09/07/2025</p>
      </div>
      <SolarArrowRightOutline />
    </div>
  );
}

function Frame2121450976() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col gap-[2.568px] h-[150px] items-start ml-[27px] mt-[357px] relative w-[332px]">
      <div className="font-['Poppins:Bold',_sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[20px] text-white" style={{ width: "min-content" }}>
        <p className="leading-[normal]">{`SourceCode joins Travel & Tech 2025`}</p>
      </div>
      <div className="font-['Poppins:Regular',_sans-serif] h-[44px] leading-[0] not-italic relative shrink-0 text-[10.711px] text-white w-full">
        <p className="leading-[14.435px]">{`SourceCode presented Hotel Solutions and Sightbot at the first Travel & Tech exhibition at QSNCC on the 2nd and 3rd of July.`}</p>
      </div>
      <Frame4646791 />
    </div>
  );
}

function Item1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Item 1">
      <MaskGroup />
      <div className="[grid-area:1_/_1] font-['Poppins:Regular',_sans-serif] h-[20.35px] leading-[0] ml-[59.011px] mt-[23.032px] not-italic relative text-[9.623px] text-black text-center translate-x-[-50%] w-[64.848px]">
        {/* <p className="leading-[14.435px] whitespace-pre-wrap">{`0 3   /   2 0 2 3`}</p> */}
      </div>
      <div className="[grid-area:1_/_1] backdrop-blur-[12.029px] backdrop-filter bg-gradient-to-b from-[rgba(255,255,255,0.3)] h-[185px] ml-0 mt-[328.967px] relative rounded-[24.058px] to-[rgba(255,255,255,0.1)] w-[383px]" data-name="Rectangle">
        <div aria-hidden="true" className="absolute border-[0.481px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[24.058px]" />
      </div>
      <Frame2121450976 />
    </div>
  );
}

function MaskGroup1() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-0 mt-0 place-items-start relative" data-name="Mask group">
      <div className="[grid-area:1_/_1] h-[531px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[382.515px_513.869px] ml-0 mt-0 relative rounded-[8px] w-[413px]" style={{ maskImage: `url('${imgRectangle353}')` }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
          <img alt="" className="absolute h-[98.23%] left-[-10.91%] max-w-none top-[-1.25%] w-[126.3%]" src={imgRectangle354} />
        </div>
      </div>
      <div className="[grid-area:1_/_1] h-[364px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[29.932px_0px] mask-size-[382.515px_513.869px] ml-[-29.932px] mt-0 relative rounded-[8px] w-[413px]" style={{ maskImage: `url('${imgRectangle353}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full" src={imgRectangle355} />
      </div>
      <div className="[grid-area:1_/_1] bg-[#5a4c49] h-[175px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[24.932px_-357px] mask-size-[382.515px_513.869px] ml-[-24.932px] mt-[357px] w-[419px]" style={{ maskImage: `url('${imgRectangle353}')` }} />
    </div>
  );
}

function SolarArrowRightOutline1() {
  return <div className="shrink-0 size-[15.409px]" data-name="solar:arrow-right-outline" />;
}

function Frame4646792() {
  return (
    <div className="content-stretch flex gap-[2.568px] items-end justify-end relative shrink-0">
      <div className="font-['Poppins:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[9.726px] text-nowrap text-white">
        <p className="leading-[1.5] whitespace-pre">09/07/2025</p>
      </div>
      <SolarArrowRightOutline1 />
    </div>
  );
}

function Frame2121450977() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col gap-[2.568px] h-[150px] items-start ml-[26.587px] mt-[327px] relative w-[332px]">
      <div className="font-['Poppins:Bold',_sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[20px] text-white" style={{ width: "min-content" }}>
        <p className="leading-[normal]">MOU Signing Between SourceCode, Cogniser (Thailand), and Guangzhou CAS Cogniser Technology</p>
      </div>
      <div className="font-['Poppins:Regular',_sans-serif] h-[43px] leading-[0] not-italic relative shrink-0 text-[10.711px] text-white w-full">
        <p className="leading-[14.435px]">SourceCode signed a strategic partnership with Cogniser to bring the latest AI solutions to business and elevate their experience.</p>
      </div>
      <Frame4646792 />
    </div>
  );
}

function Item7() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Item 7">
      <MaskGroup1 />
      <div className="[grid-area:1_/_1] font-['Poppins:Regular',_sans-serif] h-[20.35px] leading-[0] ml-[59.011px] mt-[23.032px] not-italic relative text-[9.623px] text-black text-center translate-x-[-50%] w-[64.848px]">
        {/* <p className="leading-[14.435px] whitespace-pre-wrap">{`0 3   /   2 0 2 3`}</p> */}
      </div>
      <div className="[grid-area:1_/_1] backdrop-blur-[12.029px] backdrop-filter bg-gradient-to-b from-[rgba(255,255,255,0.3)] h-[211px] ml-0 mt-[303px] relative rounded-[24.058px] to-[rgba(255,255,255,0.1)] w-[383px]" data-name="Rectangle">
        <div aria-hidden="true" className="absolute border-[0.481px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[24.058px]" />
      </div>
      <Frame2121450977 />
    </div>
  );
}

function MaskGroup2() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-0 mt-0 place-items-start relative" data-name="Mask group">
      <div className="[grid-area:1_/_1] h-[531px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[382.515px_513.869px] ml-0 mt-0 relative rounded-[8px] w-[413px]" style={{ maskImage: `url('${imgRectangle353}')` }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
          <img alt="" className="absolute h-[98.23%] left-[-10.91%] max-w-none top-[-1.25%] w-[126.3%]" src={imgRectangle354} />
        </div>
      </div>
      <div className="[grid-area:1_/_1] h-[346px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-0.137px_0px] mask-size-[382.515px_513.869px] ml-[0.137px] mt-0 relative rounded-[8px] w-[413px]" style={{ maskImage: `url('${imgRectangle353}')` }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
          <img alt="" className="absolute h-[159.12%] left-0 max-w-none top-[-29.56%] w-full" src={imgRectangle356} />
        </div>
      </div>
      <div className="[grid-area:1_/_1] bg-[#403836] h-[210px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[25px_-321.996px] mask-size-[382.515px_513.869px] ml-[-25px] mt-[321.996px] w-[419px]" style={{ maskImage: `url('${imgRectangle353}')` }} />
    </div>
  );
}

function SolarArrowRightOutline2() {
  return <div className="shrink-0 size-[15.409px]" data-name="solar:arrow-right-outline" />;
}

function Frame4646793() {
  return (
    <div className="content-stretch flex gap-[2.568px] items-end justify-end relative shrink-0">
      <div className="font-['Poppins:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[9.726px] text-nowrap text-white">
        <p className="leading-[1.5] whitespace-pre">09/07/2025</p>
      </div>
      <SolarArrowRightOutline2 />
    </div>
  );
}

function Frame2121451005() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col gap-[2.568px] h-[150px] items-start ml-[26.587px] mt-[326.992px] relative w-[332px]">
      <div className="font-['Poppins:Bold',_sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[20px] text-white" style={{ width: "min-content" }}>
        <p className="leading-[normal]">SourceCode at Partner Power Up 2025 Smart Living, Smart Business</p>
      </div>
      <div className="font-['Poppins:Regular',_sans-serif] h-[44px] leading-[0] not-italic relative shrink-0 text-[10.711px] text-white w-full">
        <p className="leading-[14.435px]">Our CTO, Kachane Sittichoke shared about AI Support Solution at Partner Power Up 2025 Smart Living, Smart Business hosted by TP Link.</p>
      </div>
      <Frame4646793 />
    </div>
  );
}

function Item8() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Item 8">
      <MaskGroup2 />
      <div className="[grid-area:1_/_1] font-['Poppins:Regular',_sans-serif] h-[20.35px] leading-[0] ml-[59.011px] mt-[23.032px] not-italic relative text-[9.623px] text-black text-center translate-x-[-50%] w-[64.848px]">
        {/* <p className="leading-[14.435px] whitespace-pre-wrap">{`0 3   /   2 0 2 3`}</p> */}
      </div>
      <div className="[grid-area:1_/_1] backdrop-blur-[12.029px] backdrop-filter bg-gradient-to-b from-[rgba(255,255,255,0.3)] h-[208px] ml-0 mt-[305.996px] relative rounded-[24.058px] to-[rgba(255,255,255,0.1)] w-[383px]" data-name="Rectangle">
        <div aria-hidden="true" className="absolute border-[0.481px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[24.058px]" />
      </div>
      <Frame2121451005 />
    </div>
  );
}

function Frame2121450991() {
  return (
    <div className="content-stretch flex gap-[33px] items-center leading-[0] relative shrink-0">
      <Item1 />
      <Item7 />
      <Item8 />
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute bottom-[8.4%] left-0 right-0 top-[8.4%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 34">
        <g id="Group">
          <path d={svgPaths.pc000900} fill="var(--fill-0, #11112B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute bottom-[8.4%] contents left-0 right-0 top-[8.4%]" data-name="Group">
      <Group6 />
    </div>
  );
}

function ArrowIcon1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[40px]" data-name="Arrow Icon">
      <Group7 />
    </div>
  );
}

function Frame2121450992() {
  return (
    <div className="absolute content-stretch flex gap-[39px] items-center left-[36px] top-[6398px]">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg]">
          <ArrowIcon />
        </div>
      </div>
      <Frame2121450991 />
      <ArrowIcon1 />
    </div>
  );
}

function Group2085664665() {
  return (
    <div className="absolute contents left-[-242px] top-[6192px]">
      <div className="absolute bg-[#d5d9e5] h-[1000px] left-[-242px] top-[6192px] w-[1920px]" data-name="Rectangle" />
      <Frame550 />
      <Frame2121450992 />
      <div className="absolute font-['Poppins:Bold',_sans-serif] leading-[0] left-[378.5px] not-italic text-[#11112b] text-[75px] text-center text-nowrap top-[6273px] translate-x-[-50%]">
        <p className="leading-[82.432px] whitespace-pre">Recent Stories</p>
      </div>
    </div>
  );
}

function Group2085664659() {
  return (
    <div className="absolute inset-[0.49%_-11.63%_83.79%_-74.86%] pointer-events-none">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2686 1324">
        <g id="Group 2085664659" opacity="0.33">
          <path d={svgPaths.p25270580} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.760125" />
          <path d={svgPaths.p20638800} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.760125" />
          <path d={svgPaths.p2b412490} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.760125" />
          <path d={svgPaths.p2620eb00} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.760125" />
          <path d={svgPaths.p18ff4b00} id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.760125" />
          <path d={svgPaths.peee160} id="Vector_6" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.760125" />
          <path d={svgPaths.p24abfe80} id="Vector_7" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.760125" />
          <path d={svgPaths.p10d91b00} id="Vector_8" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.760125" />
          <path d={svgPaths.p1f1f3c00} id="Vector_9" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.760125" />
          <path d={svgPaths.p3b367580} id="Vector_10" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.760125" />
        </g>
      </svg>
    </div>
  );
}

function SolarArrowRightOutline3() {
  return (
    <div className="relative shrink-0 size-[20.142px]" data-name="solar:arrow-right-outline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
        <g id="solar:arrow-right-outline">
          <path clipRule="evenodd" d={svgPaths.p322cf00} fill="var(--fill-0, #171717)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame4646794() {
  return (
    <div className="content-stretch flex gap-[3.357px] items-end justify-end relative shrink-0">
      <div className="font-['Poppins:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[12.712px] text-neutral-900 text-nowrap">
        <p className="leading-[1.5] whitespace-pre">{`Learn More `}</p>
      </div>
      <SolarArrowRightOutline3 />
    </div>
  );
}

function Frame2121451006() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col gap-[3.357px] h-[167.007px] items-start ml-[34.752px] mt-[475.738px] relative w-[434.721px]">
      <div className="font-['Poppins:Bold',_sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#11112b] text-[34.505px]" style={{ width: "min-content" }}>
        <p className="leading-[normal]">AI Solutions</p>
      </div>
      <div className="font-['Poppins:Regular',_sans-serif] h-[94.833px] leading-[0] not-italic relative shrink-0 text-[#11112b] text-[14px] w-full">
        <p className="leading-[18.867px]">Transform your operations with intelligent automation. From workflow optimisation to analytics intelligence and smart hardware like AI CCTV systems — we implement AI solutions that drive efficiency across any industry.</p>
      </div>
      {/* <Frame4646794 /> */}
    </div>
  );
}

function Item9() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-[201.627px] mt-[246.688px] place-items-start relative" data-name="Item 1">
      <div className="[grid-area:1_/_1] h-[671.672px] ml-0 mt-0 relative rounded-[31.445px] w-[499.98px]" data-name="Image Placeholder">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[31.445px]">
          <div className="absolute bg-[#d9d9d9] inset-0 rounded-[31.445px]" />
          <div className="absolute inset-0 overflow-hidden rounded-[31.445px]">
            <img alt="" className="absolute h-[114.9%] left-[-10.81%] max-w-none top-[-5.2%] w-[114.48%]" src={imgImagePlaceholder} />
          </div>
        </div>
      </div>
      <div className="[grid-area:1_/_1] font-['Poppins:Regular',_sans-serif] h-[26.6px] ml-[77.133px] mt-[30.105px] not-italic relative text-[12.578px] text-black text-center translate-x-[-50%] w-[84.762px]">
        {/* <p className="leading-[18.867px] whitespace-pre-wrap">{`0 3   /   2 0 2 3`}</p> */}
      </div>
      <div className="[grid-area:1_/_1] backdrop-blur-[15.723px] backdrop-filter bg-gradient-to-b from-[rgba(255,255,255,0.3)] h-[240.859px] ml-[0.344px] mt-[430.523px] relative rounded-[31.445px] to-[rgba(255,255,255,0.1)] w-[500.181px]" data-name="Rectangle">
        <div aria-hidden="true" className="absolute border-[0.629px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[31.445px]" />
      </div>
      <Frame2121451006 />
    </div>
  );
}

function SolarArrowRightOutline4() {
  return (
    <div className="relative shrink-0 size-[20.142px]" data-name="solar:arrow-right-outline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
        <g id="solar:arrow-right-outline">
          <path clipRule="evenodd" d={svgPaths.p27fe5800} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame4646795() {
  return (
    <div className="content-stretch flex gap-[3.357px] items-end justify-end relative shrink-0">
      <div className="font-['Poppins:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[12.712px] text-nowrap text-white">
        <p className="leading-[1.5] whitespace-pre">{`Learn More `}</p>
      </div>
      <SolarArrowRightOutline4 />
    </div>
  );
}

function Frame2121451007() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col gap-[3.357px] h-[167.007px] items-start ml-[34.752px] mt-[475.738px] relative w-[434.721px]">
      <div className="font-['Poppins:Bold',_sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[34.505px] text-white" style={{ width: "min-content" }}>
        <p className="leading-[normal]">Hotel Solutions</p>
      </div>
      <div className="font-['Poppins:Regular',_sans-serif] h-[94.833px] leading-[0] not-italic relative shrink-0 text-[14px] text-white w-full">
        <p className="leading-[18.867px]">Complete IT ecosystem for hospitality and tourism. From network infrastructure to CRM and AI security systems—one expert team handles everything from guest-facing technology to back-office management.​</p>
      </div>
      <Frame4646795 />
    </div>
  );
}

function Item5() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-[730.475px] mt-[140px] place-items-start relative" data-name="Item 5">
      <div className="[grid-area:1_/_1] h-[671.672px] ml-0 mt-0 relative rounded-[31.445px] w-[499.98px]" data-name="Image Placeholder">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[31.445px]">
          <div className="absolute bg-[#d9d9d9] inset-0 rounded-[31.445px]" />
          <div className="absolute inset-0 overflow-hidden rounded-[31.445px]">
            <img alt="" className="absolute h-[114.9%] left-[-19.73%] max-w-none top-[-11.84%] w-[232.95%]" src={imgImagePlaceholder1} />
          </div>
        </div>
      </div>
      <div className="[grid-area:1_/_1] font-['Poppins:Regular',_sans-serif] h-[26.6px] ml-[77.133px] mt-[30.105px] not-italic relative text-[12.578px] text-black text-center translate-x-[-50%] w-[84.762px]">
        {/* <p className="leading-[18.867px] whitespace-pre-wrap">{`0 3   /   2 0 2 3`}</p> */}
      </div>
      <div className="[grid-area:1_/_1] backdrop-blur-[15.723px] backdrop-filter bg-gradient-to-b from-[rgba(255,255,255,0.3)] h-[240.859px] ml-[0.344px] mt-[430.42px] relative rounded-[31.445px] to-[rgba(255,255,255,0.1)] w-[500.181px]" data-name="Rectangle">
        <div aria-hidden="true" className="absolute border-[0.629px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[31.445px]" />
      </div>
      <Frame2121451007 />
    </div>
  );
}

function Item10() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid not-italic place-items-start relative shrink-0 text-[#a7c6ee] text-nowrap" data-name="Item 1">
      <div className="[grid-area:1_/_1] font-['Poppins:Bold',_sans-serif] ml-0 mt-0 relative text-[77.14px]">
        <p className="leading-[84.854px] text-nowrap whitespace-pre">20</p>
      </div>
      <div className="[grid-area:1_/_1] font-['Poppins:SemiBold',_sans-serif] ml-0 mt-[103.367px] relative text-[24.685px]">
        <p className="leading-[30.856px] text-nowrap whitespace-pre">Years</p>
      </div>
    </div>
  );
}

function Item2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid not-italic place-items-start relative shrink-0 text-[#a7c6ee] text-nowrap" data-name="Item 2">
      <div className="[grid-area:1_/_1] font-['Poppins:Bold',_sans-serif] ml-0 mt-0 relative text-[77.14px]">
        <p className="leading-[84.854px] text-nowrap whitespace-pre">1K+</p>
      </div>
      <div className="[grid-area:1_/_1] font-['Poppins:SemiBold',_sans-serif] ml-0 mt-[103.367px] relative text-[24.685px]">
        <p className="leading-[30.856px] text-nowrap whitespace-pre">Clients</p>
      </div>
    </div>
  );
}

function Item3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid not-italic place-items-start relative shrink-0 text-[#a7c6ee] text-nowrap" data-name="Item 3">
      <div className="[grid-area:1_/_1] font-['Poppins:Bold',_sans-serif] ml-0 mt-0 relative text-[77.14px]">
        <p className="leading-[84.854px] text-nowrap whitespace-pre">3K+</p>
      </div>
      <div className="[grid-area:1_/_1] font-['Poppins:SemiBold',_sans-serif] ml-0 mt-[103.367px] relative text-[24.685px]">
        <p className="leading-[30.856px] text-nowrap whitespace-pre">Project</p>
      </div>
    </div>
  );
}

function Numbers() {
  return (
    <div className="content-stretch flex gap-[49px] items-start leading-[0] relative shrink-0 w-[469px]" data-name="Numbers">
      <Item10 />
      <Item2 />
      <Item3 />
    </div>
  );
}

function Frame2121451010() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col gap-[44px] items-start ml-[109px] mt-[1823px] relative w-[747px]">
      <div className="font-['Poppins:Bold',_sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[75px] text-white" style={{ width: "min-content" }}>
        <p className="leading-[82.432px]">Why SourceCode?</p>
      </div>
      <div className="font-['Poppins:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#a7c6ee] text-[38px] w-[541px]">
        <p className="leading-[normal]">Twenty years across industries taught us every business is unique</p>
      </div>
      <div className="font-['Poppins:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[20px] text-white w-[660px]">
        <p className="leading-[30px]">We become your trusted technology partner, consolidating vendors while delivering expert support from people who understand your operations.</p>
      </div>
      <Numbers />
    </div>
  );
}

function SolarArrowRightOutline5() {
  return (
    <div className="relative shrink-0 size-[20.142px]" data-name="solar:arrow-right-outline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
        <g id="solar:arrow-right-outline">
          <path clipRule="evenodd" d={svgPaths.p541a600} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame4646796() {
  return (
    <div className="content-stretch flex gap-[3.357px] items-end justify-end relative shrink-0">
      <div className="font-['Poppins:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[12.712px] text-nowrap text-white">
        <p className="leading-[1.5] whitespace-pre">{`Learn More `}</p>
      </div>
      <SolarArrowRightOutline5 />
    </div>
  );
}

function Frame2121451011() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col gap-[3.357px] h-[167.007px] items-start ml-[34.549px] mt-[475.844px] relative w-[433.043px]">
      <div className="font-['Poppins:Bold',_sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[34.505px] text-white" style={{ width: "min-content" }}>
        <p className="leading-[normal]">Business Solutions​</p>
      </div>
      <div className="font-['Poppins:Regular',_sans-serif] h-[94.833px] leading-[0] not-italic relative shrink-0 text-[14px] text-white w-full">
        <p className="leading-[18.867px]">{`Custom software development when SaaS isn't enough. We build proprietary solutions for security-conscious businesses, delivering source code and white-label projects that meet your exact requirements.​`}</p>
      </div>
      {/* <Frame4646796 /> */}
    </div>
  );
}

function Item6() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-[209.627px] mt-[951.57px] place-items-start relative" data-name="Item 6">
      <div className="[grid-area:1_/_1] h-[671.672px] ml-0 mt-0 relative rounded-[31.445px] w-[499.98px]" data-name="Image Placeholder">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[31.445px]">
          <div className="absolute bg-[#d9d9d9] inset-0 rounded-[31.445px]" />
          <div className="absolute inset-0 overflow-hidden rounded-[31.445px]">
            <img alt="" className="absolute h-[114.9%] left-[-10.81%] max-w-none top-[-5.2%] w-[114.48%]" src={imgImagePlaceholder} />
          </div>
          <div className="absolute inset-0 overflow-hidden rounded-[31.445px]">
            <img alt="" className="absolute h-[122.45%] left-[-131.86%] max-w-none top-[-21.31%] w-[298.18%]" src={imgImagePlaceholder2} />
          </div>
        </div>
      </div>
      <div className="[grid-area:1_/_1] font-['Poppins:Regular',_sans-serif] h-[26.6px] ml-[77.133px] mt-[30.105px] not-italic relative text-[12.578px] text-black text-center translate-x-[-50%] w-[84.762px]">
        {/* <p className="leading-[18.867px] whitespace-pre-wrap">{`0 3   /   2 0 2 3`}</p> */}
      </div>
      <div className="[grid-area:1_/_1] backdrop-blur-[15.723px] backdrop-filter bg-gradient-to-b from-[rgba(255,255,255,0.3)] h-[240.859px] ml-[0.344px] mt-[430.523px] relative rounded-[31.445px] to-[rgba(255,255,255,0.1)] w-[500.181px]" data-name="Rectangle">
        <div aria-hidden="true" className="absolute border-[0.629px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[31.445px]" />
      </div>
      <Frame2121451011 />
    </div>
  );
}

function SolarArrowRightOutline6() {
  return (
    <div className="relative shrink-0 size-[20.142px]" data-name="solar:arrow-right-outline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
        <g id="solar:arrow-right-outline">
          <path clipRule="evenodd" d={svgPaths.p38d8af00} fill="var(--fill-0, #171717)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame4646797() {
  return (
    <div className="content-stretch flex gap-[3.357px] items-end justify-end relative shrink-0">
      <div className="font-['Poppins:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[12.712px] text-neutral-900 text-nowrap">
        <p className="leading-[1.5] whitespace-pre">{`Learn More `}</p>
      </div>
      <SolarArrowRightOutline6 />
    </div>
  );
}

function Frame2121451012() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col gap-[3.357px] h-[167.007px] items-start ml-[34.549px] mt-[475.844px] relative w-[433.043px]">
      <div className="font-['Poppins:Bold',_sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#11112b] text-[34.505px]" style={{ width: "min-content" }}>
        <p className="leading-[normal]">Sightbot</p>
      </div>
      <div className="font-['Poppins:Regular',_sans-serif] h-[94.833px] leading-[0] not-italic relative shrink-0 text-[#11112b] text-[14px] w-full">
        <p className="leading-[18.867px]">AI-powered digital telescope delivering unprecedented magnification and clarity. Perfect for tourism venues seeking to enhance sightseeing experiences and shooting ranges requiring superior long -range precision capabilities.</p>
      </div>
      {/* <Frame4646797 /> */}
    </div>
  );
}

function Item4() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-[732px] mt-[844.883px] place-items-start relative" data-name="Item 4">
      <div className="[grid-area:1_/_1] h-[671.672px] ml-0 mt-0 relative rounded-[31.445px] w-[499.98px]" data-name="Image Placeholder">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[31.445px]">
          <div className="absolute bg-[#d9d9d9] inset-0 rounded-[31.445px]" />
          <div className="absolute inset-0 overflow-hidden rounded-[31.445px]">
            <img alt="" className="absolute h-[84.54%] left-[-33.62%] max-w-none top-[-2.69%] w-[152.71%]" src={imgImagePlaceholder3} />
          </div>
        </div>
      </div>
      <div className="[grid-area:1_/_1] bg-white h-[160.293px] ml-[0.141px] mt-[511.092px] rounded-[41.962px] w-[500.181px]" />
      <div className="[grid-area:1_/_1] font-['Poppins:Regular',_sans-serif] h-[26.6px] ml-[77.133px] mt-[30.107px] not-italic relative text-[12.578px] text-black text-center translate-x-[-50%] w-[84.762px]">
        {/* <p className="leading-[18.867px] whitespace-pre-wrap">{`0 3   /   2 0 2 3`}</p> */}
      </div>
      <div className="[grid-area:1_/_1] backdrop-blur-[15.723px] backdrop-filter bg-gradient-to-b from-[rgba(255,255,255,0.3)] h-[240.859px] ml-[0.344px] mt-[430.525px] relative rounded-[31.445px] to-[rgba(255,255,255,0.1)] w-[500.181px]" data-name="Rectangle">
        <div aria-hidden="true" className="absolute border-[0.629px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[31.445px]" />
      </div>
      <Frame2121451012 />
    </div>
  );
}

function StreamlinePlumpDeepfakeTechnology1Remix() {
  return (
    <div className="[grid-area:1_/_1] ml-[30px] mt-[34px] relative size-[40px]" data-name="streamline-plump:deepfake-technology-1-remix">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="streamline-plump:deepfake-technology-1-remix">
          <path clipRule="evenodd" d={svgPaths.p3e532900} fill="var(--fill-0, #F1F5F9)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Item11() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[100px] mt-0 place-items-start relative" data-name="Item 4">
      <div className="[grid-area:1_/_1] backdrop-blur-[2.305px] backdrop-filter bg-gradient-to-b from-[rgba(255,255,255,0.3)] h-[233.311px] ml-0 mt-0 relative rounded-[20px] to-[rgba(255,255,255,0.1)] w-[237px]" data-name="Rectangle">
        <div aria-hidden="true" className="absolute border-[0.461px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      </div>
      <StreamlinePlumpDeepfakeTechnology1Remix />
      <div className="[grid-area:1_/_1] font-['Poppins:Regular',_sans-serif] leading-[0] ml-[30px] mt-[117px] not-italic relative text-[20px] text-white w-[194px]">
        <p className="leading-[30px]">One expert team for all technology needs​</p>
      </div>
    </div>
  );
}

function StreamlineAiTechnologySparkSolid() {
  return (
    <div className="[grid-area:1_/_1] ml-[28px] mt-[28px] relative size-[40px]" data-name="streamline:ai-technology-spark-solid">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g clipPath="url(#clip0_0_750)" id="streamline:ai-technology-spark-solid">
          <path clipRule="evenodd" d={svgPaths.p29886a00} fill="var(--fill-0, #F1F5F9)" fillRule="evenodd" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_750">
            <rect fill="white" height="40" width="40" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Item12() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[458px] place-items-start relative" data-name="Item 6">
      <div className="[grid-area:1_/_1] backdrop-blur-[2.179px] backdrop-filter bg-gradient-to-b from-[rgba(255,255,255,0.3)] h-[220.514px] ml-0 mt-0 relative rounded-[20px] to-[rgba(255,255,255,0.1)] w-[224px]" data-name="Rectangle">
        <div aria-hidden="true" className="absolute border-[0.436px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      </div>
      <StreamlineAiTechnologySparkSolid />
      <div className="[grid-area:1_/_1] font-['Poppins:Regular',_sans-serif] leading-[0] ml-[28px] mt-[105px] not-italic relative text-[20px] text-white w-[183px]">
        <p className="leading-[30px]">Dedicated support team with clear SLAs​</p>
      </div>
    </div>
  );
}

function JamComputerF() {
  return (
    <div className="[grid-area:1_/_1] ml-[28px] mt-[28px] relative size-[40px]" data-name="jam:computer-f">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="jam:computer-f">
          <path d={svgPaths.p39292900} fill="var(--fill-0, #F1F5F9)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Item13() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[252px] mt-[578px] place-items-start relative" data-name="Item 7">
      <div className="[grid-area:1_/_1] backdrop-blur-[2.179px] backdrop-filter bg-gradient-to-b from-[rgba(255,255,255,0.3)] h-[220.514px] ml-0 mt-0 relative rounded-[20px] to-[rgba(255,255,255,0.1)] w-[224px]" data-name="Rectangle">
        <div aria-hidden="true" className="absolute border-[0.436px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      </div>
      <JamComputerF />
      <div className="[grid-area:1_/_1] font-['Poppins:Regular',_sans-serif] leading-[0] ml-[28px] mt-[79px] not-italic relative text-[20px] text-white w-[172px]">
        <p className="leading-[30px]">Custom solutions built for your vision, not generic software</p>
      </div>
    </div>
  );
}

function FluentBuildingHome32Filled() {
  return (
    <div className="[grid-area:1_/_1] ml-[35.959px] mt-[35.959px] relative size-[55.041px]" data-name="fluent:building-home-32-filled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 56">
        <g id="fluent:building-home-32-filled">
          <path d={svgPaths.p2f632ec0} fill="var(--fill-0, #F1F5F9)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Item14() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[188px] mt-[222px] place-items-start relative" data-name="Item 5">
      <div className="[grid-area:1_/_1] backdrop-blur-[2.809px] backdrop-filter bg-gradient-to-b from-[rgba(255,255,255,0.3)] h-[284.3px] ml-0 mt-0 relative rounded-[20px] to-[rgba(255,255,255,0.1)] w-[288.795px]" data-name="Rectangle">
        <div aria-hidden="true" className="absolute border-[0.562px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      </div>
      <FluentBuildingHome32Filled />
      <div className="[grid-area:1_/_1] font-['Poppins:Regular',_sans-serif] leading-[30px] ml-[37px] mt-[132px] not-italic relative text-[20px] text-white w-[251px]">
        <p className="mb-0">{`Cross-industry `}</p>
        <p className="mb-0">{`insights `}</p>
        <p>reveal breakthrough solutions​</p>
      </div>
    </div>
  );
}

function Group2085664660() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-[799px] mt-[1683px] place-items-start relative">
      <Item11 />
      <Item12 />
      <Item13 />
      <Item14 />
    </div>
  );
}

function Group2085664664() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-[#d5d9e5] h-[1238px] ml-0 mt-0 w-[1439px]" data-name="Rectangle" />
      <div className="[grid-area:1_/_1] bg-[#234177] h-[1405px] ml-0 mt-[1238px] w-[1439px]" data-name="Rectangle" />
      <div className="[grid-area:1_/_1] font-['Poppins:Bold',_sans-serif] leading-[0] ml-[355.5px] mt-[130px] not-italic relative text-[#11112b] text-[75px] text-center text-nowrap translate-x-[-50%]">
        <p className="leading-[82.432px] whitespace-pre">Services</p>
      </div>
      <Item9 />
      <Item5 />
      <Frame2121451010 />
      <Item6 />
      <Item4 />
      <Group2085664660 />
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute inset-[8.4%_126.69%_8.4%_-126.69%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 34">
        <g id="Group">
          <path d={svgPaths.pc000900} fill="var(--fill-0, #11112B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents inset-[8.4%_126.69%_8.4%_-126.69%]" data-name="Group">
      <Group8 />
    </div>
  );
}

function ArrowIcon2() {
  return (
    <div className="opacity-25 overflow-clip relative size-[40px]" data-name="Arrow Icon">
      <Group9 />
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute inset-[8.4%_-126.69%_8.4%_126.69%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 34">
        <g id="Group">
          <path d={svgPaths.pc000900} fill="var(--fill-0, #11112B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute contents inset-[8.4%_-126.69%_8.4%_126.69%]" data-name="Group">
      <Group10 />
    </div>
  );
}

function ArrowIcon3() {
  return (
    <div className="overflow-clip relative shrink-0 size-[40px]" data-name="Arrow Icon">
      <Group11 />
    </div>
  );
}

function Frame2121450983() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex items-center justify-between ml-[1158.32px] mt-[757.297px] relative w-[114.97px]">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg]">
          <ArrowIcon2 />
        </div>
      </div>
      <ArrowIcon3 />
    </div>
  );
}

function ServicesSection() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-0 mt-0 place-items-start relative" data-name="Services Section">
      <div className="[grid-area:1_/_1] bg-[#d5d9e5] h-[887px] ml-0 mt-0 w-[1440px]" data-name="Rectangle" />
      <div className="[grid-area:1_/_1] h-[887px] ml-0 mt-0 opacity-75 relative w-[1440px]" data-name="Background">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[142.31%] left-0 max-w-none top-[-23.13%] w-[111.98%]" src={imgBackground1} />
        </div>
      </div>
      <Frame2121450983 />
    </div>
  );
}

function Frame2121450982() {
  const visibleCount = 3;
  const cardWidthPx = 350; // width of each card component
  const gapPx = 83; // gap between cards (Tailwind gap-[83px])

  type TestimonialData = {
    title: string;
    description: string;
    avatarSrc: string;
    name: string;
    role?: string;
  };

  const testimonialsData: TestimonialData[] = [
    {
      title: "Our hotel runs incredibly stable now—99.99% uptime with virtually no issues.",
      description: "Guest complaints have dropped dramatically since SourceCode implemented our systems.",
      avatarSrc: imgEllipse68,
      name: "Surakij\u00A0Metanukij",
      role: "Owner at Hotel Elizabeth",
    },
    {
      title: "Complete coverage supporting\u00A0",
      description:
        "SmartTV integration with 24-hour support team available for both Thai and international guests. Reliable service we can count on.",
      avatarSrc: imgEllipse69,
      name: "Juldis\u00A0Kludpuang",
      role: "IT Manager at Hotel Once Bangkok",
    },
    {
      title: "SourceCode\u00A0is attentive, dedicated, and reliable.",
      description:
        "The software is quality, and whenever we give them a brief, they come back with great solutions.",
      avatarSrc: imgEllipse70,
      name: "AIS",
    },
    {
      title: "Service is quick, and the project moves along faster than the planned schedule.",
      description:
        "",
      avatarSrc: Ellipse68,
      name: "DGA",
    },
    {
      title: "The team is committed to teaching and everyone is very kind.",
      description:
        "",
      avatarSrc: Ellipse74,
      name: "TG",
    },
  ];

  const TestimonialCard: React.FC<{ data: TestimonialData }> = ({ data }) => (
    <div className="content-stretch flex flex-col h-[407px] items-start justify-between relative shrink-0 w-[350px]">
      <div className="bg-[#11112b] h-px shadow-[3.867px_7.735px_38.673px_0px_rgba(17,17,43,0.05)] shrink-0 w-full" data-name="Line" />
      <div className="content-stretch flex flex-col gap-[27px] items-start relative shrink-0 w-[339px]">
        <div className="font-['Poppins:SemiBold',_sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#11112b] text-[24px]" style={{ width: "min-content" }}>
          <p className="leading-[30.939px]">{data.title}</p>
        </div>
        <div className="font-['Poppins:Regular',_sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#11112b] text-[14px]" style={{ width: "min-content" }}>
          <p className="leading-[24px]">{data.description}</p>
        </div>
        <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
          <div className="relative shrink-0 size-[45px]">
            <img alt="" className="block max-w-none size-full" height="45" src={data.avatarSrc} width="45" />
          </div>
          <div className="content-stretch flex flex-col items-start leading-[0] not-italic relative shrink-0 text-[#11112b]">
            <div className="font-['Poppins:Bold',_sans-serif] min-w-full relative shrink-0 text-[24px]" style={{ width: "min-content" }}>
              <p className="leading-[normal]">{data.name}</p>
            </div>
            {data.role ? (
              <div className="font-['Poppins:Regular',_sans-serif] relative shrink-0 text-[14px] text-nowrap">
                <p className="leading-[30px] whitespace-pre">{data.role}</p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <div className="bg-[#11112b] h-px shadow-[3.867px_7.735px_38.673px_0px_rgba(17,17,43,0.05)] shrink-0 w-full" data-name="Line" />
    </div>
  );

  const base: React.ReactNode[] = testimonialsData.map((t, idx) => (
    <TestimonialCard key={`testimonial-${idx}`} data={t} />
  ));

  const baseLen = base.length;
  const repeats = 20; // large enough to avoid frequent recenters
  const totalLen = baseLen * repeats;
  const startIndex = baseLen * Math.floor(repeats / 2);

  const [slideIndex, setSlideIndex] = useState(startIndex);
  const [isAnimating, setIsAnimating] = useState(true);

  const handlePrev = () => {
    setIsAnimating(true);
    setSlideIndex((v) => v - 1);
  };

  const handleNext = () => {
    setIsAnimating(true);
    setSlideIndex((v) => v + 1);
  };

  const translateX = -(slideIndex * (cardWidthPx + gapPx));

  const normalizeIndex = (i: number) => {
    const diff = i - startIndex;
    const mod = ((diff % baseLen) + baseLen) % baseLen;
    return startIndex + mod;
  };

  const handleTransitionEnd = () => {
    const buffer = baseLen; // when near edges, recenter
    if (slideIndex <= buffer || slideIndex >= totalLen - buffer) {
      const normalized = normalizeIndex(slideIndex);
      if (normalized !== slideIndex) {
        setIsAnimating(false);
        setSlideIndex(normalized);
        requestAnimationFrame(() => setIsAnimating(true));
      }
    }
  };

  return (
    <div className="[grid-area:1_/_1] box-border relative ml-[111px] mt-[322px] w-[1218px]">
      <button aria-label="Previous testimonials" onClick={handlePrev} className="absolute top-1/2 -translate-y-1/2 z-10 flex items-center justify-center" style={{ left: "-58px" }}>
        <div className="flex-none rotate-[180deg]">
          <ArrowIcon />
        </div>
      </button>

      <div className="overflow-hidden">
        <div
          className="flex gap-[83px]"
          style={{
            transform: `translateX(${translateX}px)`,
            transition: isAnimating ? "transform 700ms cubic-bezier(0.22, 1, 0.36, 1)" : "none",
            willChange: "transform",
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {Array.from({ length: repeats }).flatMap((_, r) =>
            base.map((component, idx) => (
              <div key={`rep-${r}-${idx}`} className="shrink-0" style={{ width: `${cardWidthPx}px` }}>
                {component}
              </div>
            )),
          )}
        </div>
      </div>

      <button aria-label="Next testimonials" onClick={handleNext} className="absolute top-1/2 -translate-y-1/2 z-10 flex items-center justify-center" style={{ right: "-48px" }}>
        <ArrowIcon1 />
      </button>
    </div>
  );
}

function Group2085664662() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <ServicesSection />
      <div className="[grid-area:1_/_1] font-['Poppins:Bold',_sans-serif] leading-[0] ml-[731px] mt-[104px] not-italic relative text-[#11112b] text-[75px] text-center text-nowrap translate-x-[-50%]">
        <p className="leading-[82.432px] whitespace-pre">Words of Praise</p>
      </div>
      <Frame2121450982 />
      <div className="[grid-area:1_/_1] font-['Poppins:Bold',_sans-serif] leading-[0] ml-[730.5px] mt-[200px] not-italic relative text-[#11112b] text-[38px] text-center translate-x-[-50%] w-[541px]">
        <p className="leading-[normal]">from Our Customers</p>
      </div>
    </div>
  );
}

function Group2085664663() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative">
      <div className="[grid-area:1_/_1] h-[80px] ml-0 mt-0 relative rounded-[15px] w-[402px]" data-name="Rectangle">
        <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[15px]" />
      </div>
      <div className="[grid-area:1_/_1] h-0 ml-[257px] mt-[40px] relative w-[100px]" data-name="Arrow Icon">
        <div className="absolute bottom-[-7.36px] left-0 right-[-1%] top-[-7.36px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 101 16">
            <path d={svgPaths.p2744e400} fill="var(--stroke-0, white)" id="Arrow Icon" />
          </svg>
        </div>
      </div>
      <div className="[grid-area:1_/_1] font-['Poppins:SemiBold',_sans-serif] ml-[40px] mt-[27px] not-italic relative text-[16px] text-nowrap text-white">
        <p className="leading-[26px] whitespace-pre">View More Case Studies</p>
      </div>
    </div>
  );
}

function CtaButton2() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-[126px] mt-[1158px] place-items-start relative" data-name="CTA Button">
      <Group2085664663 />
    </div>
  );
}

function Frame2121450985() {
  return (
    <div className="bg-[#a7c6ee] box-border content-stretch flex flex-col gap-[10px] items-center justify-center p-[23px] relative rounded-[36px] shrink-0 size-[72px]">
      <div className="font-['Poppins:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#11112b] text-[24px] text-center text-nowrap">
        <p className="leading-[26px] whitespace-pre">02</p>
      </div>
    </div>
  );
}

function Frame2121450984() {
  return (
    <div className="basis-0 content-stretch flex gap-[34px] grow items-center min-h-px min-w-px relative shrink-0">
      <div className="font-['Poppins:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
        <p className="leading-[26px] whitespace-pre">Hotel Solution</p>
      </div>
    </div>
  );
}

function Frame2121450986() {
  return (
    <div className="content-stretch flex gap-[31px] items-center relative shrink-0 w-[283px]">
      <Frame2121450985 />
      <Frame2121450984 />
    </div>
  );
}

function SolarArrowRightOutline7() {
  return (
    <div className="relative shrink-0 size-[22.182px]" data-name="solar:arrow-right-outline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 23">
        <g id="solar:arrow-right-outline">
          <path clipRule="evenodd" d={svgPaths.p2f328b00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame4646798() {
  return (
    <div className="content-stretch flex gap-[3.697px] items-end justify-end relative shrink-0">
      <div className="font-['Poppins:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white">
        <p className="leading-[1.5] whitespace-pre">More Detail</p>
      </div>
      <SolarArrowRightOutline7 />
    </div>
  );
}

function Frame2121450988() {
  return (
    <div className="content-stretch flex flex-col gap-[35px] items-start relative shrink-0 w-[573px]">
      <Frame2121450986 />
      <div className="font-['Poppins:Bold',_sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[24px] text-white" style={{ width: "min-content" }}>
        <p className="leading-[normal]">How Elizabeth Hotel Eliminated Guest Complaints with Complete Network Transformation</p>
      </div>
      <div className="font-['Poppins:Regular',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[14px] text-white w-[564px]">
        <p className="mb-0">{`After 30 years serving Bangkok's Saphan Kwai district, this beloved hotel faced connectivity issues that threatened their reputation for quality service.`}</p>
        <p>{` SourceCode delivered a complete network overhaul that matched their classic hospitality standards. The result? Dramatic reduction in guest complaints and significantly improved satisfaction scores. Discover how we transformed their infrastructure without disrupting their timeless charm.`}</p>
      </div>
      {/* <Frame4646798 /> */}
    </div>
  );
}

function Frame2121450990() {
  return (
    <div className="content-stretch flex flex-col gap-[55px] items-start relative shrink-0 w-[583px]">
      <div className="h-[392px] relative rounded-[37.016px] shrink-0 w-full" data-name="Image Placeholder">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[37.016px]">
          <div className="absolute bg-[#d9d9d9] inset-0 rounded-[37.016px]" />
          <div className="absolute inset-0 overflow-hidden rounded-[37.016px]">
            <img alt="" className="absolute h-[136.02%] left-[-22%] max-w-none top-[-4.43%] w-[131.95%]" src={imgImagePlaceholder4} />
          </div>
        </div>
      </div>
      <Frame2121450988 />
    </div>
  );
}

function Item15() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Item 1">
      <div className="[grid-area:1_/_1] h-[392px] ml-0 mt-0 relative rounded-[37.016px] w-[585px]" data-name="Image Placeholder">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[37.016px]">
          <div className="absolute bg-[#d9d9d9] inset-0 rounded-[37.016px]" />
          <div className="absolute inset-0 overflow-hidden rounded-[37.016px]">
            <img alt="" className="absolute h-[128.67%] left-[-6.32%] max-w-none top-[-15.15%] w-[124.4%]" src={imgImagePlaceholder5} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame2121451015() {
  return (
    <div className="bg-[#a7c6ee] box-border content-stretch flex flex-col gap-[10px] items-center justify-center p-[23px] relative rounded-[36px] shrink-0 size-[72px]">
      <div className="font-['Poppins:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#11112b] text-[24px] text-center text-nowrap">
        <p className="leading-[26px] whitespace-pre">01</p>
      </div>
    </div>
  );
}

function Frame2121451016() {
  return (
    <div className="basis-0 content-stretch flex gap-[34px] grow items-center min-h-px min-w-px relative shrink-0">
      <div className="font-['Poppins:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
        <p className="leading-[26px] whitespace-pre">Business Solution</p>
      </div>
    </div>
  );
}

function Frame2121451017() {
  return (
    <div className="content-stretch flex gap-[31px] items-center relative shrink-0 w-[283px]">
      <Frame2121451015 />
      <Frame2121451016 />
    </div>
  );
}

function SolarArrowRightOutline8() {
  return (
    <div className="relative shrink-0 size-[22.182px]" data-name="solar:arrow-right-outline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 23">
        <g id="solar:arrow-right-outline">
          <path clipRule="evenodd" d={svgPaths.p2f328b00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame4646799() {
  return (
    <div className="content-stretch flex gap-[3.697px] items-end justify-end relative shrink-0">
      <div className="font-['Poppins:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white">
        <p className="leading-[1.5] whitespace-pre">More Detail</p>
      </div>
      <SolarArrowRightOutline8 />
    </div>
  );
}

function Frame2121450987() {
  return (
    <div className="content-stretch flex flex-col gap-[35px] items-start relative shrink-0 w-[573px]">
      <Frame2121451017 />
      <div className="font-['Poppins:Bold',_sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[24px] text-white" style={{ width: "min-content" }}>
        <p className="leading-[normal]">From Spreadsheet Chaos to Patient Safety: Transforming Pharmaceutical Operations</p>
      </div>
      <div className="font-['Poppins:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[14px] text-white w-[564px]">
        <p className="leading-[24px]">This specialized medical compound provider was drowning in fragmented data across spreadsheets and legacy systems. Critical formulation details, inventory tracking, and patient records existed in silos, creating dangerous gaps in their workflow. Our custom Master Data Management platform unified their entire operation, establishing bulletproof traceability and eliminating the manual errors that put patients at risk.​</p>
      </div>
      {/* <Frame4646799 /> */}
    </div>
  );
}

function Frame2121450989() {
  return (
    <div className="content-stretch flex flex-col gap-[55px] items-start relative shrink-0 w-[585px]">
      <Item15 />
      <Frame2121450987 />
    </div>
  );
}

function Frame2121451008() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex gap-[49px] items-start ml-[127px] mt-[226px] relative">
      <Frame2121450990 />
      <Frame2121450989 />
    </div>
  );
}

function Group2085664666() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-[#11112b] h-[1307px] ml-0 mt-0 w-[1455px]" data-name="Rectangle" />
      <div className="[grid-area:1_/_1] h-[1307px] ml-px mt-0 opacity-25 relative w-[1454px]" data-name="Background">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-[#d9d9d9] inset-0" />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgBackground2} />
        </div>
      </div>
      {/* <CtaButton2 /> */}
      <div className="[grid-area:1_/_1] font-['Poppins:Bold',_sans-serif] leading-[0] ml-[112px] mt-[99px] not-italic relative text-[75px] text-white w-[513px]">
        <p className="leading-[82.432px]">Case Studies</p>
      </div>
      <Frame2121451008 />
    </div>
  );
}

function Frame2121451009() {
  return (
    <div className="absolute content-stretch flex flex-col gap-px items-end leading-[0] left-0 top-[1353px] w-[1440px]">
      <Group2085664664 />
      <Group2085664662 />
      <Group2085664666 />
    </div>
  );
}

function Group2085664667() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-center relative shrink-0 text-center">
      <div className="[grid-area:1_/_1] font-['Poppins:Bold',_sans-serif] mt-0 not-italic relative text-[#a7c6ee] text-[75px] w-[957px]">
        <p className="leading-[1.2]">Ready to Transform Your Operations?​</p>
      </div>
      <div className="[grid-area:1_/_1] font-['Poppins:Light_Italic',_sans-serif] italic mt-[212px] relative text-[36px] text-white w-[1031px]">
        <p className="leading-[normal]">{`Let's explore how our proven approach can solve your unique challenges and accelerate growth.`}</p>
      </div>
    </div>
  );
}

function CtaButton3() {
  const navigate = useNavigate();
  const handleClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigate("/contact");
  };
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0 cursor-pointer" data-name="CTA Button" onClick={handleClick}>
      <div className="[grid-area:1_/_1] h-[80px] ml-0 mt-0 relative rounded-[15px] w-[316px]" data-name="Rectangle">
        <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[15px]" />
      </div>
      <div className="[grid-area:1_/_1] h-0 ml-[176px] mt-[40px] relative w-[100px]" data-name="Arrow Icon">
        <div className="absolute bottom-[-7.36px] left-0 right-[-1%] top-[-7.36px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 101 16">
            <path d={svgPaths.p2744e400} fill="var(--stroke-0, white)" id="Arrow Icon" />
          </svg>
        </div>
      </div>
      <div className="[grid-area:1_/_1] font-['Poppins:SemiBold',_sans-serif] leading-[0] ml-[40px] mt-[27px] not-italic relative text-[16px] text-nowrap text-white">
        <p className="leading-[26px] whitespace-pre">Let’s Connect</p>
      </div>
    </div>
  );
}

function Frame2121450993() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[48px] items-center leading-[0] left-[210px] top-[7332px] w-[1031px]">
      <Group2085664667 />
      <CtaButton3 />
    </div>
  );
}

function Frame353() {
  return (
    <div className="h-[43px] relative shrink-0 w-[179px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 179 43">
        <g id="Frame 352">
          <path d={svgPaths.p9387880} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p2c0c8900} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p3553f420} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p35440600} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.pbc32e80} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p36084600} fill="var(--fill-0, white)" id="Vector_6" />
          <path d={svgPaths.p8fa8600} fill="var(--fill-0, white)" id="Vector_7" />
          <path d={svgPaths.p2055a8b0} fill="var(--fill-0, white)" id="Vector_8" />
          <path d={svgPaths.p34264a00} fill="var(--fill-0, white)" id="Vector_9" />
          <path d={svgPaths.p3c97ca00} fill="var(--fill-0, white)" id="Vector_10" />
          <path d={svgPaths.p13e5a3c0} fill="var(--fill-0, white)" id="Vector_11" />
          <path d={svgPaths.p38a4ce80} fill="var(--fill-0, white)" id="Vector_12" />
          <path d={svgPaths.p5261000} fill="var(--fill-0, white)" id="Vector_13" />
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

function IcOutlineEmail() {
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
      <IcOutlineEmail />
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
          <path d={svgPaths.p195ae580} fill="var(--fill-0, white)" id="Vector" />
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

function Frame2121451018() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame2121450997 />
      <Frame2121450998 />
      <Frame2121450999 />
    </div>
  );
}

function FrameFooterContactInfo() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-start left-[75px] top-[7932px] w-[285px]">
      <Frame353 />
      <Frame2121451018 />
    </div>
  );
}

function Iso27001UkasWBg1() {
  return (
    <div className="h-[49px] relative shrink-0 w-[97px]" data-name="ISO 27001 UKAS W-BG 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 97 49">
        <g clipPath="url(#clip0_0_755)" id="ISO 27001 UKAS W-BG 1">
          <path d={svgPaths.p2be89200} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p2c317280} fill="var(--fill-0, #231F20)" id="Vector_2" />
          <path d={svgPaths.p2cf8e000} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p981db00} fill="url(#paint0_radial_0_755)" id="Vector_4" />
          <path d={svgPaths.p163e3e00} fill="url(#paint1_radial_0_755)" id="Vector_5" />
          <path d={svgPaths.p153d9270} fill="var(--fill-0, #231F20)" id="Vector_6" />
          <path d={svgPaths.p7617300} fill="var(--fill-0, #231F20)" id="Vector_7" />
          <path d={svgPaths.pbd70270} fill="var(--fill-0, #231F20)" id="Vector_8" />
          <path d={svgPaths.p1a8de500} fill="var(--fill-0, #231F20)" id="Vector_9" />
          <path d={svgPaths.p14916f00} fill="var(--fill-0, #231F20)" id="Vector_10" />
          <path d={svgPaths.pe85ab80} fill="var(--fill-0, #231F20)" id="Vector_11" />
          <path d={svgPaths.p243755f0} fill="var(--fill-0, #231F20)" id="Vector_12" />
          <path d={svgPaths.p21fc940} fill="var(--fill-0, #231F20)" id="Vector_13" />
          <path d={svgPaths.p338a3380} fill="var(--fill-0, #231F20)" id="Vector_14" />
          <path d={svgPaths.p12398980} fill="var(--fill-0, #231F20)" id="Vector_15" />
          <path d={svgPaths.p2f908100} fill="var(--fill-0, #231F20)" id="Vector_16" />
          <path d={svgPaths.p3088bf80} fill="var(--fill-0, #231F20)" id="Vector_17" />
          <path d={svgPaths.p1f55d440} fill="var(--fill-0, #231F20)" id="Vector_18" />
          <path d={svgPaths.p2755b300} fill="var(--fill-0, #231F20)" id="Vector_19" />
          <path d={svgPaths.p17824300} fill="var(--fill-0, #231F20)" id="Vector_20" />
          <path d={svgPaths.p3bcf1fc0} fill="var(--fill-0, #231F20)" id="Vector_21" />
          <path d={svgPaths.p8b73d00} fill="var(--fill-0, #231F20)" id="Vector_22" />
          <path d={svgPaths.p43fdf00} fill="var(--fill-0, #231F20)" id="Vector_23" />
          <path d={svgPaths.p105a8000} fill="var(--fill-0, #231F20)" id="Vector_24" />
          <path d={svgPaths.p1a9dba20} fill="var(--fill-0, #231F20)" id="Vector_25" />
          <path d={svgPaths.p2c304af0} fill="var(--fill-0, #231F20)" id="Vector_26" />
          <path d={svgPaths.p2ae88780} fill="var(--fill-0, #231F20)" id="Vector_27" />
          <path d={svgPaths.p25cb1280} fill="var(--fill-0, #231F20)" id="Vector_28" />
          <path d={svgPaths.p253e5200} fill="var(--fill-0, #231F20)" id="Vector_29" />
          <path d={svgPaths.p11f04f00} fill="var(--fill-0, #231F20)" id="Vector_30" />
          <path d={svgPaths.p2a8b5300} fill="var(--fill-0, #231F20)" id="Vector_31" />
          <path d={svgPaths.p24988500} fill="var(--fill-0, #231F20)" id="Vector_32" />
          <path d={svgPaths.p30f54a80} fill="var(--fill-0, #231F20)" id="Vector_33" />
          <path d={svgPaths.p187daa00} fill="var(--fill-0, #231F20)" id="Vector_34" />
          <path d={svgPaths.p3ebd6a00} fill="var(--fill-0, #231F20)" id="Vector_35" />
          <path d={svgPaths.p270a8f00} fill="var(--fill-0, #231F20)" id="Vector_36" />
          <path d={svgPaths.p3a040b80} fill="var(--fill-0, #231F20)" id="Vector_37" />
          <path d={svgPaths.p141f4000} fill="var(--fill-0, #231F20)" id="Vector_38" />
          <path d={svgPaths.p398ee400} fill="var(--fill-0, #231F20)" id="Vector_39" />
          <path d={svgPaths.p332a6b00} fill="var(--fill-0, #231F20)" id="Vector_40" />
          <path d={svgPaths.p12938f00} fill="var(--fill-0, #231F20)" id="Vector_41" />
          <path d={svgPaths.pe7ff00} fill="var(--fill-0, #231F20)" id="Vector_42" />
          <path d={svgPaths.p1a116e40} fill="var(--fill-0, #231F20)" id="Vector_43" />
          <path d={svgPaths.p1ea6c480} fill="var(--fill-0, #231F20)" id="Vector_44" />
          <path d={svgPaths.pd6e8400} fill="var(--fill-0, #231F20)" id="Vector_45" />
          <path d={svgPaths.pd23e900} fill="var(--fill-0, #231F20)" id="Vector_46" />
          <path d={svgPaths.p2ad329e0} fill="var(--fill-0, #231F20)" id="Vector_47" />
          <path d={svgPaths.pb241800} fill="var(--fill-0, #231F20)" id="Vector_48" />
        </g>
        <defs>
          <radialGradient cx="0" cy="0" gradientTransform="translate(24.6699 16.6539) scale(22.5105 22.3058)" gradientUnits="userSpaceOnUse" id="paint0_radial_0_755" r="1">
            <stop offset="0.25" stopColor="#F6F6F6" />
            <stop offset="0.43" stopColor="#F1F1F1" />
            <stop offset="0.65" stopColor="#E3E4E4" />
            <stop offset="0.88" stopColor="#CBCDCE" />
            <stop offset="1" stopColor="#BCBEC0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(23.5073 16.878) scale(23.7206 23.5049)" gradientUnits="userSpaceOnUse" id="paint1_radial_0_755" r="1">
            <stop offset="0.25" stopColor="#DCDDDE" />
            <stop offset="0.41" stopColor="#D7D8D9" />
            <stop offset="0.6" stopColor="#C9CACC" />
            <stop offset="0.8" stopColor="#B1B3B5" />
            <stop offset="1" stopColor="#939598" />
          </radialGradient>
          <clipPath id="clip0_0_755">
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
        <path d={svgPaths.p2c317280} fill="var(--fill-0, #231F20)" id="Vector_4" />
        <path d={svgPaths.p2cf8e000} fill="var(--fill-0, white)" id="Vector_5" />
        <path d={svgPaths.p981db00} fill="url(#paint0_radial_0_629)" id="Vector_6" />
        <path d={svgPaths.p163e3e00} fill="url(#paint1_radial_0_629)" id="Vector_7" />
        <path d={svgPaths.p153d9270} fill="var(--fill-0, #231F20)" id="Vector_8" />
        <path d={svgPaths.p7617300} fill="var(--fill-0, #231F20)" id="Vector_9" />
        <path d={svgPaths.pbd70270} fill="var(--fill-0, #231F20)" id="Vector_10" />
        <path d={svgPaths.p1a8de500} fill="var(--fill-0, #231F20)" id="Vector_11" />
        <path d={svgPaths.p14916f00} fill="var(--fill-0, #231F20)" id="Vector_12" />
        <path d={svgPaths.p1704c780} fill="var(--fill-0, #231F20)" id="Vector_13" />
        <path d={svgPaths.p2d647ff0} fill="var(--fill-0, #231F20)" id="Vector_14" />
        <path d={svgPaths.p3ecf8700} fill="var(--fill-0, #231F20)" id="Vector_15" />
        <path d={svgPaths.p16722a00} fill="var(--fill-0, #231F20)" id="Vector_16" />
        <path d={svgPaths.pdb0b80} fill="var(--fill-0, #231F20)" id="Vector_17" />
        <path d={svgPaths.p5b8c980} fill="var(--fill-0, #231F20)" id="Vector_18" />
        <path d={svgPaths.p162a9a00} fill="var(--fill-0, #231F20)" id="Vector_19" />
        <path d={svgPaths.p2755b300} fill="var(--fill-0, #231F20)" id="Vector_20" />
        <path d={svgPaths.p17824300} fill="var(--fill-0, #231F20)" id="Vector_21" />
        <path d={svgPaths.p3bcf1fc0} fill="var(--fill-0, #231F20)" id="Vector_22" />
        <path d={svgPaths.p8b73d00} fill="var(--fill-0, #231F20)" id="Vector_23" />
        <path d={svgPaths.p43fdf00} fill="var(--fill-0, #231F20)" id="Vector_24" />
        <path d={svgPaths.p105a8000} fill="var(--fill-0, #231F20)" id="Vector_25" />
        <path d={svgPaths.p1a9dba20} fill="var(--fill-0, #231F20)" id="Vector_26" />
        <path d={svgPaths.p2c304af0} fill="var(--fill-0, #231F20)" id="Vector_27" />
        <path d={svgPaths.p2ae88780} fill="var(--fill-0, #231F20)" id="Vector_28" />
        <path d={svgPaths.p25cb1280} fill="var(--fill-0, #231F20)" id="Vector_29" />
        <path d={svgPaths.p253e5200} fill="var(--fill-0, #231F20)" id="Vector_30" />
        <path d={svgPaths.p11f04f00} fill="var(--fill-0, #231F20)" id="Vector_31" />
        <path d={svgPaths.p2a8b5300} fill="var(--fill-0, #231F20)" id="Vector_32" />
        <path d={svgPaths.p24988500} fill="var(--fill-0, #231F20)" id="Vector_33" />
        <path d={svgPaths.p30f54a80} fill="var(--fill-0, #231F20)" id="Vector_34" />
        <path d={svgPaths.p187daa00} fill="var(--fill-0, #231F20)" id="Vector_35" />
        <path d={svgPaths.p3ebd6a00} fill="var(--fill-0, #231F20)" id="Vector_36" />
        <path d={svgPaths.p270a8f00} fill="var(--fill-0, #231F20)" id="Vector_37" />
        <path d={svgPaths.p3a040b80} fill="var(--fill-0, #231F20)" id="Vector_38" />
        <path d={svgPaths.p141f4000} fill="var(--fill-0, #231F20)" id="Vector_39" />
        <path d={svgPaths.p398ee400} fill="var(--fill-0, #231F20)" id="Vector_40" />
        <path d={svgPaths.p332a6b00} fill="var(--fill-0, #231F20)" id="Vector_41" />
        <path d={svgPaths.p12938f00} fill="var(--fill-0, #231F20)" id="Vector_42" />
        <path d={svgPaths.pe7ff00} fill="var(--fill-0, #231F20)" id="Vector_43" />
        <path d={svgPaths.p1a116e40} fill="var(--fill-0, #231F20)" id="Vector_44" />
        <path d={svgPaths.p1ea6c480} fill="var(--fill-0, #231F20)" id="Vector_45" />
        <path d={svgPaths.p2ad329e0} fill="var(--fill-0, #231F20)" id="Vector_46" />
        <path d={svgPaths.pb241800} fill="var(--fill-0, #231F20)" id="Vector_47" />
      </g>
      <defs>
        <radialGradient cx="0" cy="0" gradientTransform="translate(24.6699 16.6539) scale(22.5105 22.3058)" gradientUnits="userSpaceOnUse" id="paint0_radial_0_629" r="1">
          <stop offset="0.25" stopColor="#F6F6F6" />
          <stop offset="0.43" stopColor="#F1F1F1" />
          <stop offset="0.65" stopColor="#E3E4E4" />
          <stop offset="0.88" stopColor="#CBCDCE" />
          <stop offset="1" stopColor="#BCBEC0" />
        </radialGradient>
        <radialGradient cx="0" cy="0" gradientTransform="translate(23.5073 16.878) scale(23.7206 23.5049)" gradientUnits="userSpaceOnUse" id="paint1_radial_0_629" r="1">
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

function FrameISO() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center top-[8249px]" style={{ left: "calc(77.778% + 38px)" }}>
      <Iso27001UkasWBg1 />
      <Iso9001UkasWBg1 />
    </div>
  );
}

function ScHomepageDesktop() {
  return (
    <div className="absolute bg-[#11112b] h-[8416px] left-0 overflow-clip top-0 w-[1440px]" data-name="SC Homepage - Desktop">
      <div className="absolute bg-[#234177] h-[2007px] left-0 top-[6409px] w-[1470px]" data-name="Rectangle" />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <CtaSection />
      <Footer baseTop={7870} withBackground={false} />
      <Group2085664658 />
      <Group2085664665 />
      <Group2085664659 />
      <Frame2121451009 />
      <Frame2121450993 />
      <FrameFooterContactInfo />
      {/* footer moved to shared Footer component */}
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="relative size-full" data-name="HomePage">
      <ScHomepageDesktop />
    </div>
  );
}