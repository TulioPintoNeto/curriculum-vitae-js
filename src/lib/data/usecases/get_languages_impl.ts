import { UserLanguage } from "../../domain/entities/user_language";
import { UserLanguages } from "../content/side_menu/user_languages";

export class GetLanguagesImpl {
  languages: UserLanguages;

  constructor(languages: UserLanguages) {
    this.languages = languages;
  }

  call(): UserLanguage[] {
    return this.languages.getLanguages();
  }
}
