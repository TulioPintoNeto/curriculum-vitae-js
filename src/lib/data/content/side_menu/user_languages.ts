import { UserLanguage } from "../../../domain/entities/user_language";

export abstract class UserLanguages {
  abstract portugueseLocale: string;
  abstract englishLocale: string;

  PORTUGUESE: UserLanguage = new UserLanguage({
    language: "",
    level: 5,
  });
  ENGLISH: UserLanguage = new UserLanguage({
    language: "",
    level: 3,
  });

  _setLocales() {
    this._setPortugueseLocale();
    this._setEnglishLocale();
  }

  _setPortugueseLocale() {
    this.PORTUGUESE.language = this.portugueseLocale;
  }

  _setEnglishLocale() {
    this.ENGLISH.language = this.englishLocale;
  }

  getLanguages(): UserLanguage[] {
    return [this.PORTUGUESE, this.ENGLISH];
  }
}

export class UserLanguagesEN extends UserLanguages {
  portugueseLocale: string = "Portuguese";
  englishLocale: string = "English";

  constructor() {
    super();
    this._setLocales();
  }
}

export class UserLanguagesPT extends UserLanguages {
  portugueseLocale: string = "Português";
  englishLocale: string = "Inglês";

  constructor() {
    super();
    this._setLocales();
  }
}
