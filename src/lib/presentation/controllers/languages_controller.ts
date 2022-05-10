import { RendersController } from "../../core/controllers/controller";
import { UserLanguage } from "../../domain/entities/user_language";
import { GetLanguages } from "../../domain/usecases/get_languages";
import { LanguagesAppender } from "../renders/languages/languages_appender";

export class LanguagesController implements RendersController {
  languages: UserLanguage[];

  getLanguages: GetLanguages;

  constructor(params: { getLanguages: GetLanguages }) {
    this.getLanguages = params.getLanguages;

    this.languages = this.getLanguages.call();
  }

  update(): void {
    new LanguagesAppender({ userLanguages: this.languages });
  }
}
