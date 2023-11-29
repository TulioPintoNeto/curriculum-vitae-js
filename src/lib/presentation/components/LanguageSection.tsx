import { locales } from "../../locales";
import { useLanguage } from "../context/language";
import { LanguageComponent } from "./LanguageComponent";

export const LanguageSection = () => {
  const language = useLanguage();
  const { title, languages } = locales.languagesSection;

  return (
    <>
      <h5 className="light-gray mt-3">{title[language]}</h5>
      <div id="languages">
        <div className="gray row">
          {languages.map(({level, text}) => (
          <LanguageComponent level={level} text={text[language]} />
          ))}
        </div>
      </div>
    </>
  );
};
