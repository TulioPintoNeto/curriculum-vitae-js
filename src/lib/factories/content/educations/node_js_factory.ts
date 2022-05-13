import { Language } from "../../../core/languages/language";
import { NodeJSCertificate } from "../../../data/content/main_content/educations/node_js_certificate";
import { Certificate } from "../../../data/content/education_types/certificate";
import { EducationParams } from "../../../domain/entities/education";
import { certificateFactory } from "../education_types/certificate_factory";
import { mainContentParamsFactory } from "../main_content/main_content_params_factory";

export const nodeJSCertificateFactory = (
  language: Language
): NodeJSCertificate => {
  const params: EducationParams<Certificate> = {
    educationType: certificateFactory(language),
    mainContentParams: mainContentParamsFactory(language),
  };

  return new NodeJSCertificate(params);
};
