import { Language } from "../../core/languages/language";
import { AppController } from "../../presentation/controllers/app_controller";
import { interestsControllerFactory } from "./interests_controller_factory";
import { languagesControllerFactory } from "./languages_controller_factory";

export const appControllerFactory = (language: Language): AppController => {
  return new AppController({
    interestsController: interestsControllerFactory(language),
    languagesController: languagesControllerFactory(language),
  });
};
