import { MainSectionRowRender } from "../../../presentation/renders/common/main_section_row_render";
import { universalRenderFactory } from "../universal_render_factory";

export const mainSectionRowRenderFactory = (): MainSectionRowRender => {
  return new MainSectionRowRender(universalRenderFactory());
};
