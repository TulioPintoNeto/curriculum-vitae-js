import { Language } from "../../../core/languages/language";
import {
  Certificate,
  CertificateEN,
  CertificatePT,
} from "../../../data/content/education_types/certificate";

export const certificateFactory = (language: Language): Certificate => {
  switch (language) {
    case Language.EN_US:
      return new CertificateEN();
    case Language.PT_BR:
      return new CertificatePT();
  }
};
