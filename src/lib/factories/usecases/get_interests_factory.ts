import { Language } from "../../core/languages/language";
import { GetInterestsImpl } from "../../data/usecases/get_interests_impl";
import { GetInterests } from "../../domain/usecases/get_interests";
import { interestsFactory } from "../content/side_menu/interests_factory";

export const getActivitiesFactory = (language: Language): GetInterests => {
  return new GetInterestsImpl(interestsFactory(language));
};
