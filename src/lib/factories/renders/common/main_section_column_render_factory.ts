import { MainSectionColumnRender } from "../../../presentation/renders/common/main_section_column_render";
import { universalRenderFactory } from "../universal_render_factory";

export const mainSectionColumnRenderFactory = (): MainSectionColumnRender => {
  return new MainSectionColumnRender(universalRenderFactory());
};
