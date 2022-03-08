import { EducationType } from "../../../domain/entities/education_type";

export abstract class Certificate extends EducationType {}

export class CertificateEN extends Certificate {
  locale: string = "Certificate";
}

export class CertificatePT extends Certificate {
  locale: string = "Certificado";
}
