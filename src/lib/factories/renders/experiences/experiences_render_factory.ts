import { ExperiencesRender } from "../../../presentation/renders/experiences/experiences_render";
import { mainSectionColumnRenderFactory } from "../common/main_section_column_render_factory";
import { mainSectionRowRenderFactory } from "../common/main_section_row_render_factory";
import { universalRenderFactory } from "../universal_render_factory";

export const experiencesRenderFactory = (): ExperiencesRender => {
  return new ExperiencesRender({
    mainSectionColumnRender: mainSectionColumnRenderFactory(),
    mainSectionRowRender: mainSectionRowRenderFactory(),
    render: universalRenderFactory(),
  });
};
