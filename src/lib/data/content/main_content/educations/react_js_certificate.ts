import { Education } from "../../../../domain/entities/education";
import { EducationInstitutions } from "../../education_instutions/education_institutions";
import { Certificate } from "../../education_types/certificate";

export class ReactJSCertificate extends Education<Certificate> {
  endDate: Date = new Date(2021, 1);
  initialDate: Date = new Date(2021, 1);
  title: string = "React JS";
  company: string = EducationInstitutions.ALURA;
}
