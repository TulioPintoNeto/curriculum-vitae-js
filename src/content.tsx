import { useEffect, useState } from "react";
import { AppController } from "./lib/presentation/controllers/app_controller";
import { appControllerFactory } from "./lib/factories/controllers/app_controller_factory";
import { LanguageSection } from "./lib/presentation/components/LanguageSection";
import { useLanguage } from "./lib/presentation/context/language";
import { ContactSection } from "./lib/presentation/components/ContactSection";
import { ExpertiseSection } from "./lib/presentation/components/ExpertiseSection";
import { EducationSection } from "./lib/presentation/components/EducationSection";
import { ExperiencesSection } from "./lib/presentation/components/ExperiencesSection";

export const Content = () => {
  const language = useLanguage();

  useEffect(() => {
    const appController: AppController = appControllerFactory(language);
    appController.update();
  }, [language]);

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
          <div className="px-2 py-2" id="side-menu">
            <ContactSection />
            <LanguageSection />
            <ExpertiseSection />
            <h5 className="light-gray mt-3">Softwares/IDE</h5>
            <div className="row gray">
              <div className="col-6">
                <p className="mb-2">Insomnia</p>
                <p className="mb-2">Postman</p>
                <p className="mb-2">SourceTree</p>
                <p className="mb-2">Docker</p>
                <p className="mb-2">VSCode</p>
              </div>
              <div className="col-6">
                <p className="mb-2">Git</p>
                <p className="mb-2">MS Excel</p>
                <p className="mb-2">MS Word</p>
                <p className="mb-2">MS PowerPoint</p>
              </div>
            </div>
            <h5 className="light-gray mt-3" id="others-title">
              Others
            </h5>
            <div className="row gray">
              <div className="col-6">
                <p className="mb-2">Clean Architecture</p>
                <p className="mb-2">Bootstrap</p>
                <p className="mb-2">Automated Tests</p>
                <p className="mb-2">RegEx</p>
                <p className="mb-2">TailwindCSS</p>
              </div>
              <div className="col-6">
                <p className="mb-2">TDD</p>
                <p className="mb-2">Clean Code</p>
                <p className="mb-2">SEO</p>
                <p className="mb-2">Scrum</p>
              </div>
            </div>
            <h5 className="light-gray mt-3" id="interests-title">
              Interests
            </h5>
            <div id="interests"></div>
          </div>
          <div className="px-0 py-2 text-center" id="main-content">
            <ExperiencesSection />
            <EducationSection />
          </div>
        </div>
      </div>
    </>
  );
};
