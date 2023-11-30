import { locales } from "../../../locales";
import { useLanguage } from "../../context/language";

export const OthersSection = () => {
  const language = useLanguage();
  const { title } = locales.sideMenu.othersSection;

  return (
    <>
      <h5 className="light-gray mt-3">
        {title[language]}
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
    </>
  );
};
