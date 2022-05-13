import { Brazil } from "./brazil";

export class LocationDetails {
  company: string;

  constructor(params: { company: string }) {
    this.company = params.company;
  }
}
