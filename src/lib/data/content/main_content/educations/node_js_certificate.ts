import { Brazil } from "../../../../domain/entities/brazil";
import { Education } from "../../../../domain/entities/education";
import { LocationDetails } from "../../../../domain/entities/location_details";
import { EducationInstitutions } from "../../education_instutions/education_institutions";
import { Certificate } from "../../education_types/certificate";

export class NodeJSCertificate extends Education<Certificate> {
  endDate: Date | null = null;
  initialDate: Date = new Date(2022);
  title: string = "Node JS";

  _experienceLocationFromCountry(country: Brazil): LocationDetails {
    const company: string = EducationInstitutions.ALURA;

    return new LocationDetails({
      company,
    });
  }
}
