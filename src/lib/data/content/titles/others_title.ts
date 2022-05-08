import { Title, Titles } from "../../../domain/entities/title";

export abstract class OthersTitle extends Title {
  type: Titles = Titles.OTHERS;
}

export class OthersTitlePT extends OthersTitle {
  locale: string = "Outros";
}

export class OthersTitleEN extends OthersTitle {
  locale: string = "Others";
}
