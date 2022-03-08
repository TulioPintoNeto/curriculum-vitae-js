import { Language } from "../../core/languages/language";
import { AppController } from "../../presentation/controllers/app_controller";
import { languagesControllerFactory } from "./languages_controller_factory";

export const appControllerFactory = (language: Language): AppController => {
  return new AppController({
    languagesController: languagesControllerFactory(language),
  });
};
