import { Fragment } from "react";
import { locales } from "../../../locales";
import { useLanguage } from "../../context/language";
import { Education } from "./Education";

export const EducationSection = () => {
  const language = useLanguage();
  const { title, educations } = locales.educationSection;

  return (
    <div id="education">
      <h5 className="py-2 w-100 light-gray bg-dark-blue">{title[language]}</h5>
      <div>
        {educations.map((props) => (
          <Fragment key={props.title[language]}>
            <Education {...props} title={props.title[language]} />
          </Fragment>
        ))}
      </div>
    </div>
  );
};
