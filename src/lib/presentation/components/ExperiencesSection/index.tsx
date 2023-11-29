import { Fragment } from "react";
import { locales } from "../../../locales";
import { useLanguage } from "../../context/language";
import { Experience } from "./Experience";

export const ExperiencesSection = () => {
  const language = useLanguage();
  const { title, experiences } = locales.experiencesSection;

  return (
    <>
      <h5 className="py-2 w-100 light-gray bg-dark-blue">{title[language]}</h5>
      <div>
        {experiences.map((experience) => (
          <Fragment key={experience.company}>
            <Experience
              {...experience}
              responsabilities={experience.responsabilities[language]}
              title={experience.title[language]}
              type={experience.type[language]}
            />
          </Fragment>
        ))}
      </div>
    </>
  );
};
