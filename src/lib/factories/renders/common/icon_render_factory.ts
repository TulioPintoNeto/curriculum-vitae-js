import { IconRender } from "../../../presentation/renders/common/icon_render";
import { universalRenderFactory } from "../universal_render_factory";

export const iconRenderFactory = (): IconRender => {
  return new IconRender(universalRenderFactory());
};
