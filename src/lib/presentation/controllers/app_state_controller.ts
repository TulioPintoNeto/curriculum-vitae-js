import { Language } from "../../core/languages/language";

export class AppStateController {
  language: Language = Language.EN_US;

  toggleLanguage(): Language {
    const newLanguage = this.newLanguage();

    this.language = newLanguage;

    return newLanguage;
  }

  newLanguage(): Language {
    switch (this.language) {
      case Language.EN_US:
        return Language.PT_BR;
      case Language.PT_BR:
        return Language.EN_US;
    }
  }
}
