import { Title, Titles } from "../../../domain/entities/title";

export abstract class LanguagesTitle extends Title {
  type: Titles = Titles.LANGUAGES;
}

export class LanguagesTitlePT extends LanguagesTitle {
  locale: string = "Idiomas";
}

export class LanguagesTitleEN extends LanguagesTitle {
  locale: string = "Languages";
}
