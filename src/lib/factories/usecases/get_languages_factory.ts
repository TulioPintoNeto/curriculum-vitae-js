import { Language } from "../../core/languages/language";
import { GetLanguagesImpl } from "../../data/usecases/get_languages_impl";
import { GetLanguages } from "../../domain/usecases/get_languages";
import { userLanguagesFactory } from "../content/side_menu/user_languages_factory";

export const getLanguagesFactory = (language: Language): GetLanguages => {
  return new GetLanguagesImpl(userLanguagesFactory(language));
};
