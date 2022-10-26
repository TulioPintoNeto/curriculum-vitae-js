import { Education } from "../../../../domain/entities/education";
import { EducationInstitutions } from "../../education_instutions/education_institutions";
import { Certificate } from "../../education_types/certificate";

export abstract class SystemsAnalysisAndDevelopment extends Education<Certificate> {
  endDate: Date | null = new Date(2022, 9);
  initialDate: Date = new Date(2021, 1);
  company: string = EducationInstitutions.UCPEL;
}

export class SystemsAnalysisAndDevelopmentEN extends SystemsAnalysisAndDevelopment {
  title: string = "Systems Analasys and Development (until 3º semester)";
}

export class SystemsAnalysisAndDevelopmentPT extends SystemsAnalysisAndDevelopment {
  title: string = "Análise e Desenvolvimento de Sistemas (até 3º semestre)";
}
