import { locales } from "../../../locales";
import { useLanguage } from "../../context/language";

export const ExpertiseSection = () => {
  const language = useLanguage();
  const { title } = locales.sideMenu.expertiseSection;

  return (
    <div>
      <h5 className="pt-3">{title[language]}</h5>
      <div className="row">
        <div className="col-6">
          <p className="mb-2">React JS</p>
          <p className="mb-2">Next JS</p>
          <p className="mb-2">JavaScript</p>
          <p className="mb-2">Sass</p>
          <p className="mb-2">CSS</p>
        </div>
        <div className="col-6">
          <p className="mb-2">Flutter</p>
          <p className="mb-2">Node</p>
          <p className="mb-2">HTML</p>
          <p className="mb-2">MySQL</p>
          <p className="mb-2">Python</p>
        </div>
      </div>
    </div>
  );
};
