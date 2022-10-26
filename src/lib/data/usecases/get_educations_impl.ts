import { Education } from "../../domain/entities/education";
import { EducationType } from "../../domain/entities/education_type";
import { MainSection } from "../../domain/data_structure/main_section";
import { GetEducations } from "../../domain/usecases/get_educations";
import { GetEducationsParams } from "../params/get_educations_params";

export class GetEducationsImpl implements GetEducations {
  params: GetEducationsParams;

  constructor(params: GetEducationsParams) {
    this.params = params;
  }

  call(): MainSection<Education<EducationType>> {
    return new MainSection({
      title: this.params.title,
      content: [
        this.params.nodeJSCertificate,
        this.params.systemsAnalysisAndDevelopment,
        this.params.flutterCertificate,
        this.params.reactJSCertificate,
        this.params.energyEngineer,
      ],
    });
  }
}
