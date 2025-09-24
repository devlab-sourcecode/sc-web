import HomePage from "../imports/home-page";

interface HomePageProps {
  onNavigate: (page: "home" | "contact") => void;
  currentPage: "home" | "contact";
}

export default function HomePage({ onNavigate, currentPage }: HomePageProps) {
  return <HomePage onNavigate={onNavigate} currentPage={currentPage} />;
}