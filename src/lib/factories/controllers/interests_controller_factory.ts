import { Language } from "../../core/languages/language";
import { InterestsController } from "../../presentation/controllers/interests_controller";
import { getInterestsFactory } from "../usecases/get_interests_factory";

export const interestsControllerFactory = (
  language: Language
): InterestsController => {
  return new InterestsController({
    getInterests: getInterestsFactory(language),
  });
};
