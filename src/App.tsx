import React, { useEffect, useLayoutEffect, useRef, useState, type ReactNode, type MouseEvent } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom';
import HomePage from "./imports/home-page";
import ContactPage from "./imports/contact-page";
import OurServicepage from "./imports/our-service-page";

// Navigation wrapper component to handle click events
function NavigationWrapper({ children }: { children?: ReactNode }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const text = target.textContent?.trim();
    
    // Handle Contact navigation
    if (text === "Contact") {
      e.preventDefault();
      if (location.pathname === "/contact") {
        window.scrollTo(0, 0);
      } else {
        navigate("/contact");
      }
      return;
    }
    
    // Handle Our Services navigation
    if (text === "Our Services") {
      e.preventDefault();
      if (location.pathname === "/services") {
        window.scrollTo(0, 0);
      } else {
        navigate("/services");
      }
      return;
    }
    
    // Handle logo clicks (look for Frame 352 or SVG elements)
    if (target.closest('svg') || target.tagName === 'path') {
      const svgParent = target.closest('div');
      if (svgParent && (svgParent.querySelector('[id="Frame 352"]') || svgParent.closest('[data-name="Frame 352"]'))) {
        e.preventDefault();
        if (location.pathname === "/") {
          window.scrollTo(0, 0);
        } else {
          navigate("/");
        }
        return;
      }
    }
    
    // Handle other menu items - navigate to home for now
    if (text === "About Us" || text === "Case Studies" || text === "News/Blog") {
      e.preventDefault();
      if (location.pathname === "/") {
        window.scrollTo(0, 0);
      } else {
        navigate("/");
      }
      return;
    }
  };

  return (
    <div className="min-h-screen w-full">
      <div className="relative mx-auto w-full max-w-[1440px] px-0 md:px-6 lg:px-8" onClick={handleClick}>
        <ScaledCanvas baseWidth={1440}>{children}</ScaledCanvas>
      </div>
    </div>
  );
}

// Scroll to top on route change
function ScrollToTop() {
  const location = useLocation();
  useLayoutEffect(() => {
    // เลื่อนขึ้นบนสุดทันที ให้ความรู้สึกเหมือน refresh
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return null;
}

// Page components
function HomePageLink() {
  return (
    <NavigationWrapper>
      <HomePage />
    </NavigationWrapper>
  );
}

function ContactPageLink() {
  return (
    <NavigationWrapper>
      <ContactPage />
    </NavigationWrapper>
  );
}

function ServicesPageLink() {
  return (
    <NavigationWrapper>
      <OurServicepage />
    </NavigationWrapper>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePageLink />} />
        <Route path="/contact" element={<ContactPageLink />} />
        <Route path="/services" element={<ServicesPageLink />} />
        {/* Catch-all route for unmatched paths - redirects to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

// Scales 1440px-wide absolute-positioned layouts down on small screens
function ScaledCanvas({ children, baseWidth = 1440 }: { children?: ReactNode; baseWidth?: number }) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const innerRef = useRef<HTMLDivElement | null>(null);
  const [scale, setScale] = useState(1);
  const [reservedHeight, setReservedHeight] = useState<number>(0);

  useLayoutEffect(() => {
    const updateScale = () => {
      const width = containerRef.current?.clientWidth ?? baseWidth;
      const nextScale = Math.min(1, width / baseWidth);
      setScale(nextScale);
    };

    updateScale();

    const ro = new ResizeObserver(() => updateScale());
    if (containerRef.current) ro.observe(containerRef.current);
    window.addEventListener('orientationchange', updateScale);
    window.addEventListener('resize', updateScale);
    return () => {
      ro.disconnect();
      window.removeEventListener('orientationchange', updateScale);
      window.removeEventListener('resize', updateScale);
    };
  }, [baseWidth]);

  useLayoutEffect(() => {
    const updateHeight = () => {
      const inner = innerRef.current;
      if (!inner) return;
      const rawHeight = inner.scrollHeight;
      setReservedHeight(Math.ceil(rawHeight * scale));
    };

    updateHeight();

    const ro = new ResizeObserver(() => updateHeight());
    if (innerRef.current) ro.observe(innerRef.current);
    const id = window.setInterval(updateHeight, 250);
    return () => {
      ro.disconnect();
      window.clearInterval(id);
    };
  }, [scale, children]);

  return (
    <div ref={containerRef} style={{ height: reservedHeight, position: 'relative' }}>
      <div style={{ position: 'absolute', left: '50%', top: 0, transform: 'translateX(-50%)' }}>
        <div
          ref={innerRef}
          style={{
            width: baseWidth,
            transform: `scale(${scale})`,
            transformOrigin: 'top center',
            willChange: 'transform',
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}