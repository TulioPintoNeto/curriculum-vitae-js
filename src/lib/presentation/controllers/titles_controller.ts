import { RendersController } from "../../core/controllers/controller";
import { Title, Titles } from "../../domain/entities/title";
import { GetTitles } from "../../domain/usecases/get_titles";
import { TitleRender } from "../renders/titles/title_render";

export class TitlesController implements RendersController {
  contactId: string = "contact-title";
  interestsId: string = "interests-title";
  languagesId: string = "languages-title";
  othersId: string = "others-title";

  titles: Title[];

  getTitles: GetTitles;
  titleRender: TitleRender;

  constructor(params: { getTitles: GetTitles; titleRender: TitleRender }) {
    this.getTitles = params.getTitles;
    this.titleRender = params.titleRender;

    this.titles = this.getTitles.call();
  }

  update(): void {
    this.titles.forEach((title: Title) => {
      this.titleRender.build({
        text: title.locale,
        fatherId: this._getIdByType(title.type),
      });
    });
  }

  private _getIdByType(titleType: Titles): string {
    switch (titleType) {
      case Titles.CONTACT:
        return this.contactId;
      case Titles.INTERESTS:
        return this.interestsId;
      case Titles.LANGUAGES:
        return this.languagesId;
      case Titles.OTHERS:
        return this.othersId;
      default:
        throw Error(`Unnimplemented father id for type: ${titleType}`);
    }
  }
}
