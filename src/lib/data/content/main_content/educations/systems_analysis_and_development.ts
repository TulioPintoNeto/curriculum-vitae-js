import { Education } from "../../../../domain/entities/education";
import { EducationInstitutions } from "../../education_instutions/education_institutions";
import { Certificate } from "../../education_types/certificate";

export abstract class SystemsAnalysisAndDevelopment extends Education<Certificate> {
  endDate: Date | null = null;
  initialDate: Date = new Date(2022, 1);
  company: string = EducationInstitutions.UCPEL;
}

export class SystemsAnalysisAndDevelopmentEN extends SystemsAnalysisAndDevelopment {
  title: string = "Energy Engineer";
}

export class SystemsAnalysisAndDevelopmentPT extends SystemsAnalysisAndDevelopment {
  title: string = "Análise e Desenvolvimento de Sistemas";
}
