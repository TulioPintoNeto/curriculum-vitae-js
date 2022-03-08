import { AsideRowRender } from "../../../presentation/renders/common/aside_row_render";
import { universalRenderFactory } from "../universal_render_factory";

export const asideRowRenderFactory = (): AsideRowRender => {
  return new AsideRowRender(universalRenderFactory());
};
