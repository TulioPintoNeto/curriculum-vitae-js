import { Language } from "../../core/languages/language";
import { LanguagesController } from "../../presentation/controllers/languages_controller";
import { getLanguagesFactory } from "../usecases/get_languages_factory";

export const languagesControllerFactory = (
  language: Language
): LanguagesController => {
  return new LanguagesController({
    getLanguages: getLanguagesFactory(language),
  });
};
