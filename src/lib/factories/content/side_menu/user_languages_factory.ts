import { Language } from "../../../core/languages/language";
import {
  UserLanguages,
  UserLanguagesEN,
  UserLanguagesPT,
} from "../../../data/content/side_menu/user_languages";

export const userLanguagesFactory = (language: Language): UserLanguages => {
  switch (language) {
    case Language.EN_US:
      return new UserLanguagesEN();
    case Language.PT_BR:
      return new UserLanguagesPT();
  }
};
