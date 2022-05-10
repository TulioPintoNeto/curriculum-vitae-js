import { ExperiencesRender } from "../../../presentation/renders/experiences/experiences_render";
import { mainSectionColumnRenderFactory } from "../common/main_section_column_render_factory";

export const experiencesRenderFactory = (): ExperiencesRender => {
  return new ExperiencesRender({
    mainSectionColumnRender: mainSectionColumnRenderFactory(),
  });
};
