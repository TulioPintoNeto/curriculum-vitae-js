import { Language } from "../../../core/languages/language";
import { ReactJSCertificate } from "../../../data/content/educations/react_js_certificate";
import { Certificate } from "../../../data/content/education_types/certificate";
import { EducationParams } from "../../../domain/entities/education";
import { brazilFactory } from "../countries/brazil_factory";
import { certificateFactory } from "../education_types/certificate_factory";

export const reactJSCertificateFactory = (
  language: Language
): ReactJSCertificate => {
  const params: EducationParams<Certificate> = {
    educationType: certificateFactory(language),
    country: brazilFactory(language),
  };

  return new ReactJSCertificate(params);
};
