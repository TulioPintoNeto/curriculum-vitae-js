import { Fragment } from "react";
import { locales } from "../../../locales";
import { useLanguage } from "../../context/language";
import { Experience } from "./Experience";
import { Title } from "../../components/Title";

export const ExperiencesSection = () => {
  const language = useLanguage();
  const { title, experiences } = locales.experiencesSection;

  return (
    <>
      <Title>{title[language]}</Title>
      <div>
        {experiences.map((experience) => {
          if (Array.isArray(experience)) {
            return experience.map((nationalExperience, i) => (
              <Fragment key={nationalExperience.company}>
                <Experience
                  continuousLine={experience.length !== i + 1}
                  {...nationalExperience}
                  responsabilities={
                    nationalExperience.responsabilities[language]
                  }
                  title={nationalExperience.title[language]}
                  type={nationalExperience.type[language]}
                />
              </Fragment>
            ));
          }
          return (
            <Fragment key={experience.company}>
              <Experience
                {...experience}
                responsabilities={experience.responsabilities[language]}
                title={experience.title[language]}
                type={experience.type[language]}
              />
            </Fragment>
          );
        })}
      </div>
    </>
  );
};
