import { Education } from "../../../../domain/entities/education";
import { EducationInstitutions } from "../../education_instutions/education_institutions";
import { Certificate } from "../../education_types/certificate";

export class NodeJSCertificate extends Education<Certificate> {
  endDate: Date | null = null;
  initialDate: Date = new Date(2022);
  title: string = "Node JS";
  company: string = EducationInstitutions.ALURA;
}
