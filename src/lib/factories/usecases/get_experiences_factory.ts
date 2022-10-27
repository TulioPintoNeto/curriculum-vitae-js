import { Language } from "../../core/languages/language";
import { GetExperiencesImpl } from "../../data/usecases/get_experiences_impl";
import { GetExperiences } from "../../domain/usecases/get_experiences";
import { ciandtFactory } from "../content/experiences/ciandt_factory";
import { d3EnergyFactory } from "../content/experiences/d3_energy_factory";
import { eagleFactory } from "../content/experiences/eagle_factory";
import { emotusFactory } from "../content/experiences/emotus_factory";
import { firstTableFactory } from "../content/experiences/first_table_factory";
import { petSocialMediaFactory } from "../content/experiences/pet_social_media_factory";
import { startaideiaFactory } from "../content/experiences/startaideia_factory";
import { experienceTitleFactory } from "../content/title/experience_title_factory";

export const getExperiencesFactory = (language: Language): GetExperiences => {
  return new GetExperiencesImpl({
    title: experienceTitleFactory(language),
    content: [
      ciandtFactory(language),
      startaideiaFactory(language),
      firstTableFactory(language),
      eagleFactory(language),
      emotusFactory(language),
      petSocialMediaFactory(language),
      d3EnergyFactory(language),
    ],
  });
};
