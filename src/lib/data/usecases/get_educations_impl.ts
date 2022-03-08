import { Education } from "../../domain/entities/education";
import { EducationType } from "../../domain/entities/education_type";
import { MainSection } from "../../domain/entities/main_section";
import { GetEducationsParams } from "../params/get_educations_params";

export class GetEducationsImpl {
  params: GetEducationsParams;

  constructor(params: GetEducationsParams) {
    this.params = params;
  }

  call(): MainSection<Education<EducationType>> {
    return new MainSection({
      title: this.params.title,
      content: [
        this.params.systemsAnalysisAndDevelopment,
        this.params.nodeJSCertificate,
        this.params.flutterCertificate,
        this.params.reactJSCertificate,
        this.params.energyEngineer,
      ],
    });
  }
}
