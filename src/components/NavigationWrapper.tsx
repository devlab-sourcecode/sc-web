import { ReactNode } from "react";

interface NavigationWrapperProps {
  children: ReactNode;
  onNavigate: (page: "home" | "contact") => void;
}

export default function NavigationWrapper({ children, onNavigate }: NavigationWrapperProps) {
  const handleClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    const text = target.textContent || target.innerText;
    
    // Handle Contact navigation
    if (text?.trim() === "Contact") {
      e.preventDefault();
      e.stopPropagation();
      onNavigate("contact");
      return;
    }
    
    // Handle logo navigation to home
    if (target.closest('[data-name="Frame 352"]')) {
      e.preventDefault();
      e.stopPropagation();
      onNavigate("home");
      return;
    }
    
    // Handle other navigation items that should go home
    if (text?.trim() === "About Us" || text?.trim() === "Case Studies" || text?.trim() === "News/Blog") {
      e.preventDefault();
      e.stopPropagation();
      onNavigate("home");
      return;
    }
  };

  return (
    <div onClick={handleClick}>
      {children}
    </div>
  );
}