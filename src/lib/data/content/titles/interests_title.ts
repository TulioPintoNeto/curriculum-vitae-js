import { Title, Titles } from "../../../domain/entities/title";

export abstract class InterestsTitle extends Title {
  type: Titles = Titles.INTERESTS;
}

export class InterestsTitlePT extends InterestsTitle {
  locale: string = "Interesses";
}

export class InterestsTitleEN extends InterestsTitle {
  locale: string = "Interests";
}
