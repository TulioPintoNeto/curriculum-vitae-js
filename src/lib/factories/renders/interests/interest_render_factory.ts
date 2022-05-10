import { InterestRender } from "../../../presentation/renders/interests/interest_render";
import { iconRenderFactory } from "../common/icon_render_factory";
import { paragraphRenderFactory } from "../common/paragraph_render_factory";

export const interestRenderFactory = (): InterestRender => {
  return new InterestRender({
    iconRender: iconRenderFactory(),
    paragraphRender: paragraphRenderFactory(),
  });
};
