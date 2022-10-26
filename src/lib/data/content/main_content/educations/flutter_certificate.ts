import { Education } from "../../../../domain/entities/education";
import { EducationInstitutions } from "../../education_instutions/education_institutions";
import { Certificate } from "../../education_types/certificate";

export class FlutterCertificate extends Education<Certificate> {
  endDate: Date = new Date(2021, 1);
  initialDate: Date = new Date(2021, 1);
  title: string = "Flutter";
  company: string = EducationInstitutions.ALURA;
}
