import { Language } from "../../core/languages/language";
import { EducationsController } from "../../presentation/controllers/educations_controller";
import { getEducationsFactory } from "../usecases/get_educations_factory";

export const educationsControllerFactory = (
  language: Language
): EducationsController => {
  return new EducationsController(getEducationsFactory(language));
};
