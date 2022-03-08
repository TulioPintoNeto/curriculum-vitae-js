import { Title } from "../../../domain/entities/title";

export abstract class EducationTitle extends Title {}

export class EducationTitlePT extends EducationTitle {
  locale: string = "Educação";
}

export class EducationTitleEN extends EducationTitle {
  locale: string = "Education";
}
