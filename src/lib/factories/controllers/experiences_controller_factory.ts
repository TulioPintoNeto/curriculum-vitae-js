import { Language } from "../../core/languages/language";
import { ExperiencesController } from "../../presentation/controllers/experiences_controller";
import { titleRenderFactory } from "../renders/titles/titles_render_factory";
import { getExperiencesFactory } from "../usecases/get_experiences_factory";

export const experiencesControllerFactory = (
  language: Language
): ExperiencesController => {
  return new ExperiencesController({
    getExperiences: getExperiencesFactory(language),
    titleRender: titleRenderFactory(),
  });
};
