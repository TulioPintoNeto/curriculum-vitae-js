import { EducationSection } from "./lib/presentation/sections/EducationSection";
import { ExperiencesSection } from "./lib/presentation/sections/ExperiencesSection";
import { Header } from "./lib/presentation/sections/Header";
import { SideMenu } from "./lib/presentation/sections/SideMenu";

export const Content = () => {
  return (
    <>
      <div
        className="container-fluid d-flex flex-column align-items-stretch jusity"
        id="curriculum"
      >
        <Header />
        <div className="row align-items-stretch p-0">
          <SideMenu />
          <div className="px-0 py-2 text-center" id="main-content">
            <ExperiencesSection />
            <EducationSection />
          </div>
        </div>
      </div>
    </>
  );
};
