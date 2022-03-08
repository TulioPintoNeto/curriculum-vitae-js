import { Brazil } from "../../../domain/entities/brazil";
import { Education } from "../../../domain/entities/education";
import { LocationDetails } from "../../../domain/entities/location_details";
import { EducationInstitutions } from "../education_instutions/education_institutions";
import { Certificate } from "../education_types/certificate";

export class FlutterCertificate extends Education<Certificate> {
  endDate: Date = new Date(2022);
  initialDate: Date = new Date(2022);
  title: string = "Flutter";

  _experienceLocationFromCountry(country: Brazil): LocationDetails {
    const company: string = EducationInstitutions.ALURA;

    return new LocationDetails({
      city: null,
      company,
      country,
    });
  }
}
