import svgPaths from "./svg-kw3am3kkxf";
import imgMinimalistTropicalPoolVilla2 from "figma:asset/1fb54f0b47c9713b08961dd6e79e8cc7aab4fe21.png";
import { imgMinimalistTropicalPoolVilla1 } from "./svg-dmg9f";

function MaskGroup() {
  return (
    <div className="absolute contents left-[737px] top-[46px]" data-name="Mask group">
      <div className="absolute h-[310.927px] left-[727.99px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[9.005px_60.788px] mask-size-[548px_180.116px] rounded-[20px] top-[-14.79px] w-[557.008px]" data-name="minimalist-tropical-pool-villa 1" style={{ maskImage: `url('${imgMinimalistTropicalPoolVilla1}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[20px] size-full" src={imgMinimalistTropicalPoolVilla2} />
      </div>
    </div>
  );
}

function Frame2121451043() {
  return <div className="absolute h-[35.384px] left-[1194.04px] rounded-[20px] top-[64.46px] w-[75.198px]" />;
}

function CtaSection() {
  return (
    <div className="absolute contents left-[737px] top-[46px]" data-name="CTA Section">
      <MaskGroup />
      <Frame2121451043 />
    </div>
  );
}

function VideoSection() {
  return (
    <div className="absolute contents left-[737px] top-[46px]" data-name="Video Section">
      <CtaSection />
    </div>
  );
}

function Frame2121451049() {
  return (
    <div className="absolute content-stretch flex gap-[5px] items-center left-[74px] top-[64px]">
      <div className="font-['Poppins:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-white w-[130.638px]">
        <p className="leading-[26px]">Hotel Solution​​</p>
      </div>
      <div className="h-0 relative shrink-0 w-[29px]" data-name="Arrow Icon">
        <div className="absolute bottom-[-7.36px] left-0 right-[-3.45%] top-[-7.36px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 16">
            <path d={svgPaths.p332d4a00} fill="var(--stroke-0, white)" id="Arrow Icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function HoverMenu() {
  return (
    <div className="relative size-full" data-name="hover-menu">
      <div className="absolute bg-[#11112b] h-[271px] left-0 top-0 w-[1439px]" data-name="Rectangle" />
      <VideoSection />
      <Frame2121451049 />
      <div className="absolute font-['Poppins:Regular',_sans-serif] leading-[0] left-[74px] not-italic opacity-50 text-[14px] text-white top-[95.02px] w-[515px]">
        <p className="leading-[18.867px]">Complete IT ecosystem for hospitality and tourism. From network infrastructure to CRM and AI security systems—one expert team handles everything from guest-facing technology to back-office management.​</p>
      </div>
    </div>
  );
}