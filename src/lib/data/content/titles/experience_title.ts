import { Title, Titles } from "../../../domain/entities/title";

export abstract class ExperienceTitle extends Title {
  type: Titles = Titles.EXPERIENCE;
}

export class ExperienceTitlePT extends ExperienceTitle {
  locale: string = "Experiência";
}

export class ExperienceTitleEN extends ExperienceTitle {
  locale: string = "Experiência";
}
