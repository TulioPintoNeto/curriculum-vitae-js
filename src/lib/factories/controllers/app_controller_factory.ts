import { Language } from "../../core/languages/language";
import { AppController } from "../../presentation/controllers/app_controller";
import { interestsControllerFactory } from "./interests_controller_factory";
import { titlesControllerFactory } from "./titles_controller_factory";

export const appControllerFactory = (language: Language): AppController => {
  return new AppController({
    interestsController: interestsControllerFactory(language),
    titlesController: titlesControllerFactory(language),
  });
};
