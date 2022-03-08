import { Brazil } from "../../../domain/entities/brazil";
import { Education } from "../../../domain/entities/education";
import { LocationDetails } from "../../../domain/entities/location_details";
import { Cities } from "../cities/cities";
import { EducationInstitutions } from "../education_instutions/education_institutions";
import { Certificate } from "../education_types/certificate";

export abstract class SystemsAnalysisAndDevelopment extends Education<Certificate> {
  endDate: Date | null = null;
  initialDate: Date = new Date(2022);

  _experienceLocationFromCountry(country: Brazil): LocationDetails {
    const company: string = EducationInstitutions.UCPEL;
    const city: string = Cities.PELOTAS;

    return new LocationDetails({
      city,
      company,
      country,
    });
  }
}

export class SystemsAnalysisAndDevelopmentEN extends SystemsAnalysisAndDevelopment {
  title: string = "Energy Engineer";
}

export class SystemsAnalysisAndDevelopmentPT extends SystemsAnalysisAndDevelopment {
  title: string = "Análise e Desenvolvimento de Sistemas";
}
