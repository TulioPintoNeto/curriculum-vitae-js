import { RendersController } from "../../core/controllers/controller";
import { UserLanguage } from "../../domain/entities/user_language";
import { GetLanguages } from "../../domain/usecases/get_languages";
import { LanguagesRender } from "../renders/languages/languages_render";

export class LanguagesController implements RendersController {
  languages: UserLanguage[];

  getLanguages: GetLanguages;
  languagesRender: LanguagesRender;

  constructor(params: {
    getLanguages: GetLanguages;
    languagesRender: LanguagesRender;
  }) {
    this.getLanguages = params.getLanguages;
    this.languagesRender = params.languagesRender;

    this.languages = this.getLanguages.call();
  }

  update(): void {
    this.languagesRender.build(this.languages);
  }
}
