import { Fragment } from "react";
import { locales } from "../../../locales";
import { useLanguage } from "../../context/language";
import { Education } from "./Education";
import { Title } from "../../components/Title";

export const EducationSection = () => {
  const language = useLanguage();
  const { title, educations } = locales.educationSection;

  return (
    <div id="education">
      <Title>{title[language]}</Title>
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
