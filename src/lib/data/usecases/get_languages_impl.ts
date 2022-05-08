import { UserLanguage } from "../../domain/entities/user_language";
import { GetLanguages } from "../../domain/usecases/get_languages";
import { UserLanguages } from "../content/side_menu/user_languages";

export class GetLanguagesImpl implements GetLanguages {
  languages: UserLanguages;

  constructor(languages: UserLanguages) {
    this.languages = languages;
  }

  call(): UserLanguage[] {
    return this.languages.getLanguages();
  }
}
