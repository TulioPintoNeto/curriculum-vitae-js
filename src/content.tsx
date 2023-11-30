import { EducationSection } from "./lib/presentation/components/EducationSection";
import { ExperiencesSection } from "./lib/presentation/components/ExperiencesSection";
import { SideMenu } from "./lib/presentation/components/SideMenu";

export const Content = () => {
  return (
    <>
      <div
        className="container-fluid d-flex flex-column align-items-stretch jusity"
        id="curriculum"
      >
        <div className="row justify-content-end align-items-center" id="header">
          <div className="me-5 pe-5 light-gray" id="header-titles">
            <h2>Tulio Pinto Neto</h2>
            <h3>Front-end Developer</h3>
          </div>
          <div id="header-img">
            <img src="./img/header-photo.jpg" />
          </div>
        </div>
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
