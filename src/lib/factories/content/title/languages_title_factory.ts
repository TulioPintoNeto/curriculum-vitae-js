import { Language } from "../../../core/languages/language";
import {
  LanguagesTitle,
  LanguagesTitleEN,
  LanguagesTitlePT,
} from "../../../data/content/titles/languages_title";

export const languagesTitleFactory = (language: Language): LanguagesTitle => {
  switch (language) {
    case Language.EN_US:
      return new LanguagesTitleEN();
    case Language.PT_BR:
      return new LanguagesTitlePT();
  }
};
