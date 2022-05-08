import { CirclesRender } from "../../../presentation/renders/languages/circles_render";
import { iconRenderFactory } from "../common/icon_render_factory";

export const circlesRenderFactory = (): CirclesRender => {
  return new CirclesRender(iconRenderFactory());
};
