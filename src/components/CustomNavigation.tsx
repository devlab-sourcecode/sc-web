import svgPaths from "../imports/svg-6xc7n64g64";

interface CustomNavigationProps {
  onNavigate: (page: "home" | "contact") => void;
  currentPage: "home" | "contact";
}

function Frame352() {
  return (
    <div className="h-[43px] relative shrink-0 w-[179px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 179 43">
        <g id="Frame 352">
          <path d={svgPaths.p219ea680} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p2d957180} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p2bd58300} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p35440600} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.pbc32e80} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p36084600} fill="var(--fill-0, white)" id="Vector_6" />
          <path d={svgPaths.p8fa8600} fill="var(--fill-0, white)" id="Vector_7" />
          <path d={svgPaths.p2055a8b0} fill="var(--fill-0, white)" id="Vector_8" />
          <path d={svgPaths.p34264a00} fill="var(--fill-0, white)" id="Vector_9" />
          <path d={svgPaths.p3c97ca00} fill="var(--fill-0, white)" id="Vector_10" />
          <path d={svgPaths.p13e5a3c0} fill="var(--fill-0, white)" id="Vector_11" />
          <path d={svgPaths.p38a4ce80} fill="var(--fill-0, white)" id="Vector_12" />
          <path d={svgPaths.p25e76ac0} fill="var(--fill-0, white)" id="Vector_13" />
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

function Frame2121450969({ onNavigate, currentPage }: CustomNavigationProps) {
  return (
    <div className="content-stretch flex gap-[44px] items-center justify-end relative shrink-0 w-[899.817px]">
      <Frame2121450971 />
      <div className="font-['Poppins:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white cursor-pointer hover:opacity-80 transition-opacity">
        <p className="leading-[26px] whitespace-pre">Case Studies</p>
      </div>
      <div className="font-['Poppins:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white cursor-pointer hover:opacity-80 transition-opacity">
        <p className="leading-[26px] whitespace-pre">News/Blog</p>
      </div>
      <div className="font-['Poppins:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white cursor-pointer hover:opacity-80 transition-opacity" onClick={() => onNavigate("home")}>
        <p className="leading-[26px] whitespace-pre">About Us</p>
      </div>
      <div 
        className="font-['Poppins:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white cursor-pointer hover:opacity-80 transition-opacity" 
        onClick={() => onNavigate("contact")}
        style={{ opacity: currentPage === "contact" ? 1 : 0.9 }}
      >
        <p className="leading-[26px] whitespace-pre">Contact</p>
      </div>
    </div>
  );
}

function Frame2121450970({ onNavigate, currentPage }: CustomNavigationProps) {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[75px] top-[36px] w-[1290px]">
      <div onClick={() => onNavigate("home")} className="cursor-pointer">
        <Frame352 />
      </div>
      <Frame2121450969 onNavigate={onNavigate} currentPage={currentPage} />
    </div>
  );
}

export default function CustomNavigation({ onNavigate, currentPage }: CustomNavigationProps) {
  return (
    <div className="absolute contents left-[75px] top-[36px]" data-name="Navigation">
      <Frame2121450970 onNavigate={onNavigate} currentPage={currentPage} />
    </div>
  );
}