import { Language } from "../../core/languages/language";
import { ExperiencesController } from "../../presentation/controllers/experiences_controller";
import { experiencesRenderFactory } from "../renders/experiences/experiences_render_factory";
import { titleRenderFactory } from "../renders/titles/titles_render_factory";
import { getExperiencesFactory } from "../usecases/get_experiences_factory";

export const experiencesControllerFactory = (
  language: Language
): ExperiencesController => {
  return new ExperiencesController({
    experiencesRender: experiencesRenderFactory(),
    getExperiences: getExperiencesFactory(language),
    titleRender: titleRenderFactory(),
  });
};
