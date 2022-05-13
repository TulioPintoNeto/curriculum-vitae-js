import { Brazil } from "../../../../domain/entities/brazil";
import {
  Experience,
  ExperienceParams,
} from "../../../../domain/entities/experience";
import { LocationDetails } from "../../../../domain/entities/location_details";
import { FrontEndDevPosition } from "../../positions/front_end_dev_position";

export abstract class Eagle extends Experience<FrontEndDevPosition> {
  endDate: Date = new Date(2021, 7);
  initialDate: Date = new Date(2020, 11);

  constructor(params: ExperienceParams<FrontEndDevPosition>) {
    super(params);
  }

  _experienceLocationFromCountry(country: Brazil): LocationDetails {
    const company: string = "Eagle";

    return new LocationDetails({
      company: company,
    });
  }
}

export class EaglePT extends Eagle {
  responsabilities: string[] = [
    "Manutenção e desenvolvimento de funcionalidades direto no código fonte do website da empresa",
    "Manutenção nos SPA que a empresa possui e adição de novas funcionalidades",
    "Desenvolvimento completo de Single Page Application",
  ];
}

export class EagleEN extends Eagle {
  responsabilities: string[] = [
    "Maintenance and development of new functionalities for the company website source code",
    "Maintenance of the existent SPA and development of new functionalities",
    "Development of new SPA in partnership with the company's development team",
  ];
}
