import { D3Energy } from "../content/main_content/experiences/d3_energy";
import { Eagle } from "../content/main_content/experiences/eagle";
import { Emotus } from "../content/main_content/experiences/emotus";
import { FirstTable } from "../content/main_content/experiences/first_table";
import { PetSocialMedia } from "../content/main_content/experiences/pet_social_media";
import { Startaideia } from "../content/main_content/experiences/startaideia";
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
