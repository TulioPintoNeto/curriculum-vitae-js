import React, { useEffect, useState } from "react";
import { AppStateController } from "./lib/presentation/controllers/app_state_controller";
import { AppController } from "./lib/presentation/controllers/app_controller";
import { appControllerFactory } from "./lib/factories/controllers/app_controller_factory";
import { Language } from "./lib/core/languages/language";

const appStateController = new AppStateController();

export const App = () => {
  const [language, setLanguage] = useState<Language>(Language.EN_US);

  const toggleLanguage = () => {
    setLanguage((l) => l === Language.EN_US ? Language.PT_BR : Language.EN_US);
  }

  useEffect(() => {
    const changeLanguageButton = document.getElementById("changeLanguage");

    if (changeLanguageButton !== null) {
      changeLanguageButton.onclick = toggleLanguage;
    }
  }, []);

  useEffect(() => {
    const appController: AppController = appControllerFactory(language);
    appController.update();
  }, [language]);

  return (
    <>
      <button
        className="btn btn-primary d-print-none position-fixed m-3"
        id="changeLanguage"
      >
        Mudar Idioma
      </button>
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
            <h5 className="light-gray" id="contact-title">
              Contact
            </h5>
            <div className="row mx-0 mb-1">
              <div className="col-1 p-0 d-flex align-items-center justify-content-center">
                <i className="fab fa-github gray"></i>
              </div>
              <div className="col-11 pe-0">
                <p className="gray mb-0">/TulioPintoNeto</p>
              </div>
            </div>
            <div className="row mx-0 mb-1">
              <div className="col-1 p-0 d-flex align-items-center justify-content-center">
                <i className="fab fa-linkedin gray"></i>
              </div>
              <div className="col-11 pe-0">
                <p className="gray mb-0">/tulio-pinto-neto</p>
              </div>
            </div>
            <div className="row mx-0 mb-1">
              <div className="col-1 p-0 d-flex align-items-center justify-content-center">
                <i className="fas fa-map-marker-alt gray"></i>
              </div>
              <div className="col-11 pe-0">
                <p className="gray mb-0">Pelotas/RS - Brazil</p>
              </div>
            </div>
            <div className="row mx-0 mb-1">
              <div className="col-1 p-0 d-flex align-items-center justify-content-center">
                <i className="fas fa-mobile-alt gray"></i>
              </div>
              <div className="col-11 pe-0">
                <p className="gray mb-0 mt-1">+55 51 99408-1002</p>
              </div>
            </div>
            <div className="row mx-0 mb-2">
              <div className="col-1 p-0 d-flex align-items-center justify-content-center">
                <i className="fas fa-envelope gray"></i>
              </div>
              <div className="col-11 pe-0">
                <p className="gray mb-0">tulio_neto_2@hotmail.com</p>
              </div>
            </div>
            <h5 className="light-gray mt-3" id="languages-title">
              Languages
            </h5>
            <div id="languages"></div>
            <h5 className="light-gray mt-3">Expertise</h5>
            <div className="row gray">
              <div className="col-6">
                <p className="mb-2">CSS</p>
                <p className="mb-2">HTML</p>
                <p className="mb-2">MySQL</p>
                <p className="mb-2">PHP</p>
                <p className="mb-2">R</p>
              </div>
              <div className="col-6">
                <p className="mb-2">Flutter</p>
                <p className="mb-2">JavaScript</p>
                <p className="mb-2">Node</p>
                <p className="mb-2">Python</p>
                <p className="mb-2">React JS</p>
              </div>
            </div>
            <h5 className="light-gray mt-3">Softwares/IDE</h5>
            <div className="row gray">
              <div className="col-6">
                <p className="mb-2">FileZilla</p>
                <p className="mb-2">MS Excel</p>
                <p className="mb-2">MS Word</p>
                <p className="mb-2">SourceTree</p>
              </div>
              <div className="col-6">
                <p className="mb-2">Insomnia</p>
                <p className="mb-2">MS PowerPoint</p>
                <p className="mb-2">Postman</p>
                <p className="mb-2">VSCode</p>
              </div>
            </div>
            <h5 className="light-gray mt-3" id="others-title">
              Others
            </h5>
            <div className="row gray">
              <div className="col-6">
                <p className="mb-2">Bootstrap</p>
                <p className="mb-2">Clean Architecture</p>
                <p className="mb-2">RegEx</p>
                <p className="mb-2">SEO</p>
              </div>
              <div className="col-6">
                <p className="mb-2">Clean Code</p>
                <p className="mb-2">JQuery</p>
                <p className="mb-2">Scrum</p>
                <p className="mb-2">TDD</p>
              </div>
            </div>
            <h5 className="light-gray mt-3" id="interests-title">
              Interests
            </h5>
            <div id="interests"></div>
          </div>
          <div className="px-0 py-2 text-center" id="main-content">
            <h5
              className="py-2 w-100 light-gray bg-dark-blue"
              id="experiences-title"
            ></h5>
            <div id="experiences"></div>
            <div id="education">
              <h5
                className="py-2 w-100 light-gray bg-dark-blue"
                id="education-title"
              >
                Education
              </h5>
              <div id="educations"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};