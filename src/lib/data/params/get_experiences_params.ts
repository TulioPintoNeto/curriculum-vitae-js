import { D3Energy } from "../content/experiences/d3_energy";
import { Eagle } from "../content/experiences/eagle";
import { Emotus } from "../content/experiences/emotus";
import { FirstTable } from "../content/experiences/first_table";
import { PetSocialMedia } from "../content/experiences/pet_social_media";
import { Startaideia } from "../content/experiences/startaideia";
import { ExperienceTitle } from "../content/titles/experience_title";

export interface GetExperiencesParams {
  title: ExperienceTitle;
  d3Energy: D3Energy;
  eagle: Eagle;
  emotus: Emotus;
  firstTable: FirstTable;
  petSocialMedia: PetSocialMedia;
  startaideia: Startaideia;
}
