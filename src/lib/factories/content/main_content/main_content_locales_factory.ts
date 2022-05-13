import { Language } from "../../../core/languages/language";
import {
  MainContentLocalesEN,
  MainContentLocalesPT,
} from "../../../data/content/main_content/main_content_locales";
import { MainContentLocales } from "../../../domain/entities/main_content_locales";

export const mainContentLocalesFactory = (
  language: Language
): MainContentLocales => {
  const locales: MainContentLocales = factory(language);

  return locales;
};

const factory = (language: Language): MainContentLocales => {
  switch (language) {
    case Language.EN_US:
      return new MainContentLocalesEN();
    case Language.PT_BR:
      return new MainContentLocalesPT();
  }
};
