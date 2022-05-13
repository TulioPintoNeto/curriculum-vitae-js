import { Language } from "../../../core/languages/language";
import { MainContentParams } from "../../../domain/entities/main_content";
import { brazilFactory } from "../countries/brazil_factory";
import { presentFactory } from "../interval/present_factory";

export const mainContentParamsFactory = (
  language: Language
): MainContentParams => {
  return {
    country: brazilFactory(language),
    present: presentFactory(language),
  };
};
