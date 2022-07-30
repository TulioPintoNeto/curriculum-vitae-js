import { Experience } from "../../domain/entities/experience";
import { Position } from "../../domain/entities/position";
import { ExperienceTitle } from "../content/titles/experience_title";

export interface GetExperiencesParams {
  title: ExperienceTitle;
  content: Experience<Position>[];
}
