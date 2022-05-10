import { ExperiencesRender } from "../../../presentation/renders/experiences/experiences_render";

export const experiencesRenderFactory = (): ExperiencesRender => {
  return new ExperiencesRender();
};
