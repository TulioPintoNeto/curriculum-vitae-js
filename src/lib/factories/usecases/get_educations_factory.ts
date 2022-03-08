import { Language } from "../../core/languages/language";
import { GetEducationsImpl } from "../../data/usecases/get_educations_impl";
import { GetEducations } from "../../domain/usecases/get_educations";
import { energyEngineerFactory } from "../content/educations/energy_engineer_factory";
import { flutterCertificateFactory } from "../content/educations/flutter_certificate_factory";
import { nodeJSCertificateFactory } from "../content/educations/node_js_factory";
import { reactJSCertificateFactory } from "../content/educations/react_js_factory";
import { systemsAnalysisAndDevelopmentFactory } from "../content/educations/systems_analysis_and_development";
import { educationTitleFactory } from "../content/tite/education_title_factory";

export const getEducationsFactory = (language: Language): GetEducations => {
  return new GetEducationsImpl({
    title: educationTitleFactory(language),
    energyEngineer: energyEngineerFactory(language),
    flutterCertificate: flutterCertificateFactory(language),
    nodeJSCertificate: nodeJSCertificateFactory(language),
    reactJSCertificate: reactJSCertificateFactory(language),
    systemsAnalysisAndDevelopment:
      systemsAnalysisAndDevelopmentFactory(language),
  });
};
