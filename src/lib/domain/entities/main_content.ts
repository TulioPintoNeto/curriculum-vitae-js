import { Conversions } from "../../core/utils/conversios";
import { Brazil } from "./brazil";
import { MainContentLocales } from "./main_content_locales";

export interface MainContentParams {
  country: Brazil;
  locales: MainContentLocales;
}

export abstract class MainContent {
  abstract endDate: Date | null;
  abstract initialDate: Date;
  abstract company: string;

  locales: MainContentLocales;

  constructor(params: MainContentParams) {
    this.locales = params.locales;
  }

  getDuration(): string {
    const months: number = this._getMonthDuration();

    return `${months} ${this.locales.months(months)}`;
  }

  getYearsInterval(): string {
    const initialYear = this.initialDate.getFullYear();

    if (this.endDate === null) {
      return `${initialYear} - ${this.locales.present}`;
    }

    const endYear = this.endDate.getFullYear();

    if (initialYear === endYear) {
      return initialYear.toString();
    }

    return `${initialYear} - ${endYear}`;
  }

  private _getMonthDuration(): number {
    const initialTime: number = this.initialDate.getTime();
    const endTime: number = this.endDate?.getTime() ?? new Date().getTime();
    const durationInMonths: number = Conversions.milisecondsToMonths(
      endTime - initialTime
    );

    return durationInMonths;
  }
}
