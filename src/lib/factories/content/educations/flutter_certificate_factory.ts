import { Language } from "../../../core/languages/language";
import { FlutterCertificate } from "../../../data/content/educations/flutter_certificate";
import { Certificate } from "../../../data/content/education_types/certificate";
import { EducationParams } from "../../../domain/entities/education";
import { brazilFactory } from "../countries/brazil_factory";
import { certificateFactory } from "../education_types/certificate_factory";

export const flutterCertificateFactory = (
  language: Language
): FlutterCertificate => {
  const params: EducationParams<Certificate> = {
    educationType: certificateFactory(language),
    country: brazilFactory(language),
  };

  return new FlutterCertificate(params);
};
