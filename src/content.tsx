import { EducationSection } from "./lib/presentation/sections/EducationSection";
import { ExperiencesSection } from "./lib/presentation/sections/ExperiencesSection";
import { ExpertiseSection } from "./lib/presentation/sections/ExpertiseSection";
import { Header } from "./lib/presentation/sections/Header";
import { InterestsSection } from "./lib/presentation/sections/InterestsSection";
import { LanguageSection } from "./lib/presentation/sections/LanguageSection";
import { OthersSection } from "./lib/presentation/sections/OthersSection";
import { SkillsSection } from "./lib/presentation/sections/SkillsSection";
import { SoftwaresSection } from "./lib/presentation/sections/SoftwaresSection";

export const Content = () => {
  return (
    <>
      <div
        className="container-fluid d-flex flex-column align-items-stretch jusity"
        id="curriculum"
      >
        <Header />
        <div className="row align-items-stretch p-0">
          <div className="px-5 py-2 text-center" id="main-content">
            <SkillsSection />
            <ExperiencesSection />
            <EducationSection />
            <InterestsSection />
          </div>
        </div>
      </div>
    </>
  );
};
