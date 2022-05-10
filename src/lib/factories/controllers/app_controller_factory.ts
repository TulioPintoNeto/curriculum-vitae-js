import { Language } from "../../core/languages/language";
import { AppController } from "../../presentation/controllers/app_controller";
import { experiencesControllerFactory } from "./experiences_controller_factory";
import { interestsControllerFactory } from "./interests_controller_factory";
import { languagesControllerFactory } from "./languages_controller_factory";
import { titlesControllerFactory } from "./titles_controller_factory";

export const appControllerFactory = (language: Language): AppController => {
  return new AppController({
    experiencesController: experiencesControllerFactory(language),
    interestsController: interestsControllerFactory(language),
    languagesController: languagesControllerFactory(language),
    titlesController: titlesControllerFactory(language),
  });
};
