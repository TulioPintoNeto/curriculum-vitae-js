import { Brazil } from "../../../domain/entities/brazil";
import { Education } from "../../../domain/entities/education";
import { LocationDetails } from "../../../domain/entities/location_details";
import { Cities } from "../cities/cities";
import { EducationInstitutions } from "../education_instutions/education_institutions";
import { Bachelor } from "../education_types/bachelor";

export abstract class EnergyEngineer extends Education<Bachelor> {
  endDate: Date = new Date(2020);
  initialDate: Date = new Date(2013);

  _experienceLocationFromCountry(country: Brazil): LocationDetails {
    const company: string = EducationInstitutions.UFRGS;
    const city: string = Cities.PORTO_ALEGRE;

    return new LocationDetails({
      city,
      company,
      country,
    });
  }
}

export class EnergyEngineerEN extends EnergyEngineer {
  title: string = "Energy Engineer";
}

export class EnergyEngineerPT extends EnergyEngineer {
  title: string = "Engenharia de Energia";
}
