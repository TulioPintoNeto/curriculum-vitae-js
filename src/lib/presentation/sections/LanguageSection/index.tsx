import { Fragment } from "react";
import { locales } from "../../../locales";
import { useLanguage } from "../../context/language";
import { LanguageComponent } from "./LanguageComponent";

export const LanguageSection = () => {
  const language = useLanguage();
  const { title, languages } = locales.sideMenu.languageSection;

  return (
    <div>
      <div>
        <div className="d-flex justify-content-around">
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
