import { Language } from "../../core/languages/language";
import { ExperiencesController } from "../../presentation/controllers/experiences_controller";
import { getExperiencesFactory } from "../usecases/get_experiences_factory";

export const experiencesControllerFactory = (
  language: Language
): ExperiencesController => {
  return new ExperiencesController(getExperiencesFactory(language));
};
