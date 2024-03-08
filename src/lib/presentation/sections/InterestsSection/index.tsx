import { locales } from "../../../locales";
import { useLanguage } from "../../context/language";

export const InterestsSection = () => {
  const language = useLanguage();
  const { title, physicalActivity, music } = locales.skills.interestsSection;

  return (
    <div>
      <h5 className="pt-3">{title[language]}</h5>
      <div>
        <div className="row mx-0 mb-2">
          <div className="p-0 d-flex align-items-center justify-content-center col-1">
            <i className="fas fa-biking" aria-hidden="true"></i>
          </div>
          <div className="col-11">
            <p className="mb-0">{physicalActivity.title[language]}</p>
          </div>
        </div>
        <div className="row mx-0 mb-2">
          <div className="p-0 d-flex align-items-center justify-content-center col-1">
            <i className="fas fa-music" aria-hidden="true"></i>
          </div>
          <div className="col-11">
            <p className="mb-0">{music.title[language]}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
