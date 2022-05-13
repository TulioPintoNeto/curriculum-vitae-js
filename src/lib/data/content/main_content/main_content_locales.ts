import { MainContentLocales } from "../../../domain/entities/main_content_locales";

export class MainContentLocalesEN extends MainContentLocales {
  present: string = "Present";
  months(duration: number): string {
    if (duration === 1) {
      return "month";
    }

    return "months";
  }
}

export class MainContentLocalesPT extends MainContentLocales {
  present: string = "Presente";
  months(duration: number): string {
    if (duration === 1) {
      return "mês";
    }

    return "meses";
  }
}
