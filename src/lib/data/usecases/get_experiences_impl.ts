import { Experience } from "../../domain/entities/experience";
import { MainSection } from "../../domain/data_structure/main_section";
import { Position } from "../../domain/entities/position";
import { GetExperiencesMainSection } from "../../domain/usecases/get_experiences";
import { GetExperiencesParams } from "../params/get_experiences_params";

export class GetExperiencesImpl implements GetExperiencesMainSection {
  params: GetExperiencesParams;

  constructor(params: GetExperiencesParams) {
    this.params = params;
  }

  call(): MainSection<Experience<Position>> {
    return new MainSection({
      title: this.params.title,
      content: this.params.content,
    });
  }
}
