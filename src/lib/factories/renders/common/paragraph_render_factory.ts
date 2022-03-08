import { ParagraphRender } from "../../../presentation/renders/common/paragraph_render";
import { universalRenderFactory } from "../universal_render_factory";

export const paragraphRenderFactory = (): ParagraphRender => {
  return new ParagraphRender(universalRenderFactory());
};
