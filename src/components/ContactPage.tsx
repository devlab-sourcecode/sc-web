import ContactPage from "../imports/contact-page";

interface ContactPageProps {
  onNavigate: (page: "home" | "contact") => void;
  currentPage: "home" | "contact";
}

export default function ContactPage({ onNavigate, currentPage }: ContactPageProps) {
  return <ContactPage onNavigate={onNavigate} currentPage={currentPage} />;
}