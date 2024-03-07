import { useLanguage } from "../../context/language";
import { ContactSection } from "../ContactSection";
import { ExpertiseSection } from "../ExpertiseSection";
import { InterestsSection } from "../InterestsSection";
import { LanguageSection } from "../LanguageSection";
import { OthersSection } from "../OthersSection";
import { SoftwaresSection } from "../SoftwaresSection";

export const SideMenu = () => {
  return (
    <div className="px-2 py-2" id="side-menu">
      <ContactSection />
      <LanguageSection />
      <ExpertiseSection />
      <SoftwaresSection />
      <OthersSection />
      <InterestsSection />
    </div>
  );
};
