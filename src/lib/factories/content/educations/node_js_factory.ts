import { Language } from "../../../core/languages/language";
import { NodeJSCertificate } from "../../../data/content/educations/node_js_certificate";
import { Certificate } from "../../../data/content/education_types/certificate";
import { EducationParams } from "../../../domain/entities/education";
import { brazilFactory } from "../countries/brazil_factory";
import { certificateFactory } from "../education_types/certificate_factory";

export const nodeJSCertificateFactory = (
  language: Language
): NodeJSCertificate => {
  const params: EducationParams<Certificate> = {
    educationType: certificateFactory(language),
    country: brazilFactory(language),
  };

  return new NodeJSCertificate(params);
};
