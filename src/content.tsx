import { EducationSection } from "./lib/presentation/sections/EducationSection";
import { ExperiencesSection } from "./lib/presentation/sections/ExperiencesSection";
import { Header } from "./lib/presentation/sections/Header";
import { InterestsSection } from "./lib/presentation/sections/InterestsSection";
import { SkillsSection } from "./lib/presentation/sections/SkillsSection";

export const Content = () => {
  return (
    <>
      <div
        className="d-flex flex-column align-items-stretch jusity"
        id="curriculum"
      >
        <Header />
        <div className="row align-items-stretch p-0">
          <div className="py-2 text-center" id="main-content">
            <SkillsSection />
            <ExperiencesSection />
            <EducationSection />
            {/* <InterestsSection /> */}
          </div>
        </div>
      </div>
    </>
  );
};
