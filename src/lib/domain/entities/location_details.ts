import { Brazil } from "./brazil";

export class LocationDetails {
  city: string | null;
  company: string;
  country: string;

  constructor(params: {
    city: string | null;
    company: string;
    country: Brazil;
  }) {
    this.city = params.city;
    this.company = params.company;
    this.country = params.country.locale;
  }
}
