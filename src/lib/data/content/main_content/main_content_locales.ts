import { MainContentLocales } from "../../../domain/entities/main_content_locales";

export class MainContentLocalesEN extends MainContentLocales {
  present: string = "Present";
  months: string = "months";
}

export class MainContentLocalesPT extends MainContentLocales {
  present: string = "Presente";
  months: string = "meses";
}
