import { TitleRender } from "../../../presentation/renders/titles/title_render";
import { universalRenderFactory } from "../universal_render_factory";

export const titleRenderFactory = (): TitleRender => {
  return new TitleRender(universalRenderFactory());
};
