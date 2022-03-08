import { CirclesRender } from "../../../presentation/renders/languages/circles_render";
import { universalRenderFactory } from "../universal_render_factory";

export const circlesRenderFactory = (): CirclesRender => {
  return new CirclesRender(universalRenderFactory());
};
