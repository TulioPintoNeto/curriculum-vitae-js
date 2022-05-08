import { Language } from "../../core/languages/language";
import { GetTitlesImpl } from "../../data/usecases/get_titles_impl";
import { GetTitles } from "../../domain/usecases/get_titles";
import { contactTitleFactory } from "../content/title/contact_title_factory";
import { interestsTitleFactory } from "../content/title/interests_title_factory";
import { languagesTitleFactory } from "../content/title/languages_title_factory";
import { othersTitleFactory } from "../content/title/others_title_factory";

export const getTitlesFactory = (language: Language): GetTitles => {
  return new GetTitlesImpl({
    contactTitle: contactTitleFactory(language),
    interestsTitle: interestsTitleFactory(language),
    languagesTitle: languagesTitleFactory(language),
    othersTitle: othersTitleFactory(language),
  });
};
