import { RendersController } from "../../core/controllers/controller";
import { Title, Titles } from "../../domain/entities/title";
import { GetTitles } from "../../domain/usecases/get_titles";
import { TitleAppender } from "../renders/titles/title_appender";

export class TitlesController implements RendersController {
  interestsId: string = "interests-title";
  languagesId: string = "languages-title";
  othersId: string = "others-title";

  titles: Title[];

  getTitles: GetTitles;

  constructor(params: { getTitles: GetTitles }) {
    this.getTitles = params.getTitles;

    this.titles = this.getTitles.call();
  }

  update(): void {
    this.titles.forEach((title: Title) => {
      new TitleAppender({
        text: title.locale,
        fatherId: this._getIdByType(title.type),
      });
    });
  }

  private _getIdByType(titleType: Titles): string {
    switch (titleType) {
      case Titles.INTERESTS:
        return this.interestsId;
      case Titles.OTHERS:
        return this.othersId;
      default:
        throw Error(`Unnimplemented father id for type: ${titleType}`);
    }
  }
}
