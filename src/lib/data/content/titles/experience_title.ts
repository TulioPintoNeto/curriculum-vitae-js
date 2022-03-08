import { Title } from "../../../domain/entities/title";

export abstract class ExperienceTitle extends Title {}

export class ExperienceTitlePT extends ExperienceTitle {
  locale: string = "Experiência";
}

export class ExperienceTitleEN extends ExperienceTitle {
  locale: string = "Experiência";
}
