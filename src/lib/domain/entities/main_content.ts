import { Brazil } from "./brazil";
import { LocationDetails } from "./location_details";

export abstract class MainContent {
  abstract endDate: Date | null;
  abstract initialDate: Date;

  location: LocationDetails;

  constructor(country: Brazil) {
    this.location = this._experienceLocationFromCountry(country);
  }

  abstract _experienceLocationFromCountry(country: Brazil): LocationDetails;
}
