import { Title, Titles } from "../../../domain/entities/title";

export abstract class EducationTitle extends Title {
  type: Titles = Titles.EDUCATION;
}

export class EducationTitlePT extends EducationTitle {
  locale: string = "Educação";
}

export class EducationTitleEN extends EducationTitle {
  locale: string = "Education";
}
