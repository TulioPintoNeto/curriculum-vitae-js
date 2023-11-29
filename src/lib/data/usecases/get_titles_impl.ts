import { Title } from "../../domain/entities/title";
import { GetTitles } from "../../domain/usecases/get_titles";
import { GetTitlesParams } from "../params/get_titles_params";

export class GetTitlesImpl implements GetTitles {
  params: GetTitlesParams;

  constructor(params: GetTitlesParams) {
    this.params = params;
  }

  call(): Title[] {
    return [
      this.params.contactTitle,
      this.params.interestsTitle,
      this.params.othersTitle,
    ];
  }
}
