import { locales } from "../../../locales";
import { useLanguage } from "../../context/language";

export const InterestsSection = () => {
  const language = useLanguage();
  const { title, physicalActivity, music } = locales.sideMenu.interestsSection;

  return (
    <div className="side-menu-section">
      <h5 className="light-gray pt-3">{title[language]}</h5>
      <div>
        <div className="row gray mx-0 mb-2">
          <div className="p-0 d-flex align-items-center justify-content-center col-1">
            <i className="fas fa-biking gray" aria-hidden="true"></i>
          </div>
          <div className="col-11">
            <p className="mb-0">{physicalActivity.title[language]}</p>
          </div>
        </div>
        <div className="row gray mx-0 mb-2">
          <div className="p-0 d-flex align-items-center justify-content-center col-1">
            <i className="fas fa-music gray" aria-hidden="true"></i>
          </div>
          <div className="col-11">
            <p className="mb-0">{music.title[language]}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
