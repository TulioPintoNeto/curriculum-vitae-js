import { Fragment } from "react";
import { locales } from "../../../locales";
import { useLanguage } from "../../context/language";
import { LanguageComponent } from "./LanguageComponent";
import CN from "classnames";
import styles from "./styles.module.scss";

export const LanguageSection = () => {
  const language = useLanguage();
  const { title, languages } = locales.skills.languageSection;

  return (
    <div
      className={CN("d-flex justify-content-around", styles.languageWrapper)}
    >
      {languages.map(({ level, text }) => (
        <Fragment key={text[language]}>
          <LanguageComponent level={level} text={text[language]} />
        </Fragment>
      ))}
    </div>
  );
};
