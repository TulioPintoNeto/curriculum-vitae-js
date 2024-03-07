import { Fragment } from "react";
import { locales } from "../../../locales";
import { useLanguage } from "../../context/language";
import { LanguageComponent } from "./LanguageComponent";

export const LanguageSection = () => {
  const language = useLanguage();
  const { title, languages } = locales.sideMenu.languageSection;

  return (
    <div className="side-menu-section">
      <h5 className="pt-3">{title[language]}</h5>
      <div id="languages">
        <div className="row">
          {languages.map(({ level, text }) => (
            <Fragment key={text[language]}>
              <LanguageComponent level={level} text={text[language]} />
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
