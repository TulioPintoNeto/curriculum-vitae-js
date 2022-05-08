import { Title, Titles } from "../../../domain/entities/title";

export abstract class ContactTitle extends Title {
  type: Titles = Titles.CONTACT;
}

export class ContactTitlePT extends ContactTitle {
  locale: string = "Contato";
}

export class ContactTitleEN extends ContactTitle {
  locale: string = "Contact";
}
