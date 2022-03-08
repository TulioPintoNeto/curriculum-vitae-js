import { EnergyEngineer } from "../content/educations/energy_engineer";
import { FlutterCertificate } from "../content/educations/flutter_certificate";
import { NodeJSCertificate } from "../content/educations/node_js_certificate";
import { ReactJSCertificate } from "../content/educations/react_js_certificate";
import { SystemsAnalysisAndDevelopment } from "../content/educations/systems_analysis_and_development";
import { EducationTitle } from "../content/titles/education_title";

export interface GetEducationsParams {
  title: EducationTitle;
  energyEngineer: EnergyEngineer;
  flutterCertificate: FlutterCertificate;
  nodeJSCertificate: NodeJSCertificate;
  reactJSCertificate: ReactJSCertificate;
  systemsAnalysisAndDevelopment: SystemsAnalysisAndDevelopment;
}
