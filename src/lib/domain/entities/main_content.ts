import { Conversions } from "../../core/utils/conversios";
import { Brazil } from "./brazil";
import { LocationDetails } from "./location_details";
import { MainContentLocales } from "./main_content_locales";

export interface MainContentParams {
  country: Brazil;
  locales: MainContentLocales;
}

export abstract class MainContent {
  abstract endDate: Date | null;
  abstract initialDate: Date;

  locales: MainContentLocales;
  location: LocationDetails;

  constructor(params: MainContentParams) {
    this.location = this._experienceLocationFromCountry(params.country);
    this.locales = params.locales;
  }

  abstract _experienceLocationFromCountry(country: Brazil): LocationDetails;

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
