import { Language } from "../../../core/languages/language";
import { MainContentParams } from "../../../domain/entities/main_content";
import { brazilFactory } from "../countries/brazil_factory";
import { mainContentLocalesFactory } from "./main_content_locales_factory";

export const mainContentParamsFactory = (
  language: Language
): MainContentParams => {
  return {
    country: brazilFactory(language),
    locales: mainContentLocalesFactory(language),
  };
};
