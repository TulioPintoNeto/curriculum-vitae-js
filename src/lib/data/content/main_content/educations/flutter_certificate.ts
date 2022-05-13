import { Education } from "../../../../domain/entities/education";
import { EducationInstitutions } from "../../education_instutions/education_institutions";
import { Certificate } from "../../education_types/certificate";

export class FlutterCertificate extends Education<Certificate> {
  endDate: Date = new Date(2022);
  initialDate: Date = new Date(2022);
  title: string = "Flutter";
  company: string = EducationInstitutions.ALURA;
}
