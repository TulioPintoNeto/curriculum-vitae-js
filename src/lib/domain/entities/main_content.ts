import { Conversions } from "../../core/utils/conversios";
import { Brazil } from "./brazil";
import { LocationDetails } from "./location_details";

export interface MainContentParams {
  country: Brazil;
  present: string;
}

export abstract class MainContent {
  abstract endDate: Date | null;
  abstract initialDate: Date;

  present: string;
  location: LocationDetails;

  constructor(params: MainContentParams) {
    this.location = this._experienceLocationFromCountry(params.country);
    this.present = params.present;
  }

  abstract _experienceLocationFromCountry(country: Brazil): LocationDetails;

  getDuration(): number {
    const initialTime: number = this.initialDate.getTime();
    const endTime: number = this.endDate?.getTime() ?? new Date().getTime();
    const durationInYears: number = Conversions.milisecondsToYears(
      endTime - initialTime
    );

    return durationInYears;
  }

  getYearsInterval(): string {
    const initialYear = this.initialDate.getFullYear();

    if (this.endDate === null) {
      return `${initialYear} - ${this.present}`;
    }

    const endYear = this.endDate.getFullYear();

    if (initialYear === endYear) {
      return initialYear.toString();
    }

    return `${initialYear} - ${endYear}`;
  }
}
